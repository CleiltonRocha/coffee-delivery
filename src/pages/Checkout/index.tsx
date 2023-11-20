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
  PaymentMethodsContainer,
  PaymentsMethodsHeader,
  OptionsContainer,
  OrderDataContainer,
  ConfirmCardContainer,
  AmountContainer,
  Button,
  EmptyStateContainer,
  AddressFormContainer,
} from './styles'
import { AddressForm } from './components/AddressForm'
import { OrderCoffeeCard } from './components/OrderCoffeeCard'
import { useCart } from '../../hooks/useCart'
import { formatMoney } from '../../utils/formatMoney'
import emptyState from '../../assets/cart-empty.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PaymentMethodInput } from './components/PaymentMethodInput'

enum PaymentMethodsEnum {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = z.object({
  cep: z.string().min(1, 'Informe o CEP'),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string(),
  complement: z.string(),
  neightbourhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  uf: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.nativeEnum(PaymentMethodsEnum),
})

export type OrderData = z.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export const PaymentMethods = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })
  const { cartItems, totalCartItemsValue, cleanCartItems } = useCart()

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/success', {
      state: data,
    })

    cleanCartItems()
  }

  const totalItems = cartItems.length

  return (
    <>
      {totalItems === 0 ? (
        <EmptyStateContainer>
          <img src={emptyState} alt="" />
          <h1>Ainda não há itens no seu carrinho!</h1>
          <p>
            Descubra nossos deliciosos cafés e encha seu carrinho com o aroma e
            sabor que só encontrará aqui.
          </p>
          <NavLink to={'/'}>
            <Button>Adicionar Itens ao Carrinho</Button>
          </NavLink>
        </EmptyStateContainer>
      ) : (
        <FormProvider {...confirmOrderForm}>
          <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
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
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                  </div>
                </PaymentsMethodsHeader>
                <OptionsContainer>
                  {Object.entries(PaymentMethods).map(
                    ([key, { label, icon }]) => (
                      <PaymentMethodInput
                        key={label}
                        id={key}
                        icon={icon}
                        label={label}
                        value={key}
                      />
                    ),
                  )}
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
                <Button type="submit">Confirmar Pedido</Button>
              </ConfirmCardContainer>
            </OrderDataContainer>
          </CheckoutContainer>
        </FormProvider>
      )}
    </>
  )
}
