import {Entity, model, property, hasMany} from '@loopback/repository';
import {Cacau} from './cacau.model';

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
  nomeLocal: string;

  @property({
    type: 'string',
    required: true,
  })
  cidade: string;

  @property({
    type: 'number',
  })
  fornecedorId?: number;

  @hasMany(() => Cacau)
  Loc_Cacau: Cacau[];

  constructor(data?: Partial<Localidade>) {
    super(data);
  }
}

export interface LocalidadeRelations {
  // describe navigational properties here
}

export type LocalidadeWithRelations = Localidade & LocalidadeRelations;
