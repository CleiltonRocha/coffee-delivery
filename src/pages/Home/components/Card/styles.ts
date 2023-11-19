import styled from 'styled-components'

export const Card = styled.div`
  border-radius: 6px 36px;
  background: ${(props) => props.theme.colors['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem 1.5rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -3rem;
  }

  h1 {
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors['base-title']};
    font-size: ${(props) => props.theme.textSizes['title-title-s']};
    line-height: 130%;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: ${(props) => props.theme.textSizes['text-regular-s']};
    color: ${(props) => props.theme.colors['base-label']};
    text-align: center;
  }
`

export const TagList = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-top: 0.75rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;

    font-size: ${(props) => props.theme.textSizes['components-tag']};
    font-weight: bold;
    text-transform: uppercase;

    color: ${(props) => props.theme.colors['brand-yellow']};
    background-color: ${(props) => props.theme.colors['brand-yellow-light']};
  }
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors['base-text']};
  margin-top: 2rem;

  .price {
    span {
      font-size: ${(props) => props.theme.textSizes['text-regular-s']};
      margin-right: 0.25rem;
    }
    strong {
      font-family: ${(props) => props.theme.fonts.title};
      font-size: ${(props) => props.theme.textSizes['title-title-m']};
    }
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;
  display: flex;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme.colors['brand-purple-dark']};
    color: ${(props) => props.theme.colors['base-card']};

    border-radius: 0.375rem;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${(props) => props.theme.colors['brand-purple']};
    }
  }
`
