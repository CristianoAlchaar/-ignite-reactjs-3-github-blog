import { IssueCard } from '../../components/issueCard'
import { ProfileContainer } from '../../components/profileContainer/index'
import { SearchBar } from '../../components/searchBar'
import { IssueCardContainer } from './style'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface GitHubUser {
  login: string
  id: string
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string | null
  blog: string
  location: string | null
  email: string | null
  hireable: boolean | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export interface Issue {
  id: string
  number: string
  title: string
  user: {
    login: string
    id: number
  }
  state: 'open' | 'closed'
  locked: boolean
  comments: number
  created_at: string
  updated_at: string
  closed_at: string | null
  body: string
}

interface IssueList {
  total_count: number
  incomplete_results: boolean
  items: Array<Issue>
}

export const userName = 'CristianoAlchaar'
export const repoName = 'reactjs-github-blog-challenge'

export function Home() {
  const [userData, setUserData] = useState<GitHubUser>()
  const [issuesData, setIssuesData] = useState<IssueList>()

  async function doNewQuery(query: string) {
    if (query === '') {
      getIssuesData()
    } else {
      const newQuery = query.replaceAll(' ', '%20')
      const response = await api.get(
        `/search/issues?q=${newQuery}repo:${userName}/${repoName}`,
      )
      setIssuesData(response.data)
    }
  }

  async function getProfileData() {
    const response = await api.get(`/users/${userName}`)
    setUserData(response.data)
  }

  async function getIssuesData() {
    const response = await api.get(
      `/search/issues?q=repo:${userName}/${repoName}`,
    )
    setIssuesData(response.data)
  }

  useEffect(() => {
    getProfileData()
    getIssuesData()
  }, [])

  if (!userData || !issuesData) return <h1>Loading</h1>

  const { name, login, company, followers, avatar_url, bio, html_url } =
    userData

  const { items } = issuesData

  return (
    <div>
      <ProfileContainer
        name={name}
        login={login}
        followers={followers}
        company={company}
        img_Url={avatar_url}
        description={bio}
        gitHubLink={html_url}
      />
      <SearchBar listLength={issuesData.total_count} doNewQuery={doNewQuery} />
      <IssueCardContainer>
        {items.map((item) => {
          return (
            <IssueCard
              key={item.id}
              number={item.number}
              title={item.title}
              content={item.body}
              createdAt={item.created_at}
            />
          )
        })}
      </IssueCardContainer>
    </div>
  )
}
