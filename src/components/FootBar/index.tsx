import React, { useEffect, useState } from 'react'
import { Stack, Text, Image, Separator, mergeStyleSets, mergeStyles } from 'office-ui-fabric-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faWeixin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const classNames = mergeStyleSets({
  root: {
    height: '200px'
  },
  banner: {
    background: 'no-repeat center center',
    backgroundColor: 'black',
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover',
    backgroundImage: 'url(/assets/images/background/footer.png)',
    selectors: {
      '@media(min-width: 1024px)': {
        backgroundImage: 'url(/assets/images/background/footer@2x.png)'
      }
    }
  },
  left: {
    marginLeft: '6rem',
    selectors: {
      '@media(max-width: 1024px)': {
        marginLeft: '1rem'
      }
    }
  },
  right: {
    marginRight: '6rem',
    selectors: {
      '@media(max-width: 1024px)': {
        marginRight: '1rem'
      }
    }
  },
  copyright: {
    color: '#DBDBDB',
    fontSize: '18px'
  }
})

const FootBar: React.FC = () => {
  const [width, setWidth] = useState(window.screen.width)
  useEffect(() => {
    const onResize = () => {
      setWidth(window.screen.width)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return (
    <Stack
      horizontal={width > 640}
      horizontalAlign={width > 640 ? 'space-between' : 'center'}
      verticalAlign='center'
      tokens={{
        childrenGap: width > 640 ? 0 : '2rem'
      }}
      className={mergeStyles(classNames.root, classNames.banner)}
    >
      <Stack.Item>
        <Stack
          className={classNames.left}
          tokens={{
            childrenGap: '1rem'
          }}
          horizontal
          horizontalAlign='center'
          verticalAlign='center'
        >
          <Stack.Item>
            <Image width={109} height={38} src='/assets/images/logo.png'/>
          </Stack.Item>
          <Stack.Item>
            <Separator styles={{
              root: {
                height: '36px'
              }
            }} vertical/>
          </Stack.Item>
          <Stack.Item>
            <Text className={classNames.copyright}>
              Copyright © 2019 cdot.network foundation. All rights reserved.
            </Text>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <Stack
          className={classNames.right}
          tokens={{ childrenGap: '3rem' }}
          horizontal
        >
          <Stack.Item>
            <FontAwesomeIcon color='rgb(136, 136, 136)' size='2x' icon={faTwitter}/>
          </Stack.Item>
          <Stack.Item>
            <FontAwesomeIcon color='rgb(136, 136, 136)' size='2x' icon={faGithub}/>
          </Stack.Item>
          <Stack.Item>
            <FontAwesomeIcon color='rgb(136, 136, 136)' size='2x' icon={faWeixin}/>
          </Stack.Item>
          <Stack.Item>
            <FontAwesomeIcon color='rgb(136, 136, 136)' size='2x' icon={faEnvelope}/>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  )
}

export default FootBar
