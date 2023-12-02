import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Cacau} from '../models';
import {CacauRepository} from '../repositories';

export class CacauController {
  constructor(
    @repository(CacauRepository)
    public cacauRepository : CacauRepository,
  ) {}

  @post('/cacaus')
  @response(200, {
    description: 'Cacau model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cacau)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cacau, {
            title: 'NewCacau',
            exclude: ['idCacau'],
          }),
        },
      },
    })
    cacau: Omit<Cacau, 'idCacau'>,
  ): Promise<Cacau> {
    return this.cacauRepository.create(cacau);
  }

  @get('/cacaus/count')
  @response(200, {
    description: 'Cacau model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cacau) where?: Where<Cacau>,
  ): Promise<Count> {
    return this.cacauRepository.count(where);
  }

  @get('/cacaus')
  @response(200, {
    description: 'Array of Cacau model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cacau, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cacau) filter?: Filter<Cacau>,
  ): Promise<Cacau[]> {
    return this.cacauRepository.find(filter);
  }

  @patch('/cacaus')
  @response(200, {
    description: 'Cacau PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cacau, {partial: true}),
        },
      },
    })
    cacau: Cacau,
    @param.where(Cacau) where?: Where<Cacau>,
  ): Promise<Count> {
    return this.cacauRepository.updateAll(cacau, where);
  }

  @get('/cacaus/{id}')
  @response(200, {
    description: 'Cacau model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cacau, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Cacau, {exclude: 'where'}) filter?: FilterExcludingWhere<Cacau>
  ): Promise<Cacau> {
    return this.cacauRepository.findById(id, filter);
  }

  @patch('/cacaus/{id}')
  @response(204, {
    description: 'Cacau PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cacau, {partial: true}),
        },
      },
    })
    cacau: Cacau,
  ): Promise<void> {
    await this.cacauRepository.updateById(id, cacau);
  }

  @put('/cacaus/{id}')
  @response(204, {
    description: 'Cacau PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cacau: Cacau,
  ): Promise<void> {
    await this.cacauRepository.replaceById(id, cacau);
  }

  @del('/cacaus/{id}')
  @response(204, {
    description: 'Cacau DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cacauRepository.deleteById(id);
  }
}
