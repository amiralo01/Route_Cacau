import {Entity, model, property, hasMany} from '@loopback/repository';
import {Fornecedor} from './fornecedor.model';
import {Rota} from './rota.model';

@model({settings: {strict: false}})
export class Cacau extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idCacau?: number;

  @property({
    type: 'Date',
    required: true,
  })
  dataFab: Date;

  @hasMany(() => Fornecedor, {through: {model: () => Rota}})
  fornecedors: Fornecedor[];

  @property({
    type: 'number',
  })
  localidadeId?: number;

  @property({
    type: 'number',
  })
  tipoCacauId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cacau>) {
    super(data);
  }
}

export interface CacauRelations {
  // describe navigational properties here
}

export type CacauWithRelations = Cacau & CacauRelations;
