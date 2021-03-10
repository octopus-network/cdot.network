import React from 'react'
import { DirectionalHint, HoverCard, HoverCardType, Image, Separator } from 'office-ui-fabric-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faWeixin } from '@fortawesome/free-brands-svg-icons'

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
        <div className='cdot-foot-bar--right'>
          <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/CdotNetwork'>
            <FontAwesomeIcon color='rgb(136, 136, 136)' size='2x' icon={faTwitter}/>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/octopus-network'>
            <FontAwesomeIcon color='rgb(136, 136, 136)' size='2x' icon={faGithub}/>
          </a>
          <HoverCard
            type={HoverCardType.plain}
            cardOpenDelay={0}
            instantOpenOnClick={true}
            plainCardProps={{
              calloutProps: {
                isBeakVisible: true
              },
              directionalHint: DirectionalHint.topCenter,
              onRenderPlainCard: () => (
                <Image
                  src={require('~asset/images/wechat_qr.png')}
                  srcSet={`
                    ${require('~asset/images/wechat_qr.png')},
                    ${require('~asset/images/wechat_qr@2x.png')} 2x
                  `}
                />
              )
            }}
          >
            <FontAwesomeIcon color='rgb(136, 136, 136)' size='2x' icon={faWeixin}/>
          </HoverCard>
          <HoverCard
            type={HoverCardType.plain}
            cardOpenDelay={0}
            instantOpenOnClick={true}
            plainCardProps={{
              calloutProps: {
                isBeakVisible: true
              },
              directionalHint: DirectionalHint.topCenter,
              onRenderPlainCard: () => (
                <div style={{ margin: '9px 10px', color: '#000' }}>
                  hello@cdot.network
                </div>
              )
            }}
          >
            <FontAwesomeIcon color='rgb(136, 136, 136)' size='2x' icon={faEnvelope}/>
          </HoverCard>
        </div>
      </div>
    </div>
  )
}

export default FootBar
