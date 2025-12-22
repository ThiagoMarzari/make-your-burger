<template>
  <div>
    <Message :message="msg" v-show="msg" />
    <div class="flex w-full items-center justify-center px-4">
      <form class="flex w-full max-w-lg flex-col gap-6" @submit="createBurger">
        <div class="flex flex-col gap-1">
          <InputLabel text="Nome" />
          <input type="text" name="name" v-model="nome" placeholder="Digite seu nome" />
        </div>
        <div class="flex flex-col gap-1">
          <InputLabel text="Escolha o pão" />
          <select class="w-full" name="pao" id="pao" v-model="pao">
            <option value="">Selecione o seu pão</option>
            <option v-for="pao in paes" :key="pao.id" :v-model="pao">{{ pao.tipo }}</option>
          </select>
        </div>
        <div class="flex flex-col gap-1">
          <InputLabel text="Escolha a carne" />
          <select class="w-full" name="carne" id="carne" v-model="carne">
            <option value="">Selecione o tipo de carne</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
              {{ carne.tipo }}
            </option>
          </select>
        </div>
        <div class="flex w-full flex-col justify-center gap-1">
          <InputLabel text="Escolha os opcionais" />
          <div class="grid sm:grid-cols-2">
            <div
              v-for="op in opcionaisData"
              :key="op.id"
              class="grid w-full grid-cols-2 items-center gap-4"
            >
              <span class="font-bold">{{ op.tipo }}</span>
              <input type="checkbox" name="opcionais" v-model="opcionais" :value="op.tipo" />
            </div>
          </div>
        </div>
        <div>
          <button
            class="w-full text-green-500 shadow shadow-green-400 transition-all hover:scale-105"
            type="submit"
          >
            Criar meu burger
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import InputLabel from './InputLabel.vue'
import { api } from '@/lib/api'
import Message from './Message.vue'

interface IngredienteProps {
  id: number
  tipo: string
}

defineOptions({
  name: 'BurgerFormComponent',
})

const timeToHideMessage = 3000

const paes = ref<IngredienteProps[]>()
const carnes = ref<IngredienteProps[]>()
const opcionaisData = ref<IngredienteProps[]>()
const nome = ref('')
const pao = ref()
const carne = ref()
const opcionais = ref([])
const status = ref('Solicitado')
const msg = ref('')

const getIngredientes = async () => {
  const req = await api.get('/ingredientes')
  paes.value = req.data.paes
  carnes.value = req.data.carnes
  opcionaisData.value = req.data.opcionais
}

const createBurger = async (e: SubmitEvent) => {
  e.preventDefault()

  const data = {
    nome: nome.value,
    carne: carne.value,
    pao: pao.value,
    opcionais: Array.from(opcionais.value),
    status: status.value,
    msg: msg.value,
  }

  const res = await api.post('/burgers', data)

  msg.value = `Pedido Nº ${res.data.id} realizado com sucesso!`

  console.log(res.data)

  clearInputs()
  clearMessage()
}

const clearInputs = () => {
  nome.value = ''
  carne.value = ''
  pao.value = ''
  opcionais.value = []
}

const clearMessage = () => {
  setTimeout(() => {
    msg.value = ''
  }, timeToHideMessage)
}

onMounted(() => {
  getIngredientes()
})
</script>
