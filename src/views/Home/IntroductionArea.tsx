import React from 'react'
import { PrimaryButton } from 'office-ui-fabric-react'
import { introduction1, introduction2, introduction3 } from '~data/introductions'
import IntroduceCard from '~component/IntroduceCard'
import { Link } from 'react-router-dom'

import './index.scss'

const introductions = [introduction1, introduction2, introduction3]

const IntroductionArea: React.FC = () => {
  return (
    <div className='cdot-introduction-area'>
      <div className='cdot-introduction-area--inner'>
        <div className='cdot-introduction-area--left'>
          <div className='cdot-introduction-area--title'>
            A closer look at cdot
          </div>
          <div className='cdot-introduction-area--content'>
            Cdot addresses key barriers facing blockchain
            innovation: Trustless Interoperation, Secure Transaction,
            Sustainable Mechanism.
          </div>
          <Link to='/contact' style={{ marginTop: 22 }}>
            <PrimaryButton styles={{
              root: {
                height: '53px',
                width: '183px',
                transition: 'ease-in-out 0.2s'
              },
              rootHovered: {
                backgroundColor: '#fff',
                transition: 'ease-in-out 0.2s'
              },
              label: {
                color: '#030303',
                fontWeight: '400'
              }
            }}>
              Learn More
            </PrimaryButton>
          </Link>
        </div>
        <div className='cdot-introduction-area--right'>
          {introductions.map(introduction => (
            <IntroduceCard key={introduction.title} {...introduction}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IntroductionArea
