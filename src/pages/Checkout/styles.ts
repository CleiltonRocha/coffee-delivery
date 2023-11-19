import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100vw;

  padding: 9rem 10rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

export const OrderFormContainer = styled.div`
  h1 {
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors['base-title']};
    font-size: ${(props) => props.theme.textSizes['title-title-s']};
    line-height: 130%;
  }
`

const BaseCard = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;

  background-color: ${(props) => props.theme.colors['base-card']};
`

export const AddressFormContainer = styled(BaseCard)`
  flex-direction: column;
  gap: 2rem;

  margin-top: 0.9375rem;
`

const BaseCardHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 2px;

    span {
      font-size: ${(props) => props.theme.textSizes['text-regular-m']};
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    p {
      font-size: ${(props) => props.theme.textSizes['text-regular-s']};
      color: ${(props) => props.theme.colors['base-text']};
    }
  }
`

export const AddressFormHeader = styled(BaseCardHeader)`
  svg {
    color: ${(props) => props.theme.colors['brand-yellow']};
  }
`

export const PaymentMethodsContainer = styled(BaseCard)`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const PaymentsMethodsHeader = styled(BaseCardHeader)`
  svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }
`

export const OptionsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.75rem;
`

export const Option = styled.button`
  border: 0;
  background-color: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: sart;
  gap: 0.75rem;

  padding: 1rem;
  transition: 0.4s;

  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.textSizes['components-button-s']};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors['base-subtitle']};

  svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }
`

export const OrderDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;

  h1 {
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors['base-title']};
    font-size: ${(props) => props.theme.textSizes['title-title-s']};
    line-height: 130%;
  }
`

export const ConfirmCardContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 44px;

  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.75rem;
  width: 100%;
  color: ${(props) => props.theme.colors['base-text']};

  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    &:last-of-type {
      span {
        font-size: ${(props) =>
          props.theme.textSizes['text-bold-l']} !important;
        font-weight: 600;
      }
    }

    span:nth-child(1):not(:last-child) {
      font-size: ${(props) => props.theme.textSizes['text-regular-s']};
    }

    span:nth-child(2):not(:last-child) {
      font-size: ${(props) => props.theme.textSizes['text-regular-m']};
    }
  }
`

export const ConfirmOrderButton = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s;

  text-transform: uppercase;
  font-size: ${(props) => props.theme.textSizes['components-button-g']};
  color: ${(props) => props.theme.colors['base-white']};
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.regular};

  border-radius: 6px;

  background-color: ${(props) => props.theme.colors['brand-yellow']};
  padding: 0.75rem;

  &:hover {
    background-color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }
`
