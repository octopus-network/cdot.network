import React from 'react'
import ParticipantCircle from '~component/ParticipantCilcle'
import { Participant } from '~type/index'

import '~style/participants.scss'

export const participant1: Participant = {
  title: 'Ledgers',
  description: 'Ledgers of any type such as Appchains, decentralised blockchains and centralised platforms join the Cdot Network to acquire interoperability.',
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
            style={{
              backgroundColor: '#4AE7B3',
              borderRadius: '4px',
              gridRow: '1',
              gridColumn: '1 / 3',
              width: '28px',
              height: '28px'
            }}/>
          <div
            style={{
              backgroundColor: '#35A985',
              borderRadius: '4px',
              gridRow: '1',
              width: '14px',
              height: '28px'
            }}/>
          <div
            style={{
              backgroundColor: '#2D9071',
              borderRadius: '4px',
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
  description: 'A numerous of validator nodes compose the Cdot Hub. Validators secure the hub, by validating transactions and proposing, verifying, finalizing blocks, and get paid via block rewards and transaction fees.',
  icon: () => {
    return (
      <ParticipantCircle
        style={{
          backgroundColor: '#342C21'
        }}
      >
        <div>
          <div style={{
            backgroundColor: '#F9D63F',
            height: '20px',
            width: '20px',
            borderRadius: '5px',
            transform: 'rotate(-45deg)'
          }}>
            <div style={{
              backgroundColor: '#F9D63F',
              position: 'absolute',
              left: '-12px',
              height: '21px',
              width: '10px',
              borderRadius: '10px'
            }}/>
            <div style={{
              backgroundColor: '#F9D63F',
              position: 'absolute',
              left: '22px',
              height: '21px',
              width: '10px',
              borderRadius: '10px'
            }}/>
            <div style={{
              backgroundColor: '#F9D63F',
              position: 'absolute',
              left: '6px',
              width: '10px',
              height: '43px',
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px'
            }}/>
          </div>
          <div style={{
            backgroundColor: '#F9D63F',
            position: 'relative',
            borderRadius: '10px',
            height: '7px',
            width: '28px',
            left: '-10px',
            bottom: '-18px'
          }}/>
        </div>
      </ParticipantCircle>
    )
  }
}

export const participant3: Participant = {
  title: 'Relayers',
  description: 'Relayers are off chain processes usually deployed by ledgers. They are responsible for root-of-trust synchronization and transaction forwarding between ledgers and the hub.',
  icon: () => {
    return (
      <ParticipantCircle
        style={{
          backgroundColor: '#2F1B1F'
        }}
      >
        <div>
          <div className='cdot-icon-relayers' style={{
            width: '25px',
            height: '25px'
          }}>
            <div style={{
              position: 'absolute',
              left: '-10px',
              top: '-10px',
              width: '20px',
              height: '20px',
              borderRadius: '5px',
              backgroundColor: '#EC5758'
            }}/>
            <div style={{
              position: 'absolute',
              right: '-10px',
              bottom: '-10px',
              width: '20px',
              height: '20px',
              borderRadius: '5px',
              backgroundColor: '#EC5758'
            }}/>
          </div>
        </div>
      </ParticipantCircle>
    )
  }
}

export const participant4: Participant = {
  title: 'Fishermen',
  description: 'Fishermen are processes to earn rewards by submitting fraud proofs to hub and ledgers when Byzantine faults occurred. Their jobs make sure Byzantine faults could be detected in time to mitigate the potential loss.',
  icon: () => {
    return (
      <ParticipantCircle
        style={{
          backgroundColor: '#232536'
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 26px)',
          gridTemplateRows: 'repeat(2, 26px)',
          gridRowGap: '3px',
          gridColumnGap: '3px'
        }}>
          <div style={{
            backgroundColor: '#409EFF',
            width: '26px',
            height: '26px',
            borderRadius: '5px'
          }}/>
          <div style={{
            backgroundColor: '#0071C7',
            width: '26px',
            height: '26px',
            borderRadius: '5px'
          }}/>
          <div style={{
            backgroundColor: '#024B86',
            width: '26px',
            height: '26px',
            borderRadius: '5px'
          }}/>
          <svg width='26px' height='26px'>
            <polygon
              strokeLinejoin='round' stroke='#459EFF'
              strokeWidth='10'
              fill='#459EFF'
              points='5,5 15,5 5,15'
            />
            <polygon
              style={{
                rotate: '45deg'
              }}
              points='7,5 5,7 18,20 20,18'
              strokeLinejoin='round'
              stroke='#459EFF'
              strokeWidth='7'
              fill='#459EFF'/>
          </svg>
        </div>
      </ParticipantCircle>
    )
  }
}

export const participant5: Participant = {
  title: 'Users',
  description: 'Users pay CDOT as transaction fee to make inter-ledger transactions. CDOT stakeholders may share transaction fee revenues with validators by delegating their CDOT tokens, meanwhile, who still hold voting power to participate in the on-chain governance.',
  icon: () => {
    return (
      <ParticipantCircle
        style={{
          backgroundColor: '#222737'
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: '#C754FF',
            height: '23px',
            borderRadius: '50px',
            width: '23px'
          }}/>
          <div style={{
            backgroundColor: '#C754FF',
            marginTop: '4px',
            borderRadius: '10px',
            width: '40px',
            height: '20px'
          }}/>
        </div>
      </ParticipantCircle>
    )
  }
}
