import React, { useEffect, useState } from 'react'
import { Stack, Image, Text, mergeStyleSets } from 'office-ui-fabric-react'
import { Card } from '@uifabric/react-cards'
import { Partner } from '~type/index'

export interface NewsAreaProps {
  partners: Partner[]
}

const classNames = mergeStyleSets({
  root: {
    width: '100%',
    height: '1009px'
  },
  partners: {
    fontSize: '56px'
  },
  card: {
    width: '322px',
    minWidth: '322px',
    height: '140px',
    marginLeft: '2rem',
    backgroundColor: '#131313',
    justifyContent: 'center',
    alignItems: 'center',
    selectors: {
      '@media(max-width: 1024px)': {
        margin: '0 0 1rem',
        width: '100%',
        minWidth: '100%'
      }
    }
  }
})

const PartnersArea: React.FC<NewsAreaProps> = ({ partners }) => {
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
          <Stack horizontal={width > 1024} horizontalAlign='center'>
            {partners.map(({ name, imgUrl, width, height }) => (
              <Stack.Item key={name}>
                <Card
                  className={classNames.card}
                >
                  <Card.Section>
                    <Image
                      width={width}
                      height={height}
                      src={width > 640 ? imgUrl.large : imgUrl.default}
                    />
                  </Card.Section>
                </Card>
              </Stack.Item>
            ))}
          </Stack>
        </Stack.Item>
      </Stack>
    </div>
  )
}

export default PartnersArea
