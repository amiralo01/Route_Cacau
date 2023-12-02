import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TipoCacau, TipoCacauRelations, Cacau} from '../models';
import {CacauRepository} from './cacau.repository';

export class TipoCacauRepository extends DefaultCrudRepository<
  TipoCacau,
  typeof TipoCacau.prototype.idTipo,
  TipoCacauRelations
> {

  public readonly tipo_cacau: HasManyRepositoryFactory<Cacau, typeof TipoCacau.prototype.idTipo>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('CacauRepository') protected cacauRepositoryGetter: Getter<CacauRepository>,
  ) {
    super(TipoCacau, dataSource);
    this.tipo_cacau = this.createHasManyRepositoryFactoryFor('tipo_cacau', cacauRepositoryGetter,);
    this.registerInclusionResolver('tipo_cacau', this.tipo_cacau.inclusionResolver);
  }
}
