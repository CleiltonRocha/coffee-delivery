import { Trash } from 'phosphor-react'
import { AmountInput } from '../../../../components/AmountInput'
import { CoffeeCard, CoffeeData, OrderDescription } from './styles'
import { formatMoney } from '../../../../utils/formatMoney'
import { CartItem } from '../../../../contexts/CartContext'
import { useCart } from '../../../../hooks/useCart'

interface OrderCoffeeCardProps {
  coffeeCart: CartItem
}
export function OrderCoffeeCard({ coffeeCart }: OrderCoffeeCardProps) {
  const total = coffeeCart.quantity * coffeeCart.value
  const { changeCartItemQuantity, removeItemFromCart } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffeeCart.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffeeCart.id, 'decrease')
  }

  function handleRemoveItemFromCart() {
    removeItemFromCart(coffeeCart.id)
  }

  return (
    <CoffeeCard>
      <CoffeeData>
        <OrderDescription>
          <img src={coffeeCart.imgUrl} alt="" width={64} height={64} />
          <div>
            <span>{coffeeCart.name}</span>
            <div>
              <AmountInput
                quantity={coffeeCart.quantity}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
              <button
                className="removeButton"
                onClick={handleRemoveItemFromCart}
              >
                <Trash size={16} />
                Remover
              </button>
            </div>
          </div>
        </OrderDescription>
        <strong>R$ {formatMoney(total)}</strong>
      </CoffeeData>

      <div className="divider"></div>
    </CoffeeCard>
  )
}
