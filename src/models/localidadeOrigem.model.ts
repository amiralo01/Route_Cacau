import {Entity, model, property, hasMany} from '@loopback/repository';
import {Cacau} from './cacau.model';
import { LocalidadeOrigemRepository } from '../repositories';

@model()
export class LocalidadeOrigem extends Entity {
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
  nomeLocalOrigem: string;

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

  constructor(data?: Partial<LocalidadeOrigem>) {
    super(data);
  }
}

export interface LocalidadeOrigemRelations {
  // describe navigational properties here
}

export type LocalidadeWithRelations = LocalidadeOrigemRepository & LocalidadeOrigemRelations;
