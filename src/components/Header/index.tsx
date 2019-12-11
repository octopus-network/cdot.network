import React from 'react'
import { mergeStyleSets, Stack, Text } from 'office-ui-fabric-react'

export interface HeaderProps {
  items: {
    name: string
    url?: string
  }[]
}

const classNames = mergeStyleSets({
  header: {
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
  commandBar: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    top: 0,
    left: 0,
    width: '100%',
    height: '100px',
    background: 'transparent',
    color: 'white'
  },
  commandBarItems: {
    float: 'right',
    marginRight: '1rem',
    paddingRight: '3rem',
    left: '10px',
    fontSize: '24px',
    display: 'flex',
    flexDirection: 'row'
  },
  commandBarItem: {
    textDecoration: 'none',
    fontWeight: 'bolder'
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
      <div className={classNames.commandBarItems}>
        {items.map((item, index) => (
          // todo: use Link on 'react-router-dom'
          <a className={classNames.commandBarItem} style={{
            paddingLeft: index ? '2rem' : 0,
            paddingRight: index === (items.length - 1) ? '2rem' : 0 // 最后一个 element 给 切换语言按钮 padding
          }} key={item.name} href={item.url || '#'}>
            {item.name}
          </a>))}
      </div>
    </div>
  )
}

const Header: React.FC<HeaderProps> = ({ items }) => {
  return (
    <div className={classNames.header}>
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
