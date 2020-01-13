import React, { useEffect, useState } from 'react'
import { Stack, Text, Image, Separator, mergeStyleSets, mergeStyles } from 'office-ui-fabric-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faWeixin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const classNames = mergeStyleSets({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: '150px'
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
    marginLeft: '101px',
    paddingTop: '90px',
    selectors: {
      '@media(max-width: 1024px)': {
        marginLeft: '1rem'
      }
    }
  },
  right: {
    marginRight: '146px',
    paddingTop: '89px',
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
  return (
    <div
      className={mergeStyles(classNames.root, classNames.banner)}
    >
      <Stack.Item>
        <Stack
          className={classNames.left}
          tokens={{
            childrenGap: '17px'
          }}
          horizontal
          horizontalAlign='center'
          verticalAlign='center'
        >
          <Stack.Item>
            <Image width={109} height={38} src='/assets/images/title/cdot-gray.svg'/>
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
          tokens={{ childrenGap: '44px' }}
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
    </div>
  )
}

export default FootBar
