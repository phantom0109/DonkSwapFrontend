import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { Profile } from '../types'
import NoProfileAvatar from '../../../components/Svg/Icons/NoProfileAvatar'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
interface AvatarProps {
  profile: Profile
  account: string
}

const StyledAvatar = styled.div`
  margin-left: 1.5rem;
  position: relative;

  img {
    border-radius: 50%;
  }
`

const Pip = styled.div`
  background-color: ${({ theme }) => theme.colors.failure};
  border-radius: 50%;
  pointer-events: none;
  height: 8px;
  position: absolute;
  right: 0;
  top: 0;
  width: 8px;
`

const Avatar: React.FC<AvatarProps> = ({ profile, account = '' }) => {
  const { username = 'Donk', image, profileLink, noProfileLink, showPip = false } = profile
  const link = profile.username ? profileLink : noProfileLink
  const isExternal = link.startsWith('http')
  const ariaLabel = 'Link to profile'
  const icon = image ? (
    <img src={image} alt="profile avatar" height="32px" width="32px" />
  ) : (
    <Menu
      menuButton={
        <div className="rounded-full md-up">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-flex items-center w-5 h-5 ml-2 text-gray-400 group-hover:text-secondary hover:text-high-emphesis"
            aria-hidden="true"
          >
            <title>More</title>
            <path
              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      }
    >
      {/* @ts-ignore */}
      <MenuItem onClick={() => (window.location.href = '//t.me/donkeykingfinance')}>Join Telegram</MenuItem>
    </Menu>
  )

  if (isExternal) {
    return (
      <StyledAvatar title={username}>
        <a href={link} aria-label={ariaLabel}>
          {icon}
        </a>
        {showPip && <Pip />}
      </StyledAvatar>
    )
  }

  return (
    <StyledAvatar title={username}>
      <Link to={link} aria-label={ariaLabel}>
        {icon}
      </Link>
      {showPip && <Pip />}
    </StyledAvatar>
  )
}

export default Avatar
