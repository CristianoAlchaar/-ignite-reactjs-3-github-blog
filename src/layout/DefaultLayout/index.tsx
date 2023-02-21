import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { MainContainer } from './style'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  )
}
