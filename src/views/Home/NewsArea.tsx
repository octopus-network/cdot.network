import React from 'react'
import { News } from '~type'
import NewsCard from '~component/NewsCard'

export interface NewsAreaProps {
  news: News[]
}

const NewsArea: React.FC<NewsAreaProps> = ({ news }) => {
  return (
    <div className='cdot-news-area'>
      <div className='cdot-news-area--inner'>
        <div className='cdot-news-area--title'>
          Latest News
        </div>
        <div
          className='cdot-news-area--content'
          style={{
            marginTop: 72
          }}
        >
          {news.map(({ title, description }) => (
            <NewsCard key={title} title={title} description={description}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsArea
