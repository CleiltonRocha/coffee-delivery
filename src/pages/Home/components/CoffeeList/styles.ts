import styled from 'styled-components'

export const CoffeeMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 4;
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 13;
  }

  @media only screen and (min-width: 601px) and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
