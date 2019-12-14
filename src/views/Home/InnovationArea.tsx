import React from 'react'
import { mergeStyleSets, mergeStyles, Stack, Text } from 'office-ui-fabric-react'

const classNames = mergeStyleSets({
  root: {
    minHeight: '1009px'
  },
  banner: {
    display: 'flex',
    justifyContent: 'center',
    height: '657px',
    width: '100%',
    background: 'no-repeat center center',
    backgroundColor: 'black',
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover',
    backgroundImage: 'url(/assets/images/background/bg4.png)',
    selectors: {
      '@media(min-width: 1024px)': {
        backgroundImage: 'url(/assets/images/background/bg4@2x.png)'
      }
    }
  },
  title: {
    fontSize: '50px',
    marginBottom: '2rem',
    selectors: {
      '@media(max-width: 1024px)': {
        marginBottom: '1rem',
        padding: '0 1rem',
        fontSize: '35px'
      }
    }
  },
  introduction: {
    maxWidth: '716px',
    fontSize: '26px',
    color: '#BCBCBC',
    selectors: {
      '@media(max-width: 1024px)': {
        padding: '0 1rem',
        fontSize: '20px'
      }
    }
  }
})

const InnovationArea = () => {
  return (
    <div className={classNames.root}>
      <Stack
        horizontalAlign='center'
        verticalAlign='center'
      >
        <Stack.Item>
          <Text block className={classNames.title}>A Rendezvous for Web3 Innovation</Text>
        </Stack.Item>
        <Stack.Item className={classNames.banner}>
          <Text block className={classNames.introduction}>
            Cdot is aiming to be a core component infrastructure for Web3 that empowers next generation of blockchain
            innovation
          </Text>
        </Stack.Item>
      </Stack>
    </div>
  )
}

export default InnovationArea
