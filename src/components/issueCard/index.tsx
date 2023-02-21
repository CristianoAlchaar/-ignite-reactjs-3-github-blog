import { IssueCardContainer } from './style'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'

interface IssueCardProps {
  number: string
  title: string
  content: string
  createdAt: string
}

export function IssueCard(props: IssueCardProps) {
  const date = new Date(props.createdAt)
  const currentDate = new Date()
  const timeDiff = Math.abs(currentDate.getTime() - date.getTime())
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
  const content =
    props.content !== null
      ? props.content.length > 130
        ? props.content.slice(0, 130) + '...'
        : props.content
      : 'This issue is empty'

  const navigate = useNavigate()

  return (
    <IssueCardContainer
      onClick={() =>
        navigate('/issue', {
          state: {
            number: props.number,
            title: props.title,
            content: props.content,
          },
        })
      }
    >
      <header>
        <h2>{props.title}</h2>
        <span>Há {diffDays} dias</span>
      </header>

      <ReactMarkdown>{content}</ReactMarkdown>
    </IssueCardContainer>
  )
}
