import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/logo.svg'
import {
  ActionsContainer,
  CartAction,
  HeaderContainer,
  LocationContainer,
} from './styles'

import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={Logo} alt="" />
      </NavLink>
      <ActionsContainer>
        <LocationContainer>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </LocationContainer>
        <NavLink to="/checkout">
          <CartAction>
            <ShoppingCart size={24} weight="fill" />
            {cartQuantity > 0 && <span>{cartQuantity}</span>}
          </CartAction>
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
