import { Order, SuccessContainer, SuccessData } from './styles'
import deliveringIllustration from '../../assets/delyvering.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData, PaymentMethods } from '../Checkout'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) {
    return <></>
  }

  return (
    <SuccessContainer>
      <SuccessData>
        <h1>Uhu! Pedido Confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <Order>
          <div>
            <span>
              <MapPin weight="fill" size={16} />
            </span>
            <p>
              Entrega em{' '}
              <strong>
                {state.street}, {state.number}
              </strong>{' '}
              -
              <br />
              {state.neightbourhood} - {state.city}, {state.uf}
            </p>
          </div>
          <div>
            <span>
              <Timer weight="fill" size={16} />
            </span>
            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          </div>
          <div>
            <span>
              <CurrencyDollar size={16} />
            </span>
            <p>
              Pagamento na Entrega
              <br />
              <strong>{PaymentMethods[state.paymentMethod].label}</strong>
            </p>
          </div>
        </Order>
      </SuccessData>
      <img src={deliveringIllustration} alt="" />
    </SuccessContainer>
  )
}
