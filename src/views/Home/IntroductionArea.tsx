import React from 'react'
import {
  Text, Stack, PrimaryButton,
  mergeStyleSets, mergeStyles
} from 'office-ui-fabric-react'
import { introduction1, introduction2, introduction3 } from '~data/introductions'
import IntroduceCard from '~component/IntroduceCard'
import { Link } from 'react-router-dom'

const introductions = [introduction1, introduction2, introduction3]

export interface IntroductionAreaProps {
  className?: string
}

const classNames = mergeStyleSets({
  root: {
    width: '100%',
    padding: '165px 0rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  banner: {
    background: 'no-repeat center center',
    backgroundColor: 'black',
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover',
    backgroundImage: 'url(/assets/images/background/bg2.png)',
    selectors: {
      '@media(min-width: 1024px)': {
        backgroundImage: 'url(/assets/images/background/bg2@2x.png)'
      },
      '@media(max-width: 1024px)': {
        flexDirection: 'column'
      }
    }
  },
  introductionTitle: {
    fontSize: '3.16rem',
    fontWeight: '400',
    selectors: {
      '@media(max-width: 1024px)': {
        fontSize: '3rem'
      }
    }
  },
  introductionTextBlock: {
    width: '421px',
    selectors: {
      '@media(max-width: 1024px)': {
        width: 'auto'
      }
    }
  },
  introductionText: {
    fontSize: '1.67rem',
    color: '#B3B3B3',
    fontWeight: '400',
    selectors: {
      '@media(max-width: 1024px)': {
        fontSize: '1.5rem'
      }
    }
  }
})

const IntroductionArea: React.FC<IntroductionAreaProps> = ({ className }) => {
  return (
    <div className={mergeStyles(classNames.root, className)}>
      <Stack
        className={mergeStyles(classNames.banner, 'cdot-stack', 'cdot-introduction-stack')}
        horizontal
        wrap={true}
        verticalAlign='center'
        horizontalAlign='space-between'
      >
        <Stack.Item>
          <Stack
            wrap={true}
            tokens={{
              childrenGap: '1rem'
            }}
          >
            <Stack.Item>
              <Text className={classNames.introductionTitle}>
                A closer look at cdot
              </Text>
            </Stack.Item>
            <Stack.Item className={classNames.introductionTextBlock}>
              <Text className={classNames.introductionText}>
                Cdot addresses key barriers facing blockchain
                innovation: Trustless Interoperation, Secure Transaction,
                Sustainable Mechanism.
              </Text>
            </Stack.Item>
            <Stack.Item>
              <Link to='/contact'>
                <PrimaryButton styles={{
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
                }}>
                Learn More
                </PrimaryButton>
              </Link>
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Stack
            styles={{
              root: {
                width: 552,
                selectors: {
                  '@media(max-width: 1024px)': {
                    width: '100%',
                    paddingRight: '0',
                    paddingTop: '1rem'
                  }
                }
              }
            }}
            tokens={{
              childrenGap: 25
            }}
          >
            {
              introductions.map(introduction => (
                <IntroduceCard key={introduction.title} {...introduction}/>
              ))
            }
          </Stack>
        </Stack.Item>
      </Stack>
    </div>
  )
}

export default IntroductionArea
