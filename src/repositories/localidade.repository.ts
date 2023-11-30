import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Localidade, LocalidadeRelations, Cacau} from '../models';
import {CacauRepository} from './cacau.repository';

export class LocalidadeRepository extends DefaultCrudRepository<
  Localidade,
  typeof Localidade.prototype.idLocalidade,
  LocalidadeRelations
> {

  public readonly Loc_Cacau: HasManyRepositoryFactory<Cacau, typeof Localidade.prototype.idLocalidade>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('CacauRepository') protected cacauRepositoryGetter: Getter<CacauRepository>,
  ) {
    super(Localidade, dataSource);
    this.Loc_Cacau = this.createHasManyRepositoryFactoryFor('Loc_Cacau', cacauRepositoryGetter,);
    this.registerInclusionResolver('Loc_Cacau', this.Loc_Cacau.inclusionResolver);
  }
}
