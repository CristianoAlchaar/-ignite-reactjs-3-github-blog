import styled from 'styled-components'
import backgroundCover from '../../assets/CoverHeader.svg'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  height: 296px;
  background-image: url(${backgroundCover});
  background-size: cover;
  background-repeat: no-repeat;

  img {
    margin-top: 64px;
    width: 9.25rem;
    height: 98px;
  }
`
