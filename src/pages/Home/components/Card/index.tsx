import { ShoppingCart } from 'phosphor-react'
import { AddCartWrapper, Card, CardFooter, TagList } from './styles'
import { formatMoney } from '../../../../utils/formatMoney'
import { AmountInput } from '../../../../components/AmountInput'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'

export interface Coffee {
  id: string
  imgUrl: string
  tags: string[]
  name: string
  description: string
  value: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <Card>
      <img src={coffee.imgUrl} alt={coffee.description} />
      <TagList>
        {coffee.tags.map((tag) => {
          return <span key={`${coffee.id}${tag}`}>{tag}</span>
        })}
      </TagList>
      <h1>{coffee.name}</h1>
      <p>{coffee.description}</p>

      <CardFooter>
        <div className="price">
          <span>R$</span>
          <strong>{formatMoney(coffee.value)}</strong>
        </div>
        <AddCartWrapper>
          <AmountInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </Card>
  )
}
