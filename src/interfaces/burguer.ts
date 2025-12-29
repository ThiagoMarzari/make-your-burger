//#region Burger

interface BurgerBase {
  nome: string
  status: string
  pao: string
  carne: string
  opcionais: string[]
}

export interface Burger extends BurgerBase {
  id: string
}

export type CreateBurger = BurgerBase

export interface BurgerStatus {
  id: number
  tipo: string
}

//#endregion

//#region Ingredient

interface Ingredient {
  id: number
  tipo: string
}

export type Bread = Ingredient
export type BurgerOptional = Ingredient

export interface Meat extends Ingredient {
  ponto?: string
}

//#endregion
