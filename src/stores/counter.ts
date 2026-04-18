import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types/Products'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function reset() {
    count.value = 0
  }

  return { count, doubleCount, increment, decrement, reset }
})

interface CartProps {
  id: number
  name: string
  category: string
  image: string
  price: number
  rating: number
  reviews: number
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartProps[]>([])

  const addToCart = (props: Omit<CartProps, 'quantity'>) => {
    const existing = cart.value.find((x) => x.id === props.id)

    if (existing) {
      existing.quantity += 1
    } else {
      cart.value.push({
        ...props,
        quantity: 1,
      })
    }
  }

  const removeCart = (id: number) => {
    const existing = cart.value.find((x) => x.id === id)

    if (existing) {
      cart.value = cart.value.filter((y) => y.id !== id)
    } else {
      cart
    }
  }

  const decreaseQuantity = (product: Omit<CartProps, 'quantity'>) => {
    const existing = cart.value.find((x) => x.id === product.id)

    if (existing?.quantity && existing?.quantity > 1) {
      existing.quantity -= 1
    } else existing?.quantity && existing?.quantity == 1
    cart.value = cart.value.filter((y) => y.id !== product.id)
  }

  const isInCart = (id: number) => {
    return cart.value.some((item) => item.id === id)
  }

  return { cart, addToCart, removeCart, decreaseQuantity, isInCart }
})
