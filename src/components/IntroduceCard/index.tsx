import React, { useEffect, useState } from 'react'
import { Card } from '@uifabric/react-cards'
import { Text, Image, mergeStyleSets } from 'office-ui-fabric-react'
import { Introduction } from '~type/index'

export interface IntroduceCardProps extends Introduction {
  to?: string
}

const classNames = mergeStyleSets({
  root: {
    minWidth: '100%',
    width: '100%',
    height: '130px'
  },
  icon: {
    padding: '33px 22px 32px 33px'
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: '400',
    color: '#fff',
    selectors: {
      '@media(max-width: 1024px)': {
        fontSize: '1.5rem'
      }
    }
  },
  introductionLabel: {
    width: '100%'
  },
  introduction: {
    fontSize: '1.25rem',
    color: '#BCBCBC',
    selectors: {
      '@media(max-width: 1024px)': {
        fontSize: '1rem'
      }
    }
  }
})

const IntroduceCard: React.FC<IntroduceCardProps> = ({ title, description, imgUrl }) => {
  const [width, setWidth] = useState(window.screen.width)
  useEffect(() => {
    const onResize = () => {
      setWidth(window.screen.width)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return (
    <Card
      horizontal
      className={classNames.root}
      styles={{
        root: {
          backgroundColor: '#0B0C0E',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }}
    >
      <Card.Item>
        <Image
          className={classNames.icon}
          height={65}
          width={65}
          src={width > 640 ? imgUrl.large : imgUrl.default}
        />
      </Card.Item>
      <Card.Section className={classNames.introductionLabel}>
        <Text className={classNames.introduction}>
          {title}
        </Text>
        <Text className={classNames.introduction} block>
          {description}
        </Text>
      </Card.Section>
    </Card>
  )
}

export default IntroduceCard
