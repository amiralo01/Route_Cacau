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
import {Localidade} from '../models';
import {LocalidadeRepository} from '../repositories';

export class LocalidadeController {
  constructor(
    @repository(LocalidadeRepository)
    public localidadeRepository : LocalidadeRepository,
  ) {}

  @post('/localidades')
  @response(200, {
    description: 'Localidade model instance',
    content: {'application/json': {schema: getModelSchemaRef(Localidade)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Localidade, {
            title: 'NewLocalidade',
            exclude: ['idLocalidade'],
          }),
        },
      },
    })
    localidade: Omit<Localidade, 'idLocalidade'>,
  ): Promise<Localidade> {
    return this.localidadeRepository.create(localidade);
  }

  @get('/localidades/count')
  @response(200, {
    description: 'Localidade model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Localidade) where?: Where<Localidade>,
  ): Promise<Count> {
    return this.localidadeRepository.count(where);
  }

  @get('/localidades')
  @response(200, {
    description: 'Array of Localidade model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Localidade, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Localidade) filter?: Filter<Localidade>,
  ): Promise<Localidade[]> {
    return this.localidadeRepository.find(filter);
  }

  @patch('/localidades')
  @response(200, {
    description: 'Localidade PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Localidade, {partial: true}),
        },
      },
    })
    localidade: Localidade,
    @param.where(Localidade) where?: Where<Localidade>,
  ): Promise<Count> {
    return this.localidadeRepository.updateAll(localidade, where);
  }

  @get('/localidades/{id}')
  @response(200, {
    description: 'Localidade model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Localidade, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Localidade, {exclude: 'where'}) filter?: FilterExcludingWhere<Localidade>
  ): Promise<Localidade> {
    return this.localidadeRepository.findById(id, filter);
  }

  @patch('/localidades/{id}')
  @response(204, {
    description: 'Localidade PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Localidade, {partial: true}),
        },
      },
    })
    localidade: Localidade,
  ): Promise<void> {
    await this.localidadeRepository.updateById(id, localidade);
  }

  @put('/localidades/{id}')
  @response(204, {
    description: 'Localidade PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() localidade: Localidade,
  ): Promise<void> {
    await this.localidadeRepository.replaceById(id, localidade);
  }

  @del('/localidades/{id}')
  @response(204, {
    description: 'Localidade DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.localidadeRepository.deleteById(id);
  }
}
