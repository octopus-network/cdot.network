import React from 'react'
import { Card } from '@uifabric/react-cards'
import { Text, mergeStyleSets, Image, Stack, ActionButton } from 'office-ui-fabric-react'

export interface IntroduceCardProps {
  title: string
  iconUrl: string
  introduction: string
  to: string
}

const classNames = mergeStyleSets({
  title: {
    padding: '1.7rem 0 0 1.2rem'
  },
  introduction: {
    fontWeight: 'normal'
  },
  line: {
    marginLeft: '2rem',
    width: '100px',
    height: '3px',
    backgroundColor: '#553580'
  }
})

const IntroduceCard: React.FC<IntroduceCardProps> = ({ title, introduction, iconUrl }) => {
  return (
    <Card tokens={{
      minWidth: '23rem'
    }}>
      <Card.Item>
        <Stack horizontal>
          <Text className={classNames.title} variant='xxLarge'>{title}</Text>
          <Image src={iconUrl}/>
        </Stack>
      </Card.Item>
      <Card.Item>
        <div className={classNames.line}/>
      </Card.Item>
      <Card.Section
        horizontalAlign='center'
        verticalAlign='center'
        tokens={{
          padding: '1rem 1.2rem'
        }}
        styles={{
          root: {
            height: '8rem'
          }
        }}
      >
        <Text
          variant='xLarge'
          className={classNames.introduction}
        >
          {introduction}
        </Text>
      </Card.Section>
      <Card.Item
        tokens={{
          padding: '1rem 1.2rem'
        }}
      >
        <ActionButton
          text='Learn More'
          iconProps={{ iconName: 'forward' }}
          styles={{
            root: {
              color: '#553580'
            },
            icon: {
              color: '#553580'
            },
            flexContainer: {
              // tip: make icon on the right side, see: https://github.com/OfficeDev/office-ui-fabric-react/issues/6368
              flexDirection: 'row-reverse'
            }
          }}
        />
      </Card.Item>
    </Card>
  )
}

export default IntroduceCard
