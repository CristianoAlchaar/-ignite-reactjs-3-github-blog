import styled from 'styled-components'

export const IssueContainer = styled.div`
  width: 54rem;
  height: 168px;
  position: relative;
  bottom: 100px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;

  background-color: ${(props) => props.theme['base-profile']}; //#0b1b2b
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']}; //#E7EDF4;
  }

  foonter {
    span i {
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    gap: 0.8rem;
  }

  ul li {
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }

  ul li img {
    width: 1rem;
    height: 1rem;
  }
`

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const MiddleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 75%;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.5rem;
`

export const AnchorTag = styled.a`
  text-transform: uppercase;
  font-size: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  color: ${(props) => props.theme.blue};

  cursor: pointer;

  :visited {
    color: ${(props) => props.theme.blue};
  }

  :hover {
    font-weight: bold;
  }

  span {
    margin-top: 0.1rem;
  }
`
