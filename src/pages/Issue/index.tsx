import { useLocation } from 'react-router-dom'
import { IssueHeaderContainer } from './components/IssueHeader'
import { MainContainer } from './style'
import ReactMarkdown from 'react-markdown'

export function Issue() {
  const location = useLocation()

  return (
    <div>
      <IssueHeaderContainer
        title={location.state.title}
        issueNumber={location.state.number}
      />

      <MainContainer>
        <ReactMarkdown>{location.state.content}</ReactMarkdown>
      </MainContainer>
    </div>
  )
}
