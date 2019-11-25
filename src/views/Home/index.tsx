import React, { Fragment } from 'react'
import Header from '~component/Header'
import { Fabric, Stack, mergeStyleSets, PrimaryButton, Text, Image } from 'office-ui-fabric-react'
import IntroduceCard from '~component/IntroduceCard'
import NewsCard from '~component/NewsCard'
import FootBar from '~component/FootBar'
import { Article } from '~type/index'
import { article1, article2, article3, article4 } from '~data/articles'

const articles: Article[] = [article1, article2, article3, article4]

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
            <Text variant='superLarge'>
              A General-Purpose Hub for Ledger Interoperation
            </Text>
          </Stack.Item>
          <Stack.Item styles={{ root: { paddingBottom: '5rem' } }} align='center'>
            <Stack tokens={{
              childrenGap: '2rem'
            }} horizontal>
              <IntroduceCard
                title='Seamless Interoperation'
                introduction='Ledgers of any type may get involved effortlessly in this internet of value.'
                iconUrl='assets/images/content1_icon_left_default.png'
                to=''
              />
              <IntroduceCard
                title='Long-term Sustainability'
                introduction='A mechanism ensures all participants are distributed wealth fairly. '
                iconUrl='assets/images/content1_icon_center_default.png'
                to=''
              />
              <IntroduceCard
                title='Settlement Assurance'
                introduction='When risk becomes a measurable estimate, all transactions could be settled with confidence.'
                iconUrl='assets/images/content1_icon_right_default.png'
                to=''
              />
            </Stack>
          </Stack.Item>
        </Stack>
        <Stack
          styles={{
            root: {
              backgroundColor: '#271245'
            }
          }}
        >
          <Stack.Item styles={{
            root: {
              paddingTop: '2rem'
            }
          }} align='center'>
            <Text styles={{ root: { color: '#D5D5D5' } }} variant='xxLargePlus'>
              How You Can Get Involved
            </Text>
          </Stack.Item>
          <Stack.Item
            styles={{
              root: {
                paddingTop: '3rem',
                paddingBottom: '5rem'
              }
            }}
            align='center'
          >
            <Image src='/assets/images/content3_icon_bg_default.png'/>
          </Stack.Item>
        </Stack>
        <Stack>
          <Stack.Item
            styles={{
              root: {
                paddingTop: '3rem',
                paddingBottom: '5rem'
              }
            }}
            align='center'
          >
            <Text variant='xxLargePlus'>Latest News</Text>
          </Stack.Item>
          <Stack.Item
            styles={{
              root: {
                width: '100%'
              }
            }}
          >
            <Stack
              tokens={{
                childrenGap: '2rem',
                padding: '0 0 5rem 0'
              }}
              styles={{
                root: {
                  overflowX: 'auto'
                }
              }}
              horizontalAlign='center'
              verticalAlign='center'
              horizontal
            >
              <Stack.Item>
                <NewsCard
                  titleImgUrl='assets/images/content3_img_fill1_default.png'
                  title={'A thorough interpretation on the architecture of Polkadot.'}
                  description={'In this article, Louis Liu shared his insights on the future trend of Appchains.'}
                  author={'Louis Liu'}
                  date={'2019-04-30 11:34'}
                  to=''/>
              </Stack.Item>
              <Stack.Item>
                <NewsCard
                  titleImgUrl='assets/images/content3_img_fill2_default.png'
                  title={'Insight: ‘The governance of applications’, that’s the Achilles\' Heel of Dapp.'}
                  description={'Talking about blockchain, the most noticeable merits it brings about is cutting down the transaction costs as it achieves trust minimal.'}
                  author={'Louis Liu'}
                  date={'2019-04-30 11:34'}
                  to=''/>
              </Stack.Item>
              <Stack.Item>
                <NewsCard
                  titleImgUrl='assets/images/content3_img_fill3_default.png'
                  title={'A brief history about Web3 – to all the genuine blockchain startups.'}
                  description={'From open society to cypher punk, from Bitcoin to Ethereum then to Polkadot, the development of Web3 has always on the track of its vision. What should startups in blockchain industry be looking for?'}
                  author={'Louis Liu'}
                  date={'2019-04-30 11:34'}
                  to=''/>
              </Stack.Item>
              <Stack.Item>
                <NewsCard
                  titleImgUrl='assets/images/content3_img_fill4_default.png'
                  title={'The key to protocol governance: achieving network effect by making good use of the power of evolution.'}
                  description={'Self-mockery has always been popular among Chinese retail investors. However, these retail investors are the ones that blockchain projects most care about.'}
                  author={'Louis Liu'}
                  date={'2019-04-30 11:34'}
                  to=''/>
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
        <FootBar/>
      </Fabric>
    </Fragment>
  )
}

export default HomePage
