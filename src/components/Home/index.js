import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  HomeContainer,
  HomeContentContainer,
  InputBox,
  InputBoxContainer,
  SearchButton,
  VideosListContainer,
} from './styledComponents'
import {IoSearchSharp} from 'react-icons/io5'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
class Home extends Component {
  state = {
    searchInputValue: '',
    videosList: [],
  }
  componentDidMount() {
    this.getVideosData()
  }
  onChangeSearchInput = event => {
    this.setState({searchInputValue: event.target.value})
  }
  getVideosData = async () => {
    const {searchInputValue} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInputValue}`
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()

      const updatedMoviesList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        videosList: updatedMoviesList,
      })
    }
  }
  onClickSearchIcon = () => {
    this.getVideosData()
  }

  render() {
    const {searchInputValue, videosList} = this.state

    return (
      <>
        <HomeContainer>
          <SideBar />
          <HomeContentContainer>
            <InputBoxContainer>
              <InputBox
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                value={searchInputValue}
              />
              <SearchButton type="button" onClick={this.onClickSearchIcon}>
                <IoSearchSharp size="20" />
              </SearchButton>
            </InputBoxContainer>
            <VideosListContainer>
              {videosList.map(eachVideoItem => (
                <VideoItem
                  videoDetails={eachVideoItem}
                  key={eachVideoItem.id}
                />
              ))}
            </VideosListContainer>
          </HomeContentContainer>
        </HomeContainer>
      </>
    )
  }
}

export default Home
