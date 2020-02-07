import React from 'react'
import { mergeStyleSets, mergeStyles, PrimaryButton, Text } from 'office-ui-fabric-react'
import { Card } from '@uifabric/react-cards'
import { Participant } from '~type'
import { Link } from 'react-router-dom'
import ParticipantCard from '~component/ParticipantCard'

interface Props {
  participants: Participant[]
}

const ParticipantsArea: React.FC<Props> = ({ participants }) => {
  return (
    <div className='cdot-participant-area'>
      <div className='cdot-participants-area--inner'>
        <div className='cdot-participants-area--block'>
          <div className='cdot-participants-area--title'>
            Participants
          </div>
          <div
            className='cdot-participants-area--introduction'
            style={{ marginTop: 17 }}
          >
            Cdot is an open network composed of several types of participants.
            All participants take action in a strategy that maximizes their own interests,
            but together they present a decentralized circulation network for crypto assets.
          </div>
          <Link to='/contact' style={{ marginTop: 16 }}>
            <PrimaryButton
              styles={{
                root: {
                  height: '53px',
                  width: '183px',
                  transition: 'ease-in-out 0.2s'
                },
                rootHovered: {
                  backgroundColor: '#fff',
                  transition: 'ease-in-out 0.2s'
                },
                label: {
                  color: '#030303',
                  fontWeight: '400'
                }
              }}
            >
              Learn More
            </PrimaryButton>
          </Link>
        </div>
        <div
          className={'ms-Grid'}
          style={{
            marginTop: 70
          }}
          dir='ltr'
        >
          <div className='ms-Grid-row'>
            {participants.map(participant => (
              <div
                key={participant.title}
                className={mergeStyles('ms-Grid-col', 'ms-sm12', 'ms-lg6', 'ms-xl4', {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '4rem'
                })}
              >
                <ParticipantCard {...participant}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParticipantsArea
