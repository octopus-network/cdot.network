import React, { Fragment } from 'react'
import Header from '~component/Header'

const HomePage: React.FC = () => {
  // fixme: unfinished page
  return (
    <Fragment>
      <Header items={[
        { name: 'Github' },
        { name: 'WhitePaper' },
        { name: 'Follow us' }
      ]}/>
    </Fragment>
  )
}

export default HomePage
