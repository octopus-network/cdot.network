import React, { useEffect, useState } from 'react'
import { Card } from '@uifabric/react-cards'
import { Text, Image, mergeStyleSets } from 'office-ui-fabric-react'
import { Introduction } from '~type/index'

export interface IntroduceCardProps extends Introduction {
  to?: string
}

const classNames = mergeStyleSets({
  root: {
    width: '650px',
    minWidth: '650px',
    height: '174px',
    selectors: {
      '@media(max-width: 1024px)': {
        minWidth: '100%',
        width: '100%'
      }
    }
  },
  iconArea: {
    padding: '1rem',
    selectors: {
      '@media(max-width: 1024px)': {
        padding: '0.6rem'
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
          className={classNames.iconArea}
          width={width > 1024 ? 86 : 64}
          height={width > 1024 ? 86 : 64}
          src={width > 640 ? imgUrl.large : imgUrl.default}
        />
      </Card.Item>
      <Card.Section>
        <Text styles={{
          root: {
            fontSize: '28px',
            fontWeight: '400',
            color: '#fff',
            selectors: {
              '@media(max-width: 1024px)': {
                fontSize: '18px'
              }
            }
          }
        }}>{title}</Text>
        <Text styles={{
          root: {
            fontSize: '20px',
            color: '#BCBCBC',
            selectors: {
              '@media(max-width: 1024px)': {
                fontSize: '15px'
              }
            }
          }
        }} block>{description}</Text>
      </Card.Section>
    </Card>
  )
}

export default IntroduceCard
