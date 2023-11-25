import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    display: flex;
    flex-direction: column;

    .cep,
    .street {
      max-width: 100%;
    }
  }

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    width: 100%;

    &::after {
      content: 'Optional';
      position: absolute;
      top: 50%;
      left: 50%;
      color: red;
    }
  }

  input {
    padding: 0.75rem;
    border-radius: 0.25rem;
    background-color: ${(props) => props.theme.colors['base-input']};
    border: 1px solid ${(props) => props.theme.colors['base-button']};
    color: ${(props) => props.theme.colors['base-text']};

    font-size: ${(props) => props.theme.textSizes['text-regular-s']};

    &:focus {
      outline: 1px solid ${(props) => props.theme.colors['brand-yellow']};
    }

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }
`

export const ComplementContainer = styled.div`
  position: relative;
  grid-column: span 2;

  span {
    position: absolute;
    right: 1rem;
    top: 0.75rem;

    font-size: ${(props) => props.theme.textSizes['text-regular-s']};
    font-style: italic;
    color: ${(props) => props.theme.colors['base-label']};
  }
`
