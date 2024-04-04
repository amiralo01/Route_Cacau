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
  Localidade,
  LocalidadeIntermediaria,
} from '../models';
import {LocalidadeRepository} from '../repositories';

export class LocalidadeLocalidadeIntermediariaController {
  constructor(
    @repository(LocalidadeRepository) protected localidadeRepository: LocalidadeRepository,
  ) { }

  @get('/localidades/{id}/localidade-intermediarias', {
    responses: {
      '200': {
        description: 'Array of Localidade has many LocalidadeIntermediaria',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(LocalidadeIntermediaria)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<LocalidadeIntermediaria>,
  ): Promise<LocalidadeIntermediaria[]> {
    return this.localidadeRepository.localidade_locInter(id).find(filter);
  }

  @post('/localidades/{id}/localidade-intermediarias', {
    responses: {
      '200': {
        description: 'Localidade model instance',
        content: {'application/json': {schema: getModelSchemaRef(LocalidadeIntermediaria)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Localidade.prototype.idLocalidade,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LocalidadeIntermediaria, {
            title: 'NewLocalidadeIntermediariaInLocalidade',
            exclude: ['idLocalidadeInter'],
            optional: ['localidadeInter']
          }),
        },
      },
    }) localidadeIntermediaria: Omit<LocalidadeIntermediaria, 'idLocalidadeInter'>,
  ): Promise<LocalidadeIntermediaria> {
    return this.localidadeRepository.localidade_locInter(id).create(localidadeIntermediaria);
  }

  @patch('/localidades/{id}/localidade-intermediarias', {
    responses: {
      '200': {
        description: 'Localidade.LocalidadeIntermediaria PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LocalidadeIntermediaria, {partial: true}),
        },
      },
    })
    localidadeIntermediaria: Partial<LocalidadeIntermediaria>,
    @param.query.object('where', getWhereSchemaFor(LocalidadeIntermediaria)) where?: Where<LocalidadeIntermediaria>,
  ): Promise<Count> {
    return this.localidadeRepository.localidade_locInter(id).patch(localidadeIntermediaria, where);
  }

  @del('/localidades/{id}/localidade-intermediarias', {
    responses: {
      '200': {
        description: 'Localidade.LocalidadeIntermediaria DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(LocalidadeIntermediaria)) where?: Where<LocalidadeIntermediaria>,
  ): Promise<Count> {
    return this.localidadeRepository.localidade_locInter(id).delete(where);
  }
}
