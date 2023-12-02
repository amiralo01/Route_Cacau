import {Entity, model, property, hasMany} from '@loopback/repository';
import {Cacau} from './cacau.model';

@model({settings: {strict: false}})
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
  descricao: string;

  @hasMany(() => Cacau)
  tipo_cacau: Cacau[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TipoCacau>) {
    super(data);
  }
}

export interface TipoCacauRelations {
  // describe navigational properties here
}

export type TipoCacauWithRelations = TipoCacau & TipoCacauRelations;
