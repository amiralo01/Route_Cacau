import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
Cacau,
Rota,
Fornecedor,
} from '../models';
import {CacauRepository} from '../repositories';

export class CacauFornecedorController {
  constructor(
    @repository(CacauRepository) protected cacauRepository: CacauRepository,
  ) { }

  @get('/cacaus/{id}/fornecedors', {
    responses: {
      '200': {
        description: 'Array of Cacau has many Fornecedor through Rota',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Fornecedor)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Fornecedor>,
  ): Promise<Fornecedor[]> {
    return this.cacauRepository.fornecedors(id).find(filter);
  }

  @post('/cacaus/{id}/fornecedors', {
    responses: {
      '200': {
        description: 'create a Fornecedor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Fornecedor)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Cacau.prototype.idCacau,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fornecedor, {
            title: 'NewFornecedorInCacau',
            exclude: ['idFornecedor'],
          }),
        },
      },
    }) fornecedor: Omit<Fornecedor, 'idFornecedor'>,
  ): Promise<Fornecedor> {
    return this.cacauRepository.fornecedors(id).create(fornecedor);
  }

  @patch('/cacaus/{id}/fornecedors', {
    responses: {
      '200': {
        description: 'Cacau.Fornecedor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fornecedor, {partial: true}),
        },
      },
    })
    fornecedor: Partial<Fornecedor>,
    @param.query.object('where', getWhereSchemaFor(Fornecedor)) where?: Where<Fornecedor>,
  ): Promise<Count> {
    return this.cacauRepository.fornecedors(id).patch(fornecedor, where);
  }

  @del('/cacaus/{id}/fornecedors', {
    responses: {
      '200': {
        description: 'Cacau.Fornecedor DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Fornecedor)) where?: Where<Fornecedor>,
  ): Promise<Count> {
    return this.cacauRepository.fornecedors(id).delete(where);
  }
}
