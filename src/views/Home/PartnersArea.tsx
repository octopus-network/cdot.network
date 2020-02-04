import React, { useEffect, useState } from 'react'
import { Stack, Image, Text, mergeStyleSets } from 'office-ui-fabric-react'
import { Card } from '@uifabric/react-cards'
import { Partner } from '~type'

export interface NewsAreaProps {
  partners: Partner[]
}

const classNames = mergeStyleSets({
  root: {
    width: '100%',
    height: '526px'
  },
  partners: {
    fontSize: '3.5rem'
  },
  card: {
    width: '225px',
    minWidth: '225px',
    height: '90px',
    marginLeft: '2rem',
    backgroundColor: '#131313',
    justifyContent: 'center',
    alignItems: 'center',
    selectors: {
      '@media(max-width: 1023px)': {
        margin: '0 0 1rem',
        width: '100%',
        minWidth: '100%'
      }
    }
  }
})

const PartnersArea: React.FC<NewsAreaProps> = ({ partners }) => {
  const [screenWidth, setWidth] = useState(window.screen.width)
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
    <div className={classNames.root}>
      <Stack tokens={{
        childrenGap: '5rem'
      }}>
        <Stack.Item align='center'>
          <Text className={classNames.partners}>
            Partners
          </Text>
        </Stack.Item>
        <Stack.Item styles={{ root: { width: '100%' } }} align='center'>
          <Stack wrap tokens={{ childrenGap: 20 }} horizontal horizontalAlign='center'>
            {partners.map(({ name, imgUrl, width, height, to }) => (
              <Card
                key={name}
                className={classNames.card}
              >
                <Card.Section>
                  {/* tip: external link */}
                  <a target='_blank' rel='noopener noreferrer' href={to}>
                    <Image
                      width={width}
                      height={height}
                      src={imgUrl.type === 'svg' ? imgUrl.svg : (screenWidth > 640 ? imgUrl.large : imgUrl.default)}
                    />
                  </a>
                </Card.Section>
              </Card>
            ))}
          </Stack>
        </Stack.Item>
      </Stack>
    </div>
  )
}

export default PartnersArea
