import {
  AnchorTag,
  IssueContainer,
  MiddleContainer,
  TopContainer,
} from './style'
import gitHubIcon from '../../../../assets/github-icon.svg'
import followersIcon from '../../../../assets/followers-icon.svg'
import companyIcon from '../../../../assets/company-icon.svg'
import { ArrowSquareOut } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { Issue, repoName, userName } from '../../../Home'

interface IssueHeaderContainerProps {
  title: string
  issueNumber: string
}

export function IssueHeaderContainer(props: IssueHeaderContainerProps) {
  const [issueData, setIssueData] = useState<Issue>()

  const navigate = useNavigate()
  useEffect(() => {
    async function getProfileData() {
      const response = await api.get(
        `/repos/${userName}/${repoName}/issues/${props.issueNumber}`,
      )
      setIssueData(response.data)
    }
    getProfileData()
  }, [])

  if (!issueData) return null

  const { user } = issueData
  const { login, company, followers, html_url } = user

  return (
    <IssueContainer>
      <TopContainer>
        <AnchorTag onClick={() => navigate(-1)}>
          <span>&lt; Voltar</span>
        </AnchorTag>

        <AnchorTag href={html_url} target="_blank">
          <span>Ver no GitHub</span>
          <ArrowSquareOut size={22} color="#3294F8" weight="bold" />
        </AnchorTag>
      </TopContainer>

      <MiddleContainer>
        <h1>{props.title}</h1>

        <footer>
          <ul>
            <li>
              <img src={gitHubIcon} alt="" />
              {login}
            </li>
            <li>
              <i>
                <img src={companyIcon} alt="" />
              </i>
              {company || 'Freelancer'}
            </li>
            <li>
              <i>
                <img src={followersIcon} alt="" />
              </i>
              {followers || '0'} Seguidores
            </li>
          </ul>
        </footer>
      </MiddleContainer>
    </IssueContainer>
  )
}
