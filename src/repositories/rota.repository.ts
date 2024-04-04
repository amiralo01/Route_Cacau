import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Rota, RotaRelations, LocalidadeIntermediaria, Cacau} from '../models';
import {LocalidadeIntermediariaRepository} from './localidade-intermediaria.repository';
import {CacauRepository} from './cacau.repository';

export class RotaRepository extends DefaultCrudRepository<
  Rota,
  typeof Rota.prototype.idRota,
  RotaRelations
> {

  public readonly rotas_locInter: HasManyRepositoryFactory<LocalidadeIntermediaria, typeof Rota.prototype.idRota>;

  public readonly rotas_cacau: HasManyRepositoryFactory<Cacau, typeof Rota.prototype.idRota>;

  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource, @repository.getter('LocalidadeIntermediariaRepository') protected localidadeIntermediariaRepositoryGetter: Getter<LocalidadeIntermediariaRepository>, @repository.getter('CacauRepository') protected cacauRepositoryGetter: Getter<CacauRepository>,
  ) {
    super(Rota, dataSource);
    this.rotas_cacau = this.createHasManyRepositoryFactoryFor('rotas_cacau', cacauRepositoryGetter,);
    this.registerInclusionResolver('rotas_cacau', this.rotas_cacau.inclusionResolver);
    this.rotas_locInter = this.createHasManyRepositoryFactoryFor('rotas_locInter', localidadeIntermediariaRepositoryGetter,);
    this.registerInclusionResolver('rotas_locInter', this.rotas_locInter.inclusionResolver);
  }
}
