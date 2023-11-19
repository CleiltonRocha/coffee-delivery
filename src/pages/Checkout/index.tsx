import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  OrderFormContainer,
  CheckoutContainer,
  AddressFormHeader,
  AddressFormContainer,
  PaymentMethodsContainer,
  PaymentsMethodsHeader,
  OptionsContainer,
  Option,
  OrderDataContainer,
  ConfirmCardContainer,
  AmountContainer,
  ConfirmOrderButton,
} from './styles'
import { AddressForm } from './components/AddressForm'
import { OrderCoffeeCard } from './components/OrderCoffeeCard'
import { useCart } from '../../hooks/useCart'
import { formatMoney } from '../../utils/formatMoney'

export function Checkout() {
  const { cartItems, totalCartItemsValue } = useCart()

  const totalItems = cartItems.length

  return (
    <CheckoutContainer>
      <OrderFormContainer>
        <h1>Complete seu pedido</h1>
        <AddressFormContainer>
          <AddressFormHeader>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressFormHeader>
          <AddressForm />
        </AddressFormContainer>
        <PaymentMethodsContainer>
          <PaymentsMethodsHeader>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentsMethodsHeader>
          <OptionsContainer>
            <Option>
              <CreditCard size={16} />
              Cartão de Crédito
            </Option>
            <Option>
              <Bank size={16} />
              Cartão de Débito
            </Option>
            <Option>
              <Money size={16} />
              Dinheiro
            </Option>
          </OptionsContainer>
        </PaymentMethodsContainer>
      </OrderFormContainer>
      <OrderDataContainer>
        <h1>Cafés Selecionados</h1>
        <ConfirmCardContainer>
          {cartItems.map((item) => {
            return <OrderCoffeeCard key={item.id} coffeeCart={item} />
          })}
          <AmountContainer>
            <div>
              <span>Total de Itens</span>
              <span>{totalItems}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ {formatMoney(totalCartItemsValue)}</span>
            </div>
          </AmountContainer>
          <ConfirmOrderButton>Confirmar Pedido</ConfirmOrderButton>
        </ConfirmCardContainer>
      </OrderDataContainer>
    </CheckoutContainer>
  )
}
