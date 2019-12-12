import React from 'react'
import Header from '~component/Header'
import { Fabric } from 'office-ui-fabric-react'
import { Article } from '~type/index'
import { article1, article2, article3, article4 } from '~data/articles'

const articles: Article[] = [article1, article2, article3, article4]

const HomePage: React.FC = () => {
  return (
    <Fabric>
      <Header items={[
        { name: 'About', url: '/contact' },
        { name: 'Github', url: 'https://github.com/cdot-network' },
        { name: 'Blog', url: '/contact' }
      ]}/>
    </Fabric>
  )
}

export default HomePage
