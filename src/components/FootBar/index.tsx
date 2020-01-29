import React from 'react'
import { Image, Separator } from 'office-ui-fabric-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faWeixin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './index.scss'

const FootBar: React.FC = () => {
  return (
    <div className='cdot-foot-bar'>
      <div className='cdot-foot-bar--left'>
        <Image width={109} height={38} src='/assets/images/title/cdot-gray.svg'/>
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
          Copyright © 2019 cdot.network foundation. All rights reserved.
        </div>
      </div>
      <div className='cdot-foot-bar--right'>
        <FontAwesomeIcon color='rgb(136, 136, 136)' size='2x' icon={faTwitter}/>
        <FontAwesomeIcon color='rgb(136, 136, 136)' size='2x' icon={faGithub}/>
        <FontAwesomeIcon color='rgb(136, 136, 136)' size='2x' icon={faWeixin}/>
        <FontAwesomeIcon color='rgb(136, 136, 136)' size='2x' icon={faEnvelope}/>
      </div>
    </div>
  )
}

export default FootBar
