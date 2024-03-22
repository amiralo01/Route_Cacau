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
  TipoCacau,
  Cacau,
} from '../models';
import {TipoCacauRepository} from '../repositories';

export class TipoCacauCacauController {
  constructor(
    @repository(TipoCacauRepository) protected tipoCacauRepository: TipoCacauRepository,
  ) { }

  @get('/tipo-cacaus/{id}/cacaus', {
    responses: {
      '200': {
        description: 'Array of TipoCacau has many Cacau',
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
    return this.tipoCacauRepository.tipocacaus_cacau(id).find(filter);
  }

  @post('/tipo-cacaus/{id}/cacaus', {
    responses: {
      '200': {
        description: 'TipoCacau model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cacau)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof TipoCacau.prototype.idTipo,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cacau, {
            title: 'NewCacauInTipoCacau',
            exclude: ['idCacau'],
            optional: ['tipoCacauId']
          }),
        },
      },
    }) cacau: Omit<Cacau, 'idCacau'>,
  ): Promise<Cacau> {
    return this.tipoCacauRepository.tipocacaus_cacau(id).create(cacau);
  }

  @patch('/tipo-cacaus/{id}/cacaus', {
    responses: {
      '200': {
        description: 'TipoCacau.Cacau PATCH success count',
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
    return this.tipoCacauRepository.tipocacaus_cacau(id).patch(cacau, where);
  }

  @del('/tipo-cacaus/{id}/cacaus', {
    responses: {
      '200': {
        description: 'TipoCacau.Cacau DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Cacau)) where?: Where<Cacau>,
  ): Promise<Count> {
    return this.tipoCacauRepository.tipocacaus_cacau(id).delete(where);
  }
}
