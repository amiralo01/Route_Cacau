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
  Cacau,
} from '../models';
import {LocalidadeRepository} from '../repositories';

export class LocalidadeCacauController {
  constructor(
    @repository(LocalidadeRepository) protected localidadeRepository: LocalidadeRepository,
  ) { }

  @get('/localidades/{id}/cacaus', {
    responses: {
      '200': {
        description: 'Array of Localidade has many Cacau',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cacau)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Cacau>,
  ): Promise<Cacau[]> {
    return this.localidadeRepository.Loc_Cacau(id).find(filter);
  }

  @post('/localidades/{id}/cacaus', {
    responses: {
      '200': {
        description: 'Localidade model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cacau)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Localidade.prototype.idLocalidade,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cacau, {
            title: 'NewCacauInLocalidade',
            exclude: ['idCacau'],
            optional: ['localidadeId']
          }),
        },
      },
    }) cacau: Omit<Cacau, 'idCacau'>,
  ): Promise<Cacau> {
    return this.localidadeRepository.Loc_Cacau(id).create(cacau);
  }

  @patch('/localidades/{id}/cacaus', {
    responses: {
      '200': {
        description: 'Localidade.Cacau PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cacau, {partial: true}),
        },
      },
    })
    cacau: Partial<Cacau>,
    @param.query.object('where', getWhereSchemaFor(Cacau)) where?: Where<Cacau>,
  ): Promise<Count> {
    return this.localidadeRepository.Loc_Cacau(id).patch(cacau, where);
  }

  @del('/localidades/{id}/cacaus', {
    responses: {
      '200': {
        description: 'Localidade.Cacau DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Cacau)) where?: Where<Cacau>,
  ): Promise<Count> {
    return this.localidadeRepository.Loc_Cacau(id).delete(where);
  }
}
