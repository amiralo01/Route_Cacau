import {Entity, model, property, hasMany} from '@loopback/repository';
import {Rota} from './rota.model';
import {LocalidadeIntermediaria} from './localidade-intermediaria.model';

@model()
export class Localidade extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idLocalidade?: number;

  @property({
    type: 'string',
    required: true,
  })
  avenida: string;

  @property({
    type: 'string',
    required: false,
  })
  bairro: string;

  @property({
    type: 'string',
    required: true,
  })
  cidade: string;

  @hasMany(() => Rota, {keyTo: 'localidadeOrigem'})
  rotas: Rota[];

  @hasMany(() => Rota, {keyTo: 'localidadeFinal'})
  localidadeFinal: Rota[];

  @hasMany(() => Rota, {keyTo: 'localidadeOrigem'})
  localidadeOrigem: Rota[];

  @hasMany(() => LocalidadeIntermediaria, {keyTo: 'localidadeInter'})
  localidade_locInter: LocalidadeIntermediaria[];

  constructor(data?: Partial<Localidade>) {
    super(data);
  }
}

export interface LocalidadeRelations {
  // describe navigational properties here
}

export type LocalidadeWithRelations = Localidade & LocalidadeRelations;
