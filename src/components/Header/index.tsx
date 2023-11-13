import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/logo.svg'
import {
  ActionsContainer,
  CartAction,
  HeaderContainer,
  LocationContainer,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <ActionsContainer>
        <LocationContainer>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </LocationContainer>
        <CartAction>
          <ShoppingCart size={24} weight="fill" />
          <span>3</span>
        </CartAction>
      </ActionsContainer>
    </HeaderContainer>
  )
}
