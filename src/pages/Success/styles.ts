import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100vw;
  padding: 9rem 10rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4rem;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 9rem 1.5rem;

    place-items: center;
    row-gap: 2rem;
  }

  @media only screen and (min-width: 601px) and (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 9rem 1.5rem;

    place-items: center;
    row-gap: 2rem;
  }

  img {
    @media only screen and (min-width: 320px) and (max-width: 600px) {
      max-width: 100%;
      padding: 1.5rem;
    }
  }
`
export const SuccessData = styled.div`
  h1 {
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
    font-size: ${(props) => props.theme.textSizes['title-title-l']};
    line-height: 130%;
  }

  p {
    font-size: ${(props) => props.theme.textSizes['text-regular-l']};
    color: ${(props) => props.theme.colors['base-subtitle']};

    @media only screen and (min-width: 320px) and (max-width: 600px) {
      max-width: 70%;
    }
  }
`

export const Order = styled.div`
  padding: 2.5rem;
  border-radius: 6px 2.25rem !important;
  width: 32rem;
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  background-color: ${(props) => props.theme.colors['base-background']};

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    width: 22rem;
    padding: 1.5rem;
  }

  &:before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    gap: 0.75rem;

    p {
      font-size: ${(props) => props.theme.textSizes['text-regular-s']};
      color: ${(props) => props.theme.colors['base-text']};
      line-height: 130%;
    }

    span {
      min-width: 2rem;
      min-height: 2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${(props) => props.theme.colors['base-background']};
      }
    }

    &:nth-child(1) span {
      background-color: ${(props) => props.theme.colors['brand-purple']};
    }

    &:nth-child(2) span {
      background-color: ${(props) => props.theme.colors['brand-yellow']};
    }

    &:nth-child(3) span {
      background-color: ${(props) => props.theme.colors['brand-yellow-dark']};
    }

    &:nth-child(4) span {
      background-color: ${(props) => props.theme.colors['brand-purple']};
    }
  }
`
