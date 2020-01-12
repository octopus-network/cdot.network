import React from 'react'
import {
  mergeStyleSets, mergeStyles, Stack, Text, PrimaryButton,
  CommandBar as FabricCommandBar, Image
} from 'office-ui-fabric-react'
import { Link } from 'react-router-dom'

export interface HeaderProps {
  className?: string
  items: {
    name: string
    url?: string
  }[]
}

const classNames = mergeStyleSets({
  nav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  banner: {
    marginTop: '50px',
    paddingTop: '169px',
    paddingBottom: '5rem',
    height: '100%',
    width: '100%',
    background: 'no-repeat center center',
    backgroundColor: 'black',
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover',
    backgroundImage: 'url(/assets/images/background/bg1.png)',
    selectors: {
      '@media(min-width: 1024px)': {
        backgroundImage: 'url(/assets/images/background/bg1@2x.png)'
      }
    }
  },
  commandBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
    width: '100%',
    height: '50px',
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
    color: '#fff',
    selectors: {
      '@media(max-width: 640px)': {
        marginLeft: '1rem'
      }
    }
  },
  commandBarItems: {
    display: 'flex',
    alignItems: 'stretch',
    height: '50px',
    marginRight: '8.5rem',
    fontSize: '24px'
  },
  commandBarItem: {
    color: '#DEDEDE',
    textDecoration: 'none',
    textAlign: 'center',
    lineHeight: '50px',
    fontWeight: '400',
    fontSize: '1rem',
    paddingLeft: '5rem',
    selectors: {
      '@media(max-width: 640px)': {
        display: 'none'
      },
      ':hover': {
        textDecoration: 'underline'
      },
      '::before': {

      }
    }
  },
  sayingText: {
    color: '#CACACA',
    fontWeight: 'lighter',
    fontSize: '4.75rem',
    selectors: {
      '@media(max-width: 640px)': {
        fontSize: '3.5rem'
      }
    }
  }
})

export const CommandBar: React.FC<Pick<HeaderProps, 'items'>> = ({ items }) => {
  return (
    <div className={classNames.commandBar}>
      <div className={classNames.commandBarTitle}>
        <Link to='/'>
          <Image width={132} height={16} src='/assets/images/title/cdot.network.svg'/>
        </Link>
      </div>
      <div className={classNames.commandBarItems}>
        {items.map((item) => (
          // todo: use Link on 'react-router-dom'
          <a className={classNames.commandBarItem} key={item.name} href={item.url || '#'}>
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
  )
}

const Header: React.FC<HeaderProps> = ({ className = '', ...props }) => {
  return (
    <div className={mergeStyles(classNames.nav, className)}>
      <CommandBar {...props}/>
      <div className={classNames.banner}>
        <Stack
          className={mergeStyles('cdot-stack', 'cdot-title')}
          tokens={{
            childrenGap: '40px'
          }}
        >
          <Stack.Item>
            <Image width={166} height={54} src='/assets/images/title/cdot.svg'/>
          </Stack.Item>
          <Stack.Item>
            <Text
              className={classNames.sayingText}
            >
              A secured hub to serve heterogeneous ledgers for asset transfer
            </Text>
          </Stack.Item>
          <Stack.Item>
            <Link to='/contact'>
              <PrimaryButton
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
                Get started
              </PrimaryButton>
            </Link>
          </Stack.Item>
        </Stack>
      </div>
    </div>
  )
}

export default Header
