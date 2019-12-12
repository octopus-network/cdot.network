import React from 'react'
import { mergeStyleSets, mergeStyles, Stack, Text } from 'office-ui-fabric-react'

export interface HeaderProps {
  items: {
    name: string
    url?: string
  }[]
}

const classNames = mergeStyleSets({
  banner: {
    display: 'flex',
    height: '900px',
    background: 'no-repeat center center',
    backgroundColor: 'black',
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  bannerImage: {
    backgroundImage: 'url(/assets/images/banner_img_bg.png)',
    selectors: {
      '@media(min-width: 1024px)': {
        backgroundImage: 'url(/assets/images/banner_img_bg@2x.png)'
      }
    }
  },
  commandBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'transparent',
    color: 'white'
  },
  commandBarTitle: {
    marginLeft: '5rem',
    fontSize: '30px',
    color: '#fff'
  },
  commandBarItems: {
    marginRight: '5rem',
    fontSize: '24px'
  },
  commandBarItem: {
    color: '#DEDEDE',
    textDecoration: 'none',
    fontWeight: '400'
  },
  sayingText: {
    fontWeight: 'lighter'
  },
  companyText: {
    fontWeight: 'bolder'
  }
})

const CommandBar: React.FC<Pick<HeaderProps, 'items'>> = ({ items }) => {
  return (
    <div className={classNames.commandBar}>
      <div className={classNames.commandBarTitle}>
        <span>cdot.network</span>
      </div>
      <div className={classNames.commandBarItems}>
        {items.map((item, index) => (
          // todo: use Link on 'react-router-dom'
          <a className={classNames.commandBarItem} style={{
            paddingLeft: index ? '5rem' : 0
          }} key={item.name} href={item.url || '#'}>
            {item.name}
          </a>))}
      </div>
    </div>
  )
}

const Header: React.FC<HeaderProps> = ({ items }) => {
  return (
    <div className={mergeStyles(classNames.bannerImage, classNames.banner)}>
      <CommandBar items={items}/>
      <Stack tokens={{
        padding: '0 5rem'
      }}>
        <Stack.Item>
          <Text
            variant='mega'
            className={classNames.companyText}
          >
            Cdot.
          </Text>
        </Stack.Item>
        <Stack.Item>
          <Text
            variant='mega'
            className={classNames.sayingText}
          >
        A secured Hub to serve heterogeneous ledgers for assert transfer
          </Text>
        </Stack.Item>
      </Stack>
    </div>
  )
}

export default Header
