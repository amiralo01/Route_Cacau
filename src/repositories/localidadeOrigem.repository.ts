import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {LocalidadeOrigem, LocalidadeOrigemRelations, Cacau} from '../models';
import {CacauRepository} from './cacau.repository';

export class LocalidadeOrigemRepository extends DefaultCrudRepository<
  LocalidadeOrigem,
  typeof LocalidadeOrigem.prototype.idLocalidade,
  LocalidadeOrigemRelations
> {

  public readonly Loc_Cacau: HasManyRepositoryFactory<Cacau, typeof LocalidadeOrigem.prototype.idLocalidade>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('CacauRepository') protected cacauRepositoryGetter: Getter<CacauRepository>,
  ) {
    super(LocalidadeOrigem, dataSource);
    this.Loc_Cacau = this.createHasManyRepositoryFactoryFor('Loc_Cacau', cacauRepositoryGetter,);
    this.registerInclusionResolver('Loc_Cacau', this.Loc_Cacau.inclusionResolver);
  }
}
