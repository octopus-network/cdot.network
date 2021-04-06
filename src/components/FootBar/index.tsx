import React from 'react'
import { DirectionalHint, HoverCard, HoverCardType, Image, Separator } from 'office-ui-fabric-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faWeixin } from '@fortawesome/free-brands-svg-icons'

import './index.scss'

const FootBar: React.FC = () => {
  return (
    <div className='cdot-foot-bar'>
      <div className='cdot-foot-bar--inner'>
        <div className='cdot-foot-bar--left'>
          <Image width={109} height={38} src={require('~asset/images/title/cdot-gray.svg')}/>
          <Separator
            className='separator'
            styles={{
              root: {
                height: '36px'
              }
            }}
            vertical
          />
          <div className='copyright'>
            Copyright © { new Date().getFullYear() } Cdot Network Foundation. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default FootBar
