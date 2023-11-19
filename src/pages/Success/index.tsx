import { OrderData, SuccessContainer, SuccessData } from './styles'
import deliveringIllustration from '../../assets/delyvering.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessData>
        <h1>Uhu! Pedido Confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <OrderData>
          <div>
            <span>
              <MapPin weight="fill" size={16} />
            </span>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> -
              <br />
              Farrapos - Porto Alegre, RS
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
              <strong>Cartão de Crédito</strong>
            </p>
          </div>
        </OrderData>
      </SuccessData>
      <img src={deliveringIllustration} alt="" />
    </SuccessContainer>
  )
}
