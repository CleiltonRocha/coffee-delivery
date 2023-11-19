import styled from 'styled-components'

export const AddressFormContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
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
