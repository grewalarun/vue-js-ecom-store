import type { Product } from '@/types/Products'

export async function fetchSingleProduct(id: string): Promise<Product> {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status} - ${response.statusText}`)
  }

  return await response.json()
}