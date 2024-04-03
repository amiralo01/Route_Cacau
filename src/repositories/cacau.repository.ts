import {DefaultCrudRepository} from '@loopback/repository';
import {Cacau, CacauRelations} from '../models';


export class CacauRepository extends DefaultCrudRepository<
  Cacau,
  typeof Cacau.prototype.idCacau,
  CacauRelations
> {

  
}
