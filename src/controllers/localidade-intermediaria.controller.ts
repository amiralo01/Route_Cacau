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
import {LocalidadeIntermediaria} from '../models';
import {LocalidadeIntermediariaRepository} from '../repositories';

export class LocalidadeIntermediariaController {
  constructor(
    @repository(LocalidadeIntermediariaRepository)
    public localidadeIntermediariaRepository : LocalidadeIntermediariaRepository,
  ) {}

  @post('/localidade-intermediarias')
  @response(200, {
    description: 'LocalidadeIntermediaria model instance',
    content: {'application/json': {schema: getModelSchemaRef(LocalidadeIntermediaria)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LocalidadeIntermediaria, {
            title: 'NewLocalidadeIntermediaria',
            exclude: ['idLocalidadeInter'],
          }),
        },
      },
    })
    localidadeIntermediaria: Omit<LocalidadeIntermediaria, 'idLocalidadeInter'>,
  ): Promise<LocalidadeIntermediaria> {
    return this.localidadeIntermediariaRepository.create(localidadeIntermediaria);
  }

  @get('/localidade-intermediarias/count')
  @response(200, {
    description: 'LocalidadeIntermediaria model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(LocalidadeIntermediaria) where?: Where<LocalidadeIntermediaria>,
  ): Promise<Count> {
    return this.localidadeIntermediariaRepository.count(where);
  }

  @get('/localidade-intermediarias')
  @response(200, {
    description: 'Array of LocalidadeIntermediaria model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(LocalidadeIntermediaria, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(LocalidadeIntermediaria) filter?: Filter<LocalidadeIntermediaria>,
  ): Promise<LocalidadeIntermediaria[]> {
    return this.localidadeIntermediariaRepository.find(filter);
  }

  @patch('/localidade-intermediarias')
  @response(200, {
    description: 'LocalidadeIntermediaria PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LocalidadeIntermediaria, {partial: true}),
        },
      },
    })
    localidadeIntermediaria: LocalidadeIntermediaria,
    @param.where(LocalidadeIntermediaria) where?: Where<LocalidadeIntermediaria>,
  ): Promise<Count> {
    return this.localidadeIntermediariaRepository.updateAll(localidadeIntermediaria, where);
  }

  @get('/localidade-intermediarias/{id}')
  @response(200, {
    description: 'LocalidadeIntermediaria model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(LocalidadeIntermediaria, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(LocalidadeIntermediaria, {exclude: 'where'}) filter?: FilterExcludingWhere<LocalidadeIntermediaria>
  ): Promise<LocalidadeIntermediaria> {
    return this.localidadeIntermediariaRepository.findById(id, filter);
  }

  @patch('/localidade-intermediarias/{id}')
  @response(204, {
    description: 'LocalidadeIntermediaria PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LocalidadeIntermediaria, {partial: true}),
        },
      },
    })
    localidadeIntermediaria: LocalidadeIntermediaria,
  ): Promise<void> {
    await this.localidadeIntermediariaRepository.updateById(id, localidadeIntermediaria);
  }

  @put('/localidade-intermediarias/{id}')
  @response(204, {
    description: 'LocalidadeIntermediaria PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() localidadeIntermediaria: LocalidadeIntermediaria,
  ): Promise<void> {
    await this.localidadeIntermediariaRepository.replaceById(id, localidadeIntermediaria);
  }

  @del('/localidade-intermediarias/{id}')
  @response(204, {
    description: 'LocalidadeIntermediaria DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.localidadeIntermediariaRepository.deleteById(id);
  }
}
