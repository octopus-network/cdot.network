import React from 'react'
import { Image, Separator } from 'office-ui-fabric-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faWeixin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './index.scss'

const FootBar: React.FC = () => {
  return (
    <div className='cdot-foot-bar'>
      <Image
        className='cdot-foot-bar--banner'
        width='100%'
        height={150}
        src={require('~asset/images/background/footer.png')}
        srcSet={`
          ${require('~asset/images/background/footer.png')} 1x,
          ${require('~asset/images/background/footer@2x.png')} 2x
        `}
      />
      <div className='cdot-foot-bar--inner'>
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
    </div>
  )
}

export default FootBar
