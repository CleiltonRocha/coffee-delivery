import styled from 'styled-components'

export const CoffeeCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .divider {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors['base-button']};
    margin-top: 1.5rem;
  }
`

export const CoffeeData = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  padding: 0.5rem 0.25rem;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`

export const OrderDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.25rem;

  span {
    font-size: ${(props) => props.theme.textSizes['text-regular-m']};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media only screen and (min-width: 320px) and (max-width: 600px) {
      justify-content: center;
      align-items: center;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      max-width: 12rem;

      .removeButton {
        border: 0;
        background-color: ${(props) => props.theme.colors['base-button']};

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        padding: 0.6rem;
        border-radius: 6px;

        text-transform: uppercase;
        transition: background-color 0.3s;

        font-family: ${(props) => props.theme.fonts.regular};
        color: ${(props) => props.theme.colors['base-text']};

        svg {
          color: ${(props) => props.theme.colors['brand-purple']};
        }

        &:hover {
          background-color: ${(props) => props.theme.colors['base-hover']};
        }
      }

      @media only screen and (min-width: 320px) and (max-width: 600px) {
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    flex-direction: column;
  }
`
