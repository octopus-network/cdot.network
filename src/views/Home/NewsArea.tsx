import React, { useEffect, useState } from 'react'
import { News } from '~type/index'
import { Stack, Text, mergeStyleSets, mergeStyles, DefaultButton } from 'office-ui-fabric-react'
import { Card } from '@uifabric/react-cards'
import { Link } from 'react-router-dom'

export interface NewsAreaProps {
  news: News[]
}

const classNames = mergeStyleSets({
  root: {
    minHeight: '1009px',
    selectors: {
      '@media(max-width: 1024px)': {
        height: 'auto'
      }
    }
  },
  banner: {
    background: 'no-repeat center center',
    backgroundColor: 'black',
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover',
    backgroundImage: 'url(/assets/images/background/bg5.png)',
    selectors: {
      '@media(min-width: 1024px)': {
        backgroundImage: 'url(/assets/images/background/bg5@2x.png)'
      }
    }
  },
  newsTitle: {
    fontSize: '50px',
    fontWeight: '400',
    selectors: {
      '@media(max-width: 1024px)': {
        fontSize: '30px'
      }
    }
  },
  card: {
    width: '298px',
    minWidth: '298px',
    height: '318px',
    minHeight: '318px',
    backgroundColor: '#000',
    selectors: {
      '@media(max-width: 1024px)': {
        width: '100%',
        minWidth: '100%'
      },
      '@media(max-width: 1920px)': {
        width: '398px',
        height: '424px'
      },
      ':hover': {
        backgroundColor: '#E0E0E0',
        transition: 'ease-in-out 0.5s',
        selectors: {
          ':hover span': {
            color: '#000'
          },
          ':hover .cdot-hover-description': {
            color: '#666'
          }
        }
      }
    }
  },
  cardTitle: {
    height: '103px',
    fontSize: '21px',
    fontWeight: '400',
    selectors: {
      '@media(max-width: 1024px)': {
        fontSize: '22px'
      }
    }
  },
  cardDescription: {
    height: '89px',
    color: '#666',
    fontSize: '15px',
    fontWeight: '400',
    selectors: {
      '@media(max-width: 1024px)': {
        fontSize: '18px'
      }
    }
  }
})

const NewsArea: React.FC<NewsAreaProps> = ({ news }) => {
  const [width, setWidth] = useState(window.screen.width)
  useEffect(() => {
    const onResize = () => {
      setWidth(window.screen.width)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
  return (
    <div className={mergeStyles(classNames.root, classNames.banner)}>
      <Stack tokens={{
        childrenGap: '5rem'
      }}>
        <Stack.Item align='center'>
          <Text className={classNames.newsTitle}>
            Latest News
          </Text>
        </Stack.Item>
        <Stack.Item styles={{ root: { width: '100%' } }} align='center'>
          <Stack
            tokens={{
              childrenGap: width > 1024 ? 44 : 10
            }}
            wrap
            horizontalAlign='center'
            verticalAlign='center'
            horizontal={width > 1024}
          >
            {news.map(({ title, description }) => (
              <Card
                className={classNames.card}
                key={title}
              >
                <Card.Section
                  tokens={{
                    childrenGap: width > 1024 ? '3rem' : 10
                  }}
                  styles={{
                    root: {
                      paddingTop: '45px',
                      paddingLeft: '20px',
                      paddingRight: '20px'
                    }
                  }}
                >
                  <Text className={classNames.cardTitle}>{title}</Text>
                  <Text className={mergeStyles('cdot-hover-description', classNames.cardDescription)}>{description}</Text>
                </Card.Section>
                <Card.Section>
                  <Link to='/contact'>
                    <DefaultButton
                      styles={{
                        root: {
                          backgroundColor: 'transparent',
                          border: 'none',
                          width: '150px'
                        },
                        rootHovered: {
                          backgroundColor: 'transparent'
                        },
                        label: {
                          width: '103px',
                          fontSize: '20px',
                          fontWeight: '400',
                          color: '#fff'
                        }
                      }}
                    >
                      Learn more
                    </DefaultButton>
                  </Link>
                </Card.Section>
              </Card>
            ))}
          </Stack>
        </Stack.Item>
      </Stack>
    </div>
  )
}

export default NewsArea
