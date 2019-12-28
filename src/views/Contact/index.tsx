import React, { useEffect, useState } from 'react'
import { Text, Fabric, Stack, mergeStyleSets, mergeStyles, Image } from 'office-ui-fabric-react'
import { CommandBar } from '~component/Header'

const classNames = mergeStyleSets({
  body: {
    height: '100%'
  },
  banner: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    left: '0',
    top: '0',
    opacity: '0.15',
    background: 'no-repeat center center',
    backgroundColor: 'black',
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover',
    backgroundImage: 'url(/assets/images/background/contact.png)',
    selectors: {
      '@media(min-width: 1024px)': {
        backgroundImage: 'url(/assets/images/background/contact@2x.png)'
      }
    }
  },
  font: {
    color: '#B3B3B3'
  },
  contactFont: {
    fontSize: '30px'
  },
  emailFont: {
    fontSize: '22.5px'
  }
})

const ContactPage: React.FC = () => {
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
    <Fabric className='cdot-page'>
      <CommandBar items={[
        { name: 'Github', url: 'https://github.com/cdot-network' },
        { name: 'Blog', url: '/contact' },
        { name: 'Stay in Touch', url: '/contact' }
      ]}/>
      <div className={classNames.banner}/>
      <Stack
        className={classNames.body}
        tokens={{
          childrenGap: 'auto'
        }}
        verticalAlign='center'
        horizontalAlign='center'
      >
        <Stack.Item>
          <Image src={width > 640 ? '/assets/images/title/comingsoon.png' : '/assets/title/comingsoon@2x.png'}/>
        </Stack.Item>
        <Stack.Item styles={{ root: { marginTop: '56px' } }}>
          <Text className={mergeStyles(classNames.font, classNames.contactFont)}>contact with the team</Text>
        </Stack.Item>
        <Stack.Item styles={{
          root: {
            marginTop: '33px',
            padding: '14px 22px 15px 22px',
            borderRadius: '4px',
            border: '2px solid rgba(179,179,179,1)'
          }
        }}>
          <Text className={mergeStyles(classNames.font, classNames.emailFont)}>hello@cdot.network</Text>
        </Stack.Item>
      </Stack>
    </Fabric>
  )
}

export default ContactPage
