import React, { CSSProperties } from 'react'
import { mergeStyleSets, mergeStyles } from 'office-ui-fabric-react'
import './index.scss'

interface Props {
  style?: CSSProperties
}

const classNames = mergeStyleSets({
  root: {
    display: 'flex',
    width: '88px',
    height: '88px',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const ParticipantCircle: React.FC<Props> = ({ style, children }) => {
  return (
    <div style={style} className={mergeStyles('cdot-participant-circle', classNames.root)}>
      {children}
    </div>
  )
}

export default ParticipantCircle
