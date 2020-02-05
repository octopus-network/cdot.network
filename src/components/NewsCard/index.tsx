import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'
import { News } from '~type'

export type NewsCardProps = Pick<News, 'title' | 'description'>

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description
}) => {
  return (
    <div className='cdot-news-card'>
      <div className='cdot-news-card--inner'>
        <div className='cdot-news-card--title'>{title}</div>
        <div
          className='cdot-news-card--description'
          style={{ marginTop: 25 }}
        >
          {description}
        </div>
        <Link className='cdot-news-card--link' to='/contact'>
          Learn more
        </Link>
      </div>
    </div>
  )
}
export default NewsCard
