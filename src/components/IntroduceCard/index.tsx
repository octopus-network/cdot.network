import React, { useMemo, useState } from 'react'
import { Text, mergeStyleSets, mergeStyles } from 'office-ui-fabric-react'
import { Introduction } from '~type'

import './index.scss'

export interface IntroduceCardProps extends Introduction {
  to?: string
}

const classNames = mergeStyleSets({
  icon: {
    padding: '33px 22px 32px 33px'
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: '400',
    color: '#fff',
    selectors: {
      '@media(max-width: 1024px)': {
        fontSize: '1.5rem'
      }
    }
  },
  introductionLabel: {
    width: '100%'
  },
  introduction: {
    fontSize: '1.25rem',
    color: '#BCBCBC',
    selectors: {
      '@media(max-width: 1024px)': {
        fontSize: '1rem'
      }
    }
  }
})

const IntroduceCard: React.FC<IntroduceCardProps> = ({ title, description, imgUrl }) => {
  return (
    <div className={mergeStyles('cdot-introduce-card', {
      selectors: {
        ':hover': {
          selectors: {
            '.cdot-introduce-card--icon': {
              backgroundImage: `url(${imgUrl.hover})`
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
        <Text className={classNames.introduction}>
          {title}
        </Text>
        <Text className={classNames.introduction} block>
          {description}
        </Text>
      </div>
    </div>
  )
}

export default IntroduceCard
