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
  Fornecedor,
  Rota,
} from '../models';
import {FornecedorRepository} from '../repositories';

export class FornecedorRotaController {
  constructor(
    @repository(FornecedorRepository) protected fornecedorRepository: FornecedorRepository,
  ) { }

  @get('/fornecedors/{id}/rotas', {
    responses: {
      '200': {
        description: 'Array of Fornecedor has many Rota',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Rota)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Rota>,
  ): Promise<Rota[]> {
    return this.fornecedorRepository.rotas(id).find(filter);
  }

  @post('/fornecedors/{id}/rotas', {
    responses: {
      '200': {
        description: 'Fornecedor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Rota)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Fornecedor.prototype.idFornecedor,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rota, {
            title: 'NewRotaInFornecedor',
            exclude: ['idRota'],
            optional: ['fornecedorId']
          }),
        },
      },
    }) rota: Omit<Rota, 'idRota'>,
  ): Promise<Rota> {
    return this.fornecedorRepository.rotas(id).create(rota);
  }

  @patch('/fornecedors/{id}/rotas', {
    responses: {
      '200': {
        description: 'Fornecedor.Rota PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rota, {partial: true}),
        },
      },
    })
    rota: Partial<Rota>,
    @param.query.object('where', getWhereSchemaFor(Rota)) where?: Where<Rota>,
  ): Promise<Count> {
    return this.fornecedorRepository.rotas(id).patch(rota, where);
  }

  @del('/fornecedors/{id}/rotas', {
    responses: {
      '200': {
        description: 'Fornecedor.Rota DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Rota)) where?: Where<Rota>,
  ): Promise<Count> {
    return this.fornecedorRepository.rotas(id).delete(where);
  }
}
