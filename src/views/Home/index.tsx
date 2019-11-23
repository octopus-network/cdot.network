import React, { Fragment } from 'react'
import Header from '~component/Header'

const HomePage: React.FC = () => {
  // fixme: unfinished page
  return (
    <Fragment>
      <Header items={[
        { name: 'Github', url: 'https://github.com/cdot-network' },
        { name: 'WhitePaper', url: '/contact' },
        { name: 'Follow us', url: '/contact' }
      ]}/>
    </Fragment>
  )
}

export default HomePage
