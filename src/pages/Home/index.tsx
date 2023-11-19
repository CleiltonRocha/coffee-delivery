import {
  Benefits,
  BenefitsContainer,
  CoffeeListContainer,
  HomeContainer,
  IntroContainer,
  LeftContainer,
} from './styles'
import CoffeeImg from '../../assets/img-coffee.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeList } from './components/CoffeeList'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <LeftContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <BenefitsContainer>
            <Benefits>
              <span>
                <ShoppingCart width={16} weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </Benefits>
            <Benefits>
              <span>
                <Package size={16} weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </Benefits>
            <Benefits>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </Benefits>
            <Benefits>
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </Benefits>
          </BenefitsContainer>
        </LeftContainer>
        <img src={CoffeeImg} alt="" />
      </IntroContainer>
      <CoffeeListContainer>
        <h1>Nossos cafés</h1>
        <CoffeeList />
      </CoffeeListContainer>
    </HomeContainer>
  )
}
