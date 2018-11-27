import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from 'react-emotion'
import colors from '../utils/colors'
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import SubHeader from '../components/SubHeader'
import FancyCard from '../components/FancyCard'
import FancyIntroCard from '../components/FancyIntroCard'
import DropdownCarousel from '../components/DropdownCarousel'
import { Doughnut } from 'react-chartjs-2'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
    kerckhoffArticle {
      headline
      author
      coverphoto
      content {
        type
        value
      }
    }
  }
`

const chartData = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
}

const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <DropdownCarousel
      intro={'STATISTICS'}
      introCaption={
        'A tiny blurb explaining the survey and what this panel is probably something explaining about how you can scroll/view the rest of this panel wheeeee'
      }
      sections={[
        {
          title: 'Preferred Streaming Platform',
          content: (
            <div>
              TEST TEST TEST 111 <Doughnut data={chartData} />
            </div>
          ),
          topColor: '#E7BEFA',
          bottomColor: '#8AACF7',
        },
        {
          title: 'Reason for Preferred Platform',
          content: (
            <div>
              TEST TEST TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST TEST
            </div>
          ),
          topColor: '#B3F2F6',
          bottomColor: '#5C9DE9',
        },
        {
          title: 'Favorite Genre to Stream',
          content: <div>TEST TEST TEST 333</div>,
          topColor: '#FBC6B6',
          bottomColor: '#F57DC5',
        },
        {
          title: 'Hours Per Week Using Service',
          content: <div>TEST TEST TEST 333</div>,
          topColor: '#DEFBD6',
          bottomColor: '#4FDACA',
        },
        {
          title: 'Streamed While at UCLA',
          content: <div>TEST TEST TEST 333</div>,
          topColor: '#D4DAF9',
          bottomColor: '#AA7BF8',
        },
        {
          title: 'Favorite Series to Stream',
          content: <div>TEST TEST TEST 333</div>,
          topColor: '#F9D6BC',
          bottomColor: '#F98078',
        },
      ]}
    />

    <CoverPhoto
      headline={data.kerckhoffArticle.headline}
      authors={data.kerckhoffArticle.author}
      imageURL={data.kerckhoffArticle.coverphoto}
      xPosition={XPosition.Right}
      yPosition={YPosition.Center}
      style={css`
        color: ${colors.blue};
      `}
    />
    <Article
      content={data.kerckhoffArticle.content}
      customTypeComponentMapping={{ subheading: SubHeader }}
    />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
