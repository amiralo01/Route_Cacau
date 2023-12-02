import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Cacau, CacauRelations, Fornecedor, Rota} from '../models';
import {RotaRepository} from './rota.repository';
import {FornecedorRepository} from './fornecedor.repository';

export class CacauRepository extends DefaultCrudRepository<
  Cacau,
  typeof Cacau.prototype.idCacau,
  CacauRelations
> {

  public readonly fornecedors: HasManyThroughRepositoryFactory<Fornecedor, typeof Fornecedor.prototype.idFornecedor,
          Rota,
          typeof Cacau.prototype.idCacau
        >;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('RotaRepository') protected rotaRepositoryGetter: Getter<RotaRepository>, @repository.getter('FornecedorRepository') protected fornecedorRepositoryGetter: Getter<FornecedorRepository>,
  ) {
    super(Cacau, dataSource);
    this.fornecedors = this.createHasManyThroughRepositoryFactoryFor('fornecedors', fornecedorRepositoryGetter, rotaRepositoryGetter,);
    this.registerInclusionResolver('fornecedors', this.fornecedors.inclusionResolver);

  }
}
