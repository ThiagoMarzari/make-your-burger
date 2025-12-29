import type { Bread, BurgerOptional, Meat } from '@/interfaces/burguer'
import { api } from '@/lib/api'

interface Ingredients {
  paes: Bread[]
  carnes: Meat[]
  opcionais: BurgerOptional[]
}

export async function findIngredients(): Promise<Ingredients> {
  const res = await api('/ingredientes')
  return res.data
}

// interface Ingredients {
//   paes: Bread[]
//   carnesLista: Meat[]
//   opcionais: BurgerOptional[]
// }

// interface IngredientAdapter {
//   paes: Bread[]
//   carnes: Meat[]
//   opcionais: BurgerOptional[]
// }

// export async function findIngredients(): Promise<IngredientAdapter> {
//   const res = await api('/ingredientes')
//   const data: Ingredients = res.data

//   const newData = {
//     ...data,
//     carnes: data.carnesLista
//   }

//   return newData
// }
