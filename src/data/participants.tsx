import React from 'react'
import ParticipantCircle from '~component/ParticipantCilcle'
import { mergeStyleSets, Stack } from 'office-ui-fabric-react'
import { Participant } from '~type/index'

const classNames = mergeStyleSets({
  root: {
    height: '1275px'
  },
  title: {
    fontSize: '56px'
  },
  ledgers: {
    borderRadius: '4px'
  }
})

export const participant1: Participant = {
  title: 'Ledgers',
  description: 'Ledgers deposit CDOT into reserve account  voluntarily is to provide deposit insurance for  incoming inter-ledger transactions.',
  icon: () => {
    return (
      <ParticipantCircle
        style={{
          backgroundColor: '#282E2E'
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 15px)',
          gridTemplateRows: 'repeat(3, 15px)'
        }}>
          <div
            className={classNames.ledgers}
            style={{
              backgroundColor: '#4AE7B3',
              gridRow: '1',
              gridColumn: '1 / 3',
              width: '28px',
              height: '28px'
            }}/>
          <div
            className={classNames.ledgers}
            style={{
              backgroundColor: '#35A985',
              gridRow: '1',
              width: '14px',
              height: '28px'
            }}/>
          <div
            className={classNames.ledgers}
            style={{
              backgroundColor: '#2D9071',
              gridRow: '3',
              height: '12px',
              width: '45px'
            }}/>
        </div>
      </ParticipantCircle>
    )
  }
}

export const participant2: Participant = {
  title: 'Validators',
  description: 'Ledgers deposit CDOT into reserve account  voluntarily is to provide deposit insurance for  incoming inter-ledger transactions.',
  icon: () => {
    return (
      <ParticipantCircle
        style={{
          backgroundColor: '#342C21'
        }}
      >
        <div>

        </div>
      </ParticipantCircle>
    )
  }
}

export const participant3: Participant = {
  title: 'Relayers',
  description: 'Ledgers deposit CDOT into reserve account  voluntarily is to provide deposit insurance for  incoming inter-ledger transactions.',
  icon: () => {
    return (
      <ParticipantCircle
        style={{
          backgroundColor: '#2F1B1F'
        }}
      >
      </ParticipantCircle>
    )
  }
}

export const participant4: Participant = {
  title: 'Fishermen',
  description: 'Ledgers deposit CDOT into reserve account  voluntarily is to provide deposit insurance for  incoming inter-ledger transactions.',
  icon: () => {
    return (
      <ParticipantCircle
        style={{
          backgroundColor: '#232536'
        }}
      >
      </ParticipantCircle>
    )
  }
}

export const participant5: Participant = {
  title: 'Users',
  description: 'Ledgers deposit CDOT into reserve account  voluntarily is to provide deposit insurance for  incoming inter-ledger transactions.',
  icon: () => {
    return (
      <ParticipantCircle
        style={{
          backgroundColor: '#222737'
        }}
      >
      </ParticipantCircle>
    )
  }
}
