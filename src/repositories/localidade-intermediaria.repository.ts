import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDataSource} from '../datasources';
import {LocalidadeIntermediaria, LocalidadeIntermediariaRelations} from '../models';

export class LocalidadeIntermediariaRepository extends DefaultCrudRepository<
  LocalidadeIntermediaria,
  typeof LocalidadeIntermediaria.prototype.idLocalidadeInter,
  LocalidadeIntermediariaRelations
> {
  constructor(
    @inject('datasources.Postgres') dataSource: PostgresDataSource,
  ) {
    super(LocalidadeIntermediaria, dataSource);
  }
}
