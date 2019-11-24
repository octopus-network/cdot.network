import React from 'react'
import { Card } from '@uifabric/react-cards'
import { Text, mergeStyleSets } from 'office-ui-fabric-react'

interface NewsCardProps {
  titleImgUrl: string
  title: string
  description: string
  author: string
  date: string
  to: string
}

const classNames = mergeStyleSets({
  newsCard: {
    backgroundColor: '#fff'
  },
  titleImage: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  }
})

const NewsCard: React.FC<NewsCardProps> = ({ titleImgUrl, author, date, title, description, to }) => {
  return (
    <Card
      tokens={{
        minWidth: '352px',
        width: '352px',
        childrenMargin: 25
      }}
      className={classNames.newsCard}
    >
      <Card.Section
        fill
        verticalAlign='end'
        className={classNames.newsCard}
        styles={{
          root: {
            backgroundImage: `url(${titleImgUrl})`
          }
        }}
      >
        {/* tip: 填充高度 */}
        <div style={{ height: '240px' }}/>
      </Card.Section>
      <Card.Section horizontal>
        <Text>{author}</Text>
        <Text>{date}</Text>
      </Card.Section>
      <Card.Section>
        <Text>{title}</Text>
      </Card.Section>
      <Card.Section>
        <Text>{description}</Text>
      </Card.Section>
      <Card.Section>
        {to}
      </Card.Section>
    </Card>
  )
}

export default NewsCard
