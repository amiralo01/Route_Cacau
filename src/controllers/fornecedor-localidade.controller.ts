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
  Localidade,
} from '../models';
import {FornecedorRepository} from '../repositories';

export class FornecedorLocalidadeController {
  constructor(
    @repository(FornecedorRepository) protected fornecedorRepository: FornecedorRepository,
  ) { }

  @get('/fornecedors/{id}/localidades', {
    responses: {
      '200': {
        description: 'Array of Fornecedor has many Localidade',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Localidade)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Localidade>,
  ): Promise<Localidade[]> {
    return this.fornecedorRepository.Loc_Fornecedor(id).find(filter);
  }

  @post('/fornecedors/{id}/localidades', {
    responses: {
      '200': {
        description: 'Fornecedor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Localidade)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Fornecedor.prototype.idFornecedor,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Localidade, {
            title: 'NewLocalidadeInFornecedor',
            exclude: ['idLocalidade'],
            optional: ['fornecedorId']
          }),
        },
      },
    }) localidade: Omit<Localidade, 'idLocalidade'>,
  ): Promise<Localidade> {
    return this.fornecedorRepository.Loc_Fornecedor(id).create(localidade);
  }

  @patch('/fornecedors/{id}/localidades', {
    responses: {
      '200': {
        description: 'Fornecedor.Localidade PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Localidade, {partial: true}),
        },
      },
    })
    localidade: Partial<Localidade>,
    @param.query.object('where', getWhereSchemaFor(Localidade)) where?: Where<Localidade>,
  ): Promise<Count> {
    return this.fornecedorRepository.Loc_Fornecedor(id).patch(localidade, where);
  }

  @del('/fornecedors/{id}/localidades', {
    responses: {
      '200': {
        description: 'Fornecedor.Localidade DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Localidade)) where?: Where<Localidade>,
  ): Promise<Count> {
    return this.fornecedorRepository.Loc_Fornecedor(id).delete(where);
  }
}
