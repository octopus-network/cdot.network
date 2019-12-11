import React from 'react'
import { Stack, Image, Text, IStackItemTokens } from 'office-ui-fabric-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faWeixin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const childStackTokens: IStackItemTokens = {
  margin: '7rem 10rem 3rem 10rem'
}

const FootBar: React.FC = () => {
  return (
    <Stack
      styles={{
        root: {
          backgroundColor: '#3C144A'
        }
      }}
    >
      <Stack.Item tokens={childStackTokens}>
        <Stack
          horizontalAlign='space-between'
          styles={{
            root: {
              color: '#D0C3DF'
            }
          }}
          horizontal
        >
          <Image src='/assets/images/footer_img_logo_default.png'/>
          <Stack
            styles={{
              root: {
                float: 'right'
              }
            }}
            tokens={{
              childrenGap: '4rem'
            }}
          >
            <Stack.Item>
              <Text variant='superLarge'>Follow us</Text>
            </Stack.Item>
            <Stack.Item>
              <Stack
                tokens={{
                  childrenGap: '3rem'
                }}
                wrap
                horizontal
                verticalAlign='center'
              >
                <Stack.Item>
                  <FontAwesomeIcon size='3x' icon={faTwitter}/>
                </Stack.Item>
                <Stack.Item>
                  <FontAwesomeIcon size='3x' icon={faGithub}/>
                </Stack.Item>
                <Stack.Item>
                  <FontAwesomeIcon size='3x' icon={faWeixin}/>
                </Stack.Item>
                <Stack.Item>
                  <FontAwesomeIcon size='3x' icon={faEnvelope}/>
                </Stack.Item>
              </Stack>
            </Stack.Item>
          </Stack>
        </Stack>
      </Stack.Item>
      <Stack.Item
        styles={{
          root: {
            color: '#9D92A9',
            padding: '3rem 0 0 0'
          }
        }}
        tokens={childStackTokens}
      >
        <Text variant='xxLarge'>
          Cdot Network Foundation
        </Text>
      </Stack.Item>
    </Stack>
  )
}

export default FootBar
