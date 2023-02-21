import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  width: inherit;
  max-width: 54rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-span']};
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;

    width: 100%;
    height: 50px;
    margin-top: 1rem;

    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-title']};

    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
  }
`
