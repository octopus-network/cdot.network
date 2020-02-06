import React from 'react'
import { Card } from '@uifabric/react-cards'
import { Participant } from '~type'
import './index.scss'

export type ParticipantCardProps = Participant

const ParticipantCard: React.FC<ParticipantCardProps> = ({ icon, title, description }) => {
  return (
    <Card className='cdot-participant-card'>
      <Card.Section>
        {icon()}
        <div className='cdot-participant-card--title'>
          {title}
        </div>
        <div className='cdot-participant-card--description cdot-text-gradual-change'>
          {description}
        </div>
      </Card.Section>
    </Card>
  )
}

export default ParticipantCard
