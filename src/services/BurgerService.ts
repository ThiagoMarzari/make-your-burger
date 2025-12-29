import type {
  Bread,
  Burger,
  BurgerOptional,
  Meat,
  BurgerStatus,
  CreateBurger,
} from '@/interfaces/burguer'
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

export async function findPedidos(): Promise<Burger[]> {
  const res = await api('/burgers')
  return res.data
}

export async function findBurgerStatus(): Promise<BurgerStatus[]> {
  const res = await api.get('/status')
  return res.data
}

export async function createBurguer(data: CreateBurger): Promise<{ id: string }> {
  const res = await api.post('/burgers', data)
  return res.data.id
}

export async function deleteBurger(id: string): Promise<{ id: string }> {
  const res = await api.delete(`/burgers/${id}`)
  return res.data
}

export async function updateBurgerStatus(id: string, option: string): Promise<{ id: string }> {
  const res = await api.patch(`/burgers/${id}`, {
    status: option,
  })
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
