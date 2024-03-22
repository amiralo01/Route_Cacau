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
  Rota,
  Cacau,
} from '../models';
import {RotaRepository} from '../repositories';

export class RotaCacauController {
  constructor(
    @repository(RotaRepository) protected rotaRepository: RotaRepository,
  ) { }

  @get('/rotas/{id}/cacaus', {
    responses: {
      '200': {
        description: 'Array of Rota has many Cacau',
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
    return this.rotaRepository.rotas_cacau(id).find(filter);
  }

  @post('/rotas/{id}/cacaus', {
    responses: {
      '200': {
        description: 'Rota model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cacau)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Rota.prototype.idRota,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cacau, {
            title: 'NewCacauInRota',
            exclude: ['idCacau'],
            optional: ['rotaId']
          }),
        },
      },
    }) cacau: Omit<Cacau, 'idCacau'>,
  ): Promise<Cacau> {
    return this.rotaRepository.rotas_cacau(id).create(cacau);
  }

  @patch('/rotas/{id}/cacaus', {
    responses: {
      '200': {
        description: 'Rota.Cacau PATCH success count',
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
    return this.rotaRepository.rotas_cacau(id).patch(cacau, where);
  }

  @del('/rotas/{id}/cacaus', {
    responses: {
      '200': {
        description: 'Rota.Cacau DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Cacau)) where?: Where<Cacau>,
  ): Promise<Count> {
    return this.rotaRepository.rotas_cacau(id).delete(where);
  }
}
