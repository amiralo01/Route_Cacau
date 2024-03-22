import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {Fornecedor, FornecedorRelations, Rota} from '../models';
import {RotaRepository} from './rota.repository';

export class FornecedorRepository extends DefaultCrudRepository<
  Fornecedor,
  typeof Fornecedor.prototype.idFornecedor,
  FornecedorRelations
> {

  public readonly rotas: HasManyRepositoryFactory<Rota, typeof Fornecedor.prototype.idFornecedor>;

  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource, @repository.getter('FornecedorRepository') protected FornecedorRepositoryGetter: Getter<FornecedorRepository>, @repository.getter('RotaRepository') protected rotaRepositoryGetter: Getter<RotaRepository>,
  ) {
    super(Fornecedor, dataSource);
    this.rotas = this.createHasManyRepositoryFactoryFor('rotas', rotaRepositoryGetter,);
    this.registerInclusionResolver('rotas', this.rotas.inclusionResolver);
  }
}
