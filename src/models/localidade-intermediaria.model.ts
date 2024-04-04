import {Entity, model, property} from '@loopback/repository';

@model()
export class LocalidadeIntermediaria extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idLocalidadeInter?: number;

  @property({
    type: 'number',
  })
  localidadeInter?: number;

  @property({
    type: 'number',
  })
  rota_locInter?: number;

  constructor(data?: Partial<LocalidadeIntermediaria>) {
    super(data);
  }
}

export interface LocalidadeIntermediariaRelations {
  // describe navigational properties here
}

export type LocalidadeIntermediariaWithRelations = LocalidadeIntermediaria & LocalidadeIntermediariaRelations;
