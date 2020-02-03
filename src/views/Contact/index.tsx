import React from 'react'
import { Image } from 'office-ui-fabric-react'
import { CommandBar } from '~component/Header'

import './index.scss'

const ContactPage: React.FC = () => (
  <div className='cdot-page cdot-contact'>
    <CommandBar items={[
      { name: 'Github', url: 'https://github.com/cdot-network' },
      { name: 'Blog', url: '/contact' },
      { name: 'Stay in Touch', url: '/contact' }
    ]}/>
    <div className='cdot-contact--inner'>
      <Image
        src={require('~asset/images/title/comingsoon.png')}
      />
      <div className='cdot-contact--font'>contact with the team</div>
      <div
        style={{
          marginTop: '33px',
          padding: '14px 22px 15px 22px',
          borderRadius: '4px',
          border: '2px solid rgba(179,179,179,1)'
        }}
      >
        <div className='cdot-contact--font cdot-contact--button'>hello@cdot.network</div>
      </div>
    </div>
  </div>
)

export default ContactPage
