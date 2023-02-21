import styled from 'styled-components'

export const Profile = styled.div`
  max-width: 54rem;
  width: 100%;
  height: 260px;
  position: relative;
  bottom: 100px;
  padding: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  background-color: ${(props) => props.theme['base-profile']}; //#0b1b2b
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']}; //#E7EDF4;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
  }

  div {
    display: flex;
    height: 75%;
    flex-direction: column;
    justify-content: space-around;
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
    justify-content: center;
    gap: 0.3rem;
    align-items: center;
  }

  ul li img {
    width: 1rem;
    height: 1rem;
  }

  i {
    display: flex;
    justify-content: center;
  }
`
export const GitHubAnchorTag = styled.a`
  position: absolute;
  top: 1rem;
  right: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  color: ${(props) => props.theme.blue};

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
