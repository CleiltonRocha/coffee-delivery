import { ReactNode, createContext, useEffect, useState } from 'react'
import { Coffee } from '../pages/Home/components/Card'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  cartQuantity: number
  changeCartItemQuantity: (
    cartItemId: string,
    type: 'increase' | 'decrease',
  ) => void
  removeItemFromCart: (cartItemId: string) => void
  totalCartItemsValue: number
  cleanCartItems: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'CoffeeDelivery:CartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }

    return []
  })
  const cartQuantity = cartItems.length

  const totalCartItemsValue = cartItems.reduce((total, item) => {
    return total + item.value * item.quantity
  }, 3.5)

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeIsInCart = cartItems.findIndex((item) => item.id === coffee.id)

    const newCart = produce(cartItems, (draft) => {
      if (coffeeIsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeIsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: string,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (item) => item.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeItemFromCart(cartItemId: string) {
    const newCartItems = produce(cartItems, (draft) => {
      const coffee = cartItems.findIndex((item) => item.id === cartItemId)

      if (coffee >= 0) {
        draft.splice(coffee, 1)
      }
    })

    setCartItems(newCartItems)
  }

  function cleanCartItems() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeItemFromCart,
        totalCartItemsValue,
        cleanCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
