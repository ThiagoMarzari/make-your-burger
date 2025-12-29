interface Ingrediente {
  id: number
  tipo: string
}

export type Bread = Ingrediente
export type BurgerOptional = Ingrediente
export interface Meat extends Ingrediente {
  ponto?: string
}
