import React from 'react'
import Header from '~component/Header'
import { Fabric } from 'office-ui-fabric-react'
import { News, Participant, Partner } from '~type/index'
import { news1, news2, news3, news4 } from '~data/news'
import { oneBlockPlus, polkabase, polkadot, rustcc } from '~data/partners'
import { participant1, participant2, participant3, participant4, participant5 } from '~data/participants'
import IntroductionArea from './IntroductionArea'
import InnovationArea from './InnovationArea'
import PartnersArea from './PartnersArea'
import NewsArea from './NewsArea'
import ParticipantsArea from './ParticipantsArea'
import FootBar from '~component/FootBar'

import '../../style/index.scss'

const news: News[] = [news1, news2, news3, news4]
const partners: Partner[] = [polkadot, rustcc, polkabase, oneBlockPlus]
const participants: Participant[] = [participant1, participant2, participant3, participant4, participant5]

const HomePage: React.FC = () => {
  return (
    <Fabric className='cdot-page'>
      <Header
        className='cdot-header'
        items={[
          { name: 'About', url: '/contact' },
          { name: 'Github', url: 'https://github.com/cdot-network' },
          { name: 'Stay in Touch', url: '/contact' }
        ]}
      />
      <IntroductionArea className='cdot-introduction'/>
      <InnovationArea/>
      <ParticipantsArea participants={participants}/>
      <NewsArea news={news}/>
      <PartnersArea partners={partners}/>
      <FootBar/>
    </Fabric>
  )
}

export default HomePage
