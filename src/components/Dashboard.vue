<template>
  <div class="flex flex-col items-center">
    <Message :message="msg" v-show="msg" />
    <table class="w-full max-w-7xl border">
      <thead class="w-full">
        <tr class="text-xl">
          <th>#</th>
          <th>Cliente:</th>
          <th>Pão:</th>
          <th>Carne:</th>
          <th>Opcionais:</th>
          <th>Ações:</th>
        </tr>
      </thead>
      <tbody class="w-full border-t">
        <tr v-for="burger in burgers" :key="burger.id" class="border-b border-zinc-300">
          <td>{{ burger.id }}</td>
          <td>{{ burger.nome }}</td>
          <td>{{ burger.pao }}</td>
          <td>{{ burger.carne }}</td>
          <td>
            <ul>
              <li v-for="(opcional, index) in burger.opcionais" v-bind:key="index">
                {{ opcional }}
              </li>
            </ul>
          </td>
          <td>
            <div class="flex gap-4">
              <select @change="updateStatus($event, burger.id)" name="status" class="status">
                <option value="">Selecione</option>
                <option
                  v-for="st in status"
                  :key="st.id"
                  :value="st.tipo"
                  :selected="burger.status == st.tipo"
                >
                  {{ st.tipo }}
                </option>
              </select>
              <button
                @click="cancelOrder(burger.id)"
                class="bg-orange-400 text-zinc-900 shadow-amber-500 transition-all hover:shadow"
              >
                Cancelar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { api } from '@/lib/api'
import { onMounted, ref } from 'vue'
import Message from './Message.vue'

defineOptions({ name: 'DashboardComponent' })

interface BurgerProps {
  id: string
  nome: string
  status: string
  pao: string
  carne: string
  opcionais: string[]
}

interface StatusProps {
  id: string
  tipo: string
}
const timeToHideMessage = 3000

const burgers = ref<BurgerProps[]>([])
const status = ref<StatusProps[]>([])
const msg = ref('')

const getPedidos = async () => {
  const req = await api.get('/burgers')

  burgers.value = req.data
}

const getStatus = async () => {
  const req = await api.get('/status')

  status.value = req.data
}

const cancelOrder = async (id: string) => {
  await api.delete(`/burgers/${id}`)

  msg.value = 'Pedido removido com sucesso'
  clearMessage()
  getPedidos()
}

const updateStatus = async (event: Event, id: string) => {
  if (!event.target) return
  const element = event.target as HTMLInputElement

  const option = element.value
  console.log(option)
  console.log

  await api.patch(`/burgers/${id}`, {
    status: option,
  })

  msg.value = 'Pedido atualizado!'
  clearMessage()
}

const clearMessage = () => {
  setTimeout(() => {
    msg.value = ''
  }, timeToHideMessage)
}

onMounted(() => {
  getPedidos()
  getStatus()
})
</script>
