import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 6.5rem;
  background: ${(props) => props.theme.colors['base-background']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  z-index: 10;

  padding: 2rem 10rem;

  @media ${(props) => props.theme.device.laptop} {
    padding: 2rem 3rem;
  }

  @media ${(props) => props.theme.device.tablet} {
    padding: 2rem 1.5rem;
  }

  @media ${(props) => props.theme.device.mobileL} {
    padding: 2rem 1.5rem;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const BaseActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 0.375rem;
`

export const LocationContainer = styled(BaseActions)`
  font-size: ${(props) => props.theme.textSizes['text-regular-s']};

  background-color: ${(props) => props.theme.colors['brand-purple-light']};
  color: ${(props) => props.theme.colors['brand-purple-dark']};

  svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }
`

export const CartAction = styled(BaseActions)`
  background-color: ${(props) => props.theme.colors['brand-yellow-light']};
  position: relative;

  svg {
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    min-width: 1.25rem;
    min-height: 1.25rem;
    border-radius: 999rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.colors['brand-yellow-dark']};
    color: ${(props) => props.theme.colors['base-white']};

    font-size: ${(props) => props.theme.textSizes['text-bold-s']};
    font-weight: bold;
  }
`
