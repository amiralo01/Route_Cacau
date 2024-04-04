import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {TipoCacau, TipoCacauRelations, Cacau} from '../models';
import {CacauRepository} from './cacau.repository';

export class TipoCacauRepository extends DefaultCrudRepository<
  TipoCacau,
  typeof TipoCacau.prototype.idTipo,
  TipoCacauRelations
> {

  public readonly tipocacaus_cacau: HasManyRepositoryFactory<Cacau, typeof TipoCacau.prototype.idTipo>;

  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource, @repository.getter('CacauRepository') protected cacauRepositoryGetter: Getter<CacauRepository>,
  ) {
    super(TipoCacau, dataSource);
    this.tipocacaus_cacau = this.createHasManyRepositoryFactoryFor('tipocacaus_cacau', cacauRepositoryGetter,);
    this.registerInclusionResolver('tipocacaus_cacau', this.tipocacaus_cacau.inclusionResolver);
  }
}
