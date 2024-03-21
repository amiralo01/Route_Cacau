import {Entity, hasMany, model, property} from '@loopback/repository';
import {LocalidadeOrigem} from './localidadeOrigem.model';

@model()
export class Fornecedor extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idFornecedor?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  senha: string;

  @property({
    type: 'string',
    required: true,
  })
  img: String;

  @hasMany(() => LocalidadeOrigem)
  Loc_Fornecedor: LocalidadeOrigem[];

  constructor(data?: Partial<Fornecedor>) {
    super(data);
  }
}

export interface FornecedorRelations {
  // describe navigational properties here
}

export type FornecedorWithRelations = Fornecedor & FornecedorRelations;
