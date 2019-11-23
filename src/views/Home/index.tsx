import React, { Fragment } from 'react'
import Header from '~component/Header'
import { Fabric, Stack, mergeStyleSets, PrimaryButton, Text } from 'office-ui-fabric-react'

const classNames = mergeStyleSets({
  learnMoreButton: {
    transform: 'translate(0, -50%)', // tip: 元素向上移动50%
    height: '5rem'
  }
})

const HomePage: React.FC = () => {
  // fixme: unfinished page
  return (
    <Fragment>
      <Header items={[
        { name: 'Github', url: 'https://github.com/cdot-network' },
        { name: 'WhitePaper', url: '/contact' },
        { name: 'Follow us', url: '/contact' }
      ]}/>
      <Fabric>
        <Stack>
          <Stack.Item align='center'>
            <PrimaryButton className={classNames.learnMoreButton}>
              <div>
                <Text variant='xLarge'>Cdot</Text>
                <br/>
                <Text variant='large'>Learn More</Text>
              </div>
            </PrimaryButton>
          </Stack.Item>
          <Stack.Item align='center'>
            <Text variant='xxLargePlus'>
              A General-Purpose Hub for Ledger Interoperation
            </Text>
          </Stack.Item>
        </Stack>
      </Fabric>
    </Fragment>
  )
}

export default HomePage
