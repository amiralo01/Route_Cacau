import {Entity, model, property} from '@loopback/repository';

@model()
export class Rota extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idRota?: number

  @property({
    type: 'number',
  })
  cacauId?: number;

  @property({
    type: 'number',
  })
  fornecedorId?: number;

  constructor(data?: Partial<Rota>) {
    super(data);
  }
}

export interface RotaRelations {
  // describe navigational properties here
}

export type RotaWithRelations = Rota & RotaRelations;
