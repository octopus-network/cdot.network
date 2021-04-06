import React from 'react'
import {
  Text, PrimaryButton,
  CommandBar as FabricCommandBar, Image
} from 'office-ui-fabric-react'
import 'office-ui-fabric-react/dist/sass/Fabric.scss'
import { Link } from 'react-router-dom'

import './index.scss'

export interface HeaderProps {
  items: {
    name: string
    url?: string
  }[]
}

export const CommandBar: React.FC<Pick<HeaderProps, 'items'>> = ({
  items
}) => (
  <div className='cdot-command-bar'>
    <div className='cdot-command-bar--inner'>
      <div className='cdot-command-bar--left'>
        <Link to='/'>
          <Image
            width={132}
            height={16}
            src={require('~asset/images/title/cdot.network.svg')}
          />
        </Link>
      </div>
      <div className='cdot-command-bar--right ms-hiddenMdDown'>
        {items.map((item) => (
          // todo: use Link on 'react-router-dom'
          <a className='cdot-command-bar--item' key={item.name} href={item.url || '#'}>
            {item.name}
          </a>))}
      </div>
      <FabricCommandBar
        className='ms-hiddenLgUp'
        styles={{
          root: {
            backgroundColor: 'transparent',
            padding: 0
          }
        }}
        items={[]}
        overflowItems={items.map(item => ({ key: item.name, text: item.name }))}/>
    </div>
  </div>
)

const Header: React.FC<HeaderProps> = ({
  ...props
}) => (
  <div className='cdot-header-container'>
    <CommandBar {...props}/>
    <div className='cdot-header'>
      <div className='cdot-header--inner'>
        <Text
          className='cdot-header--title'
        >
          We have rebranded to octopus network
        </Text>
        <PrimaryButton
          href='https://oct.network/'
          styles={{
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
              fontWeight: '400',
              fontSize: '1rem'
            }
          }}
        >
          Learn more about octopus
        </PrimaryButton>
      </div>
    </div>
  </div>
)

export default Header
