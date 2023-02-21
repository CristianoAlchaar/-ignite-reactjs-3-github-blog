import styled from 'styled-components'

export const IssueCardContainer = styled.div`
  width: 26rem;
  height: 260px;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  cursor: pointer;

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.8);
  }

  header {
    display: flex;
    justify-content: space-between;
    gap: 0.1rem;

    h2 {
      color: ${(props) => props.theme['base-title']};
      font-weight: 700;
      font-size: 1.25rem;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      width: 90px;
      display: flex;
      flex-direction: row;
    }
  }
`
