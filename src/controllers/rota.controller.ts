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
import {Rota} from '../models';
import {RotaRepository} from '../repositories';

export class RotaController {
  constructor(
    @repository(RotaRepository)
    public rotaRepository : RotaRepository,
  ) {}

  @post('/rotas')
  @response(200, {
    description: 'Rota model instance',
    content: {'application/json': {schema: getModelSchemaRef(Rota)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rota, {
            title: 'NewRota',
            exclude: ['idRota'],
          }),
        },
      },
    })
    rota: Omit<Rota, 'id'>,
  ): Promise<Rota> {
    return this.rotaRepository.create(rota);
  }

  @get('/rotas/count')
  @response(200, {
    description: 'Rota model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Rota) where?: Where<Rota>,
  ): Promise<Count> {
    return this.rotaRepository.count(where);
  }

  @get('/rotas')
  @response(200, {
    description: 'Array of Rota model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Rota, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Rota) filter?: Filter<Rota>,
  ): Promise<Rota[]> {
    return this.rotaRepository.find(filter);
  }

  @patch('/rotas')
  @response(200, {
    description: 'Rota PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rota, {partial: true}),
        },
      },
    })
    rota: Rota,
    @param.where(Rota) where?: Where<Rota>,
  ): Promise<Count> {
    return this.rotaRepository.updateAll(rota, where);
  }

  @get('/rotas/{id}')
  @response(200, {
    description: 'Rota model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Rota, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Rota, {exclude: 'where'}) filter?: FilterExcludingWhere<Rota>
  ): Promise<Rota> {
    return this.rotaRepository.findById(id, filter);
  }

  @patch('/rotas/{id}')
  @response(204, {
    description: 'Rota PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rota, {partial: true}),
        },
      },
    })
    rota: Rota,
  ): Promise<void> {
    await this.rotaRepository.updateById(id, rota);
  }

  @put('/rotas/{id}')
  @response(204, {
    description: 'Rota PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() rota: Rota,
  ): Promise<void> {
    await this.rotaRepository.replaceById(id, rota);
  }

  @del('/rotas/{id}')
  @response(204, {
    description: 'Rota DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.rotaRepository.deleteById(id);
  }
}
