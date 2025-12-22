<template>
  <div class="w-full">
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
        <tr class="border-b border-zinc-300">
          <th>1</th>
          <th>Joao</th>
          <th>Pao de trigo</th>
          <th>Maminha</th>
          <th>
            <ul>
              <li>Salame</li>
              <li>Tomate</li>
            </ul>
          </th>
          <th>
            <div class="flex gap-4">
              <select name="status" class="status">
                <option value="">Selecione</option>
              </select>
              <button
                class="bg-orange-400 text-zinc-900 shadow-amber-500 transition-all hover:shadow"
              >
                Cancelar pedido
              </button>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { api } from '@/lib/api'
import { onMounted, ref } from 'vue'

defineOptions({ name: 'DashboardComponent' })

interface BurgerProps {
  id: number
  nome: string
  status: string
  pao: string
  carne: string
  opcionais: string[]
}

const burgers = ref<BurgerProps>()

const getPedidos = async () => {
  const req = await api.get('/burgers')

  burgers.value = req.data
  console.log(burgers.value)
}

onMounted(() => {
  getPedidos()
})
</script>
