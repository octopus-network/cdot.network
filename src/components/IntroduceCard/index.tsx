import React, { useMemo, useState } from 'react'
import { Text, mergeStyleSets, mergeStyles } from 'office-ui-fabric-react'
import { Introduction } from '~type'

import './index.scss'

export interface IntroduceCardProps extends Introduction {
  to?: string
}

const IntroduceCard: React.FC<IntroduceCardProps> = ({ title, description, imgUrl }) => {
  return (
    <div className={mergeStyles('cdot-introduce-card', {
      color: 'white',
      selectors: {
        ':hover': {
          color: 'black',
          selectors: {
            '.cdot-introduce-card--icon': {
              backgroundImage: `url(${imgUrl.hover})`
            },
            '.cdot-introduce-card--title': {
              color: '#000000'
            },
            '.cdot-introduce-card--introduction': {
              color: '#333333'
            }
          }
        }
      }
    })}
    >
      <div
        className={mergeStyles('cdot-introduce-card--icon', {
          backgroundImage: `url(${imgUrl.default})`
        })}
      >
      </div>
      <div className='cdot-introduce-card--content'>
        <Text className='cdot-introduce-card--title'>
          {title}
        </Text>
        <Text className='cdot-introduce-card--introduction' block>
          {description}
        </Text>
      </div>
    </div>
  )
}

export default IntroduceCard
