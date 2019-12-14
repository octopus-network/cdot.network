import React from 'react'
import Header from '~component/Header'
import { Fabric, mergeStyles } from 'office-ui-fabric-react'
import { News, Participant, Partner } from '~type/index'
import { news1, news2, news3, news4 } from '~data/news'
import { oneBlockPlus, polkabase, polkadot, rustcc } from '~data/partners'
import { participant1, participant2, participant3, participant4, participant5 } from '~data/participants'
import IntroductionArea from './IntroductionArea'
import PartnersArea from './PartnersArea'
import NewsArea from './NewsArea'
import ParticipantsArea from './ParticipantsArea'
import './index.scss'

const news: News[] = [news1, news2, news3, news4]
const partners: Partner[] = [polkadot, rustcc, polkabase, oneBlockPlus]
const participants: Participant[] = [participant1, participant2, participant3, participant4, participant5]

const HomePage: React.FC = () => {
  return (
    <Fabric className={mergeStyles({
      backgroundColor: '#000'
    })}>
      <Header items={[
        { name: 'About', url: '/contact' },
        { name: 'Github', url: 'https://github.com/cdot-network' },
        { name: 'Blog', url: '/contact' }
      ]}/>
      <IntroductionArea/>
      <ParticipantsArea participants={participants}/>
      <NewsArea news={news}/>
      <PartnersArea partners={partners}/>
    </Fabric>
  )
}

export default HomePage
