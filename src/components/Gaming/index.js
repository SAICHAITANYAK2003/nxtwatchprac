import {Component} from 'react'

import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import {
  GamingMainContainer,
  GamingContent,
  GamingHeader,
  IconContainer,
  GamingTitle,
  GamingVideoslist,
} from './styledComponents'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'

class Gaming extends Component {
  state = {
    gamingList: [],
  }
  componentDidMount() {
    this.getGamingVideos()
  }
  getGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const gamingUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingUrl, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,

        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        gamingList: updatedData,
      })
    }
  }
  renderGamingVideos = () => {
    const {gamingList} = this.state

    return (
      <GamingContent>
        <GamingHeader>
          <IconContainer>
            <SiYoutubegaming size="30" color="red" />
          </IconContainer>
          <GamingTitle>Gaming</GamingTitle>
        </GamingHeader>
        <GamingVideoslist>
          {gamingList.map(eachItem => (
            <VideoItem videoDetails={eachItem} key={eachItem.id} />
          ))}
        </GamingVideoslist>
      </GamingContent>
    )
  }
  render() {
    return (
      <GamingMainContainer>
        <SideBar />
        {this.renderGamingVideos()}
      </GamingMainContainer>
    )
  }
}

export default Gaming
