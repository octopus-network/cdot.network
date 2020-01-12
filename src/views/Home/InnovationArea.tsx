import React from 'react'
import { mergeStyleSets, mergeStyles, Stack, Text } from 'office-ui-fabric-react'

export interface InnovationAreaProps {
  className?: string
}

const classNames = mergeStyleSets({
  root: {
    minHeight: '1009px'
  },
  mask: {
    width: '100%',
    height: '657px',
    background: 'linear-gradient(90deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)'
  },
  banner: {
    position: 'absolute',
    zIndex: -1,
    height: '657px',
    width: '100%',
    background: 'no-repeat center center',
    backgroundColor: 'black',
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover',
    backgroundImage: 'url(/assets/images/background/bg4.svg)'
  },
  title: {
    fontSize: '3.16rem',
    marginBottom: '30px',
    selectors: {
      '@media(max-width: 1024px)': {
        marginBottom: '1rem',
        padding: '0 1rem',
        fontSize: '35px'
      }
    }
  },
  introduction: {
    maxWidth: '537px',
    fontSize: '1.66rem',
    marginTop: '-17px',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#BCBCBC',
    selectors: {
      '@media(max-width: 1024px)': {
        padding: '0 1rem',
        fontSize: '1.4rem'
      }
    }
  }
})

const InnovationArea: React.FC<InnovationAreaProps> = ({ className }) => {
  return (
    <div className={mergeStyles(classNames.root, className)}>
      <Stack
        horizontalAlign='center'
        verticalAlign='center'
      >
        <Stack.Item>
          <Text block className={classNames.title}>A Rendezvous for Web3 Innovation</Text>
        </Stack.Item>
        <Stack.Item className={classNames.mask}>
          <div className={classNames.banner}/>
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
