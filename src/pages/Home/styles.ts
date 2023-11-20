import styled from 'styled-components'
import introBackground from '../../assets/intro-background.png'

export const HomeContainer = styled.main`
  width: 100vw;
`

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: url(${introBackground});
  background-size: cover;
  background-repeat: no-repeat;

  padding: 5.75rem 10rem;
  margin-top: 6.5rem;

  img {
    max-width: 29.75rem;
    max-height: 22.5rem;

    @media ${(props) => props.theme.device.tablet} {
      max-width: 90%;
    }
  }

  @media ${(props) => props.theme.device.mobileL} {
    flex-direction: column;
    gap: 3rem;

    padding: 3rem 1.5rem;
  }

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: column;
    gap: 3rem;

    padding: 3rem 1.5rem;
  }

  @media ${(props) => props.theme.device.laptop} {
    padding: 2rem 3rem;
  }
`

export const LeftContainer = styled.div`
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors['base-title']};
    font-size: ${(props) => props.theme.textSizes['title-title-xl']};
    line-height: 130%;
  }

  p {
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.textSizes['text-regular-l']};
  }
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;

  row-gap: 1.25rem;

  margin-top: 3.75rem;

  width: 100%;
`

const BaseBenefits = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.375rem;

  color: ${(props) => props.theme.colors['base-text']};

  p {
    font-size: ${(props) => props.theme.textSizes['text-regular-m']};
  }
`

export const Benefits = styled(BaseBenefits)`
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
    background-color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  &:nth-child(2) span {
    background-color: ${(props) => props.theme.colors['base-text']};
  }

  &:nth-child(3) span {
    background-color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  &:nth-child(4) span {
    background-color: ${(props) => props.theme.colors['brand-purple']};
  }
`

export const CoffeeListContainer = styled.div`
  padding: 2rem 10rem;

  h1 {
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors['base-title']};
    font-size: ${(props) => props.theme.textSizes['title-title-l']};
    line-height: 130%;
    margin-bottom: 3.375rem;
  }

  @media ${(props) => props.theme.device.tablet} {
    padding: 2rem 1rem;
  }

  @media ${(props) => props.theme.device.laptop} {
    padding: 2rem 3rem;
  }
`
