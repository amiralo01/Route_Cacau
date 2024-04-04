import {Entity, model, property, hasMany} from '@loopback/repository';
import {LocalidadeIntermediaria} from './localidade-intermediaria.model';
import {Cacau} from './cacau.model';

@model()
export class Rota extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idRota?: number;

  @property({
    type: 'number',
  })
  fornecedorId?: number;

  @property({
    type: 'number',
  })
  localidadeOrigem?: number;

  @property({
    type: 'number',
  })
  localidadeFinal?: number;

  @hasMany(() => LocalidadeIntermediaria, {keyTo: 'rota_locInter'})
  rotas_locInter: LocalidadeIntermediaria[];

  @hasMany(() => Cacau)
  rotas_cacau: Cacau[];

  constructor(data?: Partial<Rota>) {
    super(data);
  }
}

export interface RotaRelations {
  // describe navigational properties here
}

export type RotaWithRelations = Rota & RotaRelations;
