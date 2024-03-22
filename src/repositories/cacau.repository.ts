import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Cacau, CacauRelations} from '../models';


export class CacauRepository extends DefaultCrudRepository<
  Cacau,
  typeof Cacau.prototype.idCacau,
  CacauRelations
> {

  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource, @repository.getter('CacauRepository') protected CacauRepositoryGetter: Getter<CacauRepository>,
  ) {
    super(Cacau, dataSource);
  }
}
