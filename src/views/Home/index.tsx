import React from 'react'
import Header from '~component/Header'
import { Fabric, mergeStyles } from 'office-ui-fabric-react'
import { Article } from '~type/index'
import { article1, article2, article3, article4 } from '~data/articles'
import IntroductionArea from './IntroductionArea'

const articles: Article[] = [article1, article2, article3, article4]

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
    </Fabric>
  )
}

export default HomePage
