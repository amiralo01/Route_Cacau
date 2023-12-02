import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {TipoCacau} from '../models';
import {TipoCacauRepository} from '../repositories';

export class TipoCacauController {
  constructor(
    @repository(TipoCacauRepository)
    public tipoCacauRepository : TipoCacauRepository,
  ) {}

  @post('/tipo-cacaus')
  @response(200, {
    description: 'TipoCacau model instance',
    content: {'application/json': {schema: getModelSchemaRef(TipoCacau)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoCacau, {
            title: 'NewTipoCacau',
            exclude: ['idTipo'],
          }),
        },
      },
    })
    tipoCacau: Omit<TipoCacau, 'idTipo'>,
  ): Promise<TipoCacau> {
    return this.tipoCacauRepository.create(tipoCacau);
  }

  @get('/tipo-cacaus/count')
  @response(200, {
    description: 'TipoCacau model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TipoCacau) where?: Where<TipoCacau>,
  ): Promise<Count> {
    return this.tipoCacauRepository.count(where);
  }

  @get('/tipo-cacaus')
  @response(200, {
    description: 'Array of TipoCacau model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TipoCacau, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TipoCacau) filter?: Filter<TipoCacau>,
  ): Promise<TipoCacau[]> {
    return this.tipoCacauRepository.find(filter);
  }

  @patch('/tipo-cacaus')
  @response(200, {
    description: 'TipoCacau PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoCacau, {partial: true}),
        },
      },
    })
    tipoCacau: TipoCacau,
    @param.where(TipoCacau) where?: Where<TipoCacau>,
  ): Promise<Count> {
    return this.tipoCacauRepository.updateAll(tipoCacau, where);
  }

  @get('/tipo-cacaus/{id}')
  @response(200, {
    description: 'TipoCacau model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TipoCacau, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TipoCacau, {exclude: 'where'}) filter?: FilterExcludingWhere<TipoCacau>
  ): Promise<TipoCacau> {
    return this.tipoCacauRepository.findById(id, filter);
  }

  @patch('/tipo-cacaus/{id}')
  @response(204, {
    description: 'TipoCacau PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoCacau, {partial: true}),
        },
      },
    })
    tipoCacau: TipoCacau,
  ): Promise<void> {
    await this.tipoCacauRepository.updateById(id, tipoCacau);
  }

  @put('/tipo-cacaus/{id}')
  @response(204, {
    description: 'TipoCacau PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tipoCacau: TipoCacau,
  ): Promise<void> {
    await this.tipoCacauRepository.replaceById(id, tipoCacau);
  }

  @del('/tipo-cacaus/{id}')
  @response(204, {
    description: 'TipoCacau DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tipoCacauRepository.deleteById(id);
  }
}
