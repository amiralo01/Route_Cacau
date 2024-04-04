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
  Rota,
} from '../models';
import {LocalidadeRepository} from '../repositories';

export class LocalidadeOrigemRotaController {
  constructor(
    @repository(LocalidadeRepository) protected localidadeRepository: LocalidadeRepository,
  ) { }

  @get('/localidades/{id}/rotas', {
    responses: {
      '200': {
        description: 'Array of Localidade has many Rota',
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
    return this.localidadeRepository.localidadeOrigem(id).find(filter);
  }

  @post('/localidades/{id}/rotas', {
    responses: {
      '200': {
        description: 'Localidade model instance',
        content: {'application/json': {schema: getModelSchemaRef(Rota)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Localidade.prototype.idLocalidade,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rota, {
            title: 'NewRotaInLocalidade',
            exclude: ['idRota'],
            optional: ['localidadeOrigem']
          }),
        },
      },
    }) rota: Omit<Rota, 'idRota'>,
  ): Promise<Rota> {
    return this.localidadeRepository.localidadeOrigem(id).create(rota);
  }

  @patch('/localidades/{id}/rotas', {
    responses: {
      '200': {
        description: 'Localidade.Rota PATCH success count',
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
    return this.localidadeRepository.localidadeOrigem(id).patch(rota, where);
  }

  @del('/localidades/{id}/rotas', {
    responses: {
      '200': {
        description: 'Localidade.Rota DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Rota)) where?: Where<Rota>,
  ): Promise<Count> {
    return this.localidadeRepository.localidadeOrigem(id).delete(where);
  }
}
