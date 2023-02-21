import { GitHubAnchorTag, Profile } from './style'
import gitHubIcon from '../../assets/github-icon.svg'
import followersIcon from '../../assets/followers-icon.svg'
import companyIcon from '../../assets/company-icon.svg'
import { ArrowSquareOut } from 'phosphor-react'

interface ProfileContainerProps {
  name: string
  login: string
  followers: number
  company?: string
  img_Url: string
  description: string
  gitHubLink: string
}

export function ProfileContainer(props: ProfileContainerProps) {
  return (
    <Profile>
      <GitHubAnchorTag href={props.gitHubLink} target="_blank">
        <span>GITHUB</span>
        <ArrowSquareOut size={22} color="#3294F8" weight="bold" />
      </GitHubAnchorTag>
      <img src={props.img_Url} alt="" />
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <footer>
          <ul>
            <li>
              <i>
                <img src={gitHubIcon} alt="" />
              </i>
              {props.login}
            </li>
            {props.company ? (
              <li>
                <i>
                  <img src={companyIcon} alt="" />
                </i>
                {props.company}
              </li>
            ) : null}

            <li>
              <i>
                <img src={followersIcon} alt="" />
              </i>
              {props.followers} Seguidores
            </li>
          </ul>
        </footer>
      </div>
    </Profile>
  )
}
