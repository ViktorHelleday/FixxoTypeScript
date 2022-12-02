import React from 'react'

export interface ExternalLinkIconType {
  link: any
  icon: any
}

const ExternalLinkIcon: React.FC<ExternalLinkIconType> = ({link, icon}) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon