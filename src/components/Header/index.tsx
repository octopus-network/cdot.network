import React from 'react'
import { mergeStyleSets } from 'office-ui-fabric-react'

import './index.less'

export interface HeaderProps {
  items: {
    name: string
    url?: string
  }[]
}

const classNames = mergeStyleSets({
  header: {
    height: '900px',
    background: 'no-repeat center center',
    backgroundImage: 'url(/assets/images/banner_img_bg_default.png)',
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover'
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
    fontWeight: 'lighter',
    display: 'flex',
    flexDirection: 'row'
  },
  commandBarItem: {
    color: 'white',
    textDecoration: 'none'
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
        <span>EN</span>
      </div>
    </div>
  )
}

const Header: React.FC<HeaderProps> = ({ items }) => {
  return (
    <div className={classNames.header}>
      <CommandBar items={items}/>
    </div>
  )
}

export default Header
