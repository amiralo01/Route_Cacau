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
  LocalidadeIntermediaria,
} from '../models';
import {RotaRepository} from '../repositories';

export class RotaLocalidadeIntermediariaController {
  constructor(
    @repository(RotaRepository) protected rotaRepository: RotaRepository,
  ) { }

  @get('/rotas/{id}/localidade-intermediarias', {
    responses: {
      '200': {
        description: 'Array of Rota has many LocalidadeIntermediaria',
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
    return this.rotaRepository.rotas_locInter(id).find(filter);
  }

  @post('/rotas/{id}/localidade-intermediarias', {
    responses: {
      '200': {
        description: 'Rota model instance',
        content: {'application/json': {schema: getModelSchemaRef(LocalidadeIntermediaria)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Rota.prototype.idRota,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LocalidadeIntermediaria, {
            title: 'NewLocalidadeIntermediariaInRota',
            exclude: ['idLocalidadeInter'],
            optional: ['rota_locInter']
          }),
        },
      },
    }) localidadeIntermediaria: Omit<LocalidadeIntermediaria, 'idLocalidadeInter'>,
  ): Promise<LocalidadeIntermediaria> {
    return this.rotaRepository.rotas_locInter(id).create(localidadeIntermediaria);
  }

  @patch('/rotas/{id}/localidade-intermediarias', {
    responses: {
      '200': {
        description: 'Rota.LocalidadeIntermediaria PATCH success count',
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
    return this.rotaRepository.rotas_locInter(id).patch(localidadeIntermediaria, where);
  }

  @del('/rotas/{id}/localidade-intermediarias', {
    responses: {
      '200': {
        description: 'Rota.LocalidadeIntermediaria DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(LocalidadeIntermediaria)) where?: Where<LocalidadeIntermediaria>,
  ): Promise<Count> {
    return this.rotaRepository.rotas_locInter(id).delete(where);
  }
}
