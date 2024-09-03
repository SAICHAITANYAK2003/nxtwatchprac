import {Component} from 'react'
import {ImFire} from 'react-icons/im'
import Cookies from 'js-cookie'
import {
  TrendingMainContainer,
  TrendingContent,
  TrendingHeader,
  IconContainer,
  TrendingTitle,
  TrendingVideoslist,
} from './styledComponents'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'

class Trending extends Component {
  state = {
    trendingList: [],
  }
  componentDidMount() {
    this.getTrendingVideos()
  }
  getTrendingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const trendingUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingUrl, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))

      this.setState({
        trendingList: updatedData,
      })
    }
  }
  renderTrendingVideos = () => {
    const {trendingList} = this.state

    return (
      <TrendingContent>
        <TrendingHeader>
          <IconContainer>
            <ImFire size="30" color="red" />
          </IconContainer>
          <TrendingTitle>Trending</TrendingTitle>
        </TrendingHeader>
        <TrendingVideoslist>
          {trendingList.map(eachItem => (
            <VideoItem videoDetails={eachItem} key={eachItem.id} />
          ))}
        </TrendingVideoslist>
      </TrendingContent>
    )
  }
  render() {
    return (
      <TrendingMainContainer>
        <SideBar />
        {this.renderTrendingVideos()}
      </TrendingMainContainer>
    )
  }
}

export default Trending
