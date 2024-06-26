import {Entity, model, property} from '@loopback/repository';

@model()
export class Cacau extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idCacau?: number;

  @property({
    type: 'date',
    required: true,
  })
  dataFab: Date;

  @property({
    type: 'number',
  })
  tipoCacauId?: number;

  @property({
    type: 'number',
  })
  rotaId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // [prop: string]: any;

  constructor(data?: Partial<Cacau>) {
    super(data);
  }
}

export interface CacauRelations {
  // describe navigational properties here
}

export type CacauWithRelations = Cacau & CacauRelations;
