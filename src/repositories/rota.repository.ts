import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Rota, RotaRelations} from '../models';

export class RotaRepository extends DefaultCrudRepository<
  Rota,
  typeof Rota.prototype.idRota,
  RotaRelations
> {
  constructor(
    @inject('datasources.Mysql') dataSource: MysqlDataSource,
  ) {
    super(Rota, dataSource);
  }
}
