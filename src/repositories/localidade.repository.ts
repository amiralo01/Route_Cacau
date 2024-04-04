import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Localidade, LocalidadeRelations, Rota, LocalidadeIntermediaria} from '../models';
import {RotaRepository} from './rota.repository';
import {LocalidadeIntermediariaRepository} from './localidade-intermediaria.repository';

export class LocalidadeRepository extends DefaultCrudRepository<
  Localidade,
  typeof Localidade.prototype.idLocalidade,
  LocalidadeRelations
> {

  public readonly rotas: HasManyRepositoryFactory<Rota, typeof Localidade.prototype.idLocalidade>;

  public readonly localidadeFinal: HasManyRepositoryFactory<Rota, typeof Localidade.prototype.idLocalidade>;

  public readonly localidadeOrigem: HasManyRepositoryFactory<Rota, typeof Localidade.prototype.idLocalidade>;

  public readonly localidade_locInter: HasManyRepositoryFactory<LocalidadeIntermediaria, typeof Localidade.prototype.idLocalidade>;

  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource, @repository.getter('RotaRepository') protected rotaRepositoryGetter: Getter<RotaRepository>, @repository.getter('LocalidadeIntermediariaRepository') protected localidadeIntermediariaRepositoryGetter: Getter<LocalidadeIntermediariaRepository>,
  ) {
    super(Localidade, dataSource);
    this.localidade_locInter = this.createHasManyRepositoryFactoryFor('localidade_locInter', localidadeIntermediariaRepositoryGetter,);
    this.localidadeOrigem = this.createHasManyRepositoryFactoryFor('localidadeOrigem', rotaRepositoryGetter,);
    this.localidadeFinal = this.createHasManyRepositoryFactoryFor('localidadeFinal', rotaRepositoryGetter,);
    this.rotas = this.createHasManyRepositoryFactoryFor('rotas', rotaRepositoryGetter,);
  }
}
