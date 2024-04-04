import {Entity, model, property, hasMany} from '@loopback/repository';
import {Cacau} from './cacau.model';

@model()
export class TipoCacau extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idTipo?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @hasMany(() => Cacau)
  tipocacaus_cacau: Cacau[];

  constructor(data?: Partial<TipoCacau>) {
    super(data);
  }
}

export interface TipoCacauRelations {
  // describe navigational properties here
}

export type TipoCacauWithRelations = TipoCacau & TipoCacauRelations;
