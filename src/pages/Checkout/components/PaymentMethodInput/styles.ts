import styled from 'styled-components'

export const Option = styled.div`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.textSizes['components-button-s']};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors['base-subtitle']};
  cursor: pointer;
  user-select: none;

  svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }

  label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid transparent;

    transition: background-color 0.4s;

    background-color: ${(props) => props.theme.colors['base-button']};

    padding: 1rem;

    &:hover {
      background: ${(props) => props.theme.colors['base-hover']};
    }
  }

  input[type='radio'] {
    position: absolute;
    opacity: 0;
  }

  input:checked + label {
    border-color: ${(props) => props.theme.colors['brand-purple']};
  }
`
