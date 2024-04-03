import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Fornecedor, FornecedorRelations, LocalidadeOrigem} from '../models';
import {LocalidadeOrigemRepository} from './localidadeOrigem.repository';

export class FornecedorRepository extends DefaultCrudRepository<
  Fornecedor,
  typeof Fornecedor.prototype.idFornecedor,
  FornecedorRelations
> {

  public readonly Loc_Fornecedor: HasManyRepositoryFactory<LocalidadeOrigem, typeof Fornecedor.prototype.idFornecedor>;

  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource, @repository.getter('LocalidadeRepository') protected localidadeRepositoryGetter: Getter<LocalidadeOrigemRepository>,
  ) {
    super(Fornecedor, dataSource);
    this.Loc_Fornecedor = this.createHasManyRepositoryFactoryFor('Loc_Fornecedor', localidadeRepositoryGetter,);
    this.registerInclusionResolver('Loc_Fornecedor', this.Loc_Fornecedor.inclusionResolver);
  }
}
