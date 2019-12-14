import React from 'react'
import { Stack, mergeStyleSets, mergeStyles, Text } from 'office-ui-fabric-react'
import { Card } from '@uifabric/react-cards'
import { Participant } from '~type/index'

interface Props {
  participants: Participant[]
}

const classNames = mergeStyleSets({
  root: {
    minHeight: '1275px'
  },
  title: {
    fontSize: '56px'
  },
  card: {},
  cardTitle: {},
  cardDescription: {
    background: 'linear-gradient(#BCBCBC, #525052)'
  }
})

const ParticipantsArea: React.FC<Props> = ({ participants }) => {
  return (
    <div className={classNames.root}>
      <Stack
        verticalAlign='center'
        horizontalAlign='center'
        tokens={{
          childrenGap: '5rem'
        }}
      >
        <Stack.Item>
          <Text className={classNames.title}>
            Participants
          </Text>
        </Stack.Item>
        <Stack.Item align='center'>
          <div className={'ms-Grid'} dir='ltr'>
            <div className='ms-Grid-row'>
              {participants.map(participant => (
                <div
                  key={participant.title}
                  className={mergeStyles('ms-Grid-col', 'ms-md4', 'ms-sm12', {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '4rem'
                  })}
                >
                  <Card
                    className={classNames.card}
                  >
                    <Card.Section>
                      {participant.icon()}
                      <Text
                        className={classNames.cardTitle}
                      >
                        {participant.title}
                      </Text>
                      <Text
                        className={mergeStyles('cdot-text-gradual-change', classNames.cardDescription)}
                      >
                        {participant.description}
                      </Text>
                    </Card.Section>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Stack.Item>
      </Stack>
    </div>
  )
}

export default ParticipantsArea
