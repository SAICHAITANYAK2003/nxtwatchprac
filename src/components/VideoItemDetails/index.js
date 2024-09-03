import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'

import {FaRegSave} from 'react-icons/fa'

import {
  VideoItemDetailsContainer,
  ReactPlayerContainer,
  ItemDescription,
  LikesAndViewsContainer,
  ViewsContainer,
  Views,
  Posted,
  LikesContainer,
  LikesButton,
  DisLikesButton,
  SaveButton,
  HrLine,
  ChannelDetailsContainer,
  ChannelDetails,
  ChannelLogoContainer,
  ChannelLogo,
  ChannelName,
  Subscribers,
  About,
  MainContainer,
} from './styledComponents'
import SideBar from '../SideBar'
import ThemeContext from '../../Context/ThemeContext'

class VideoItemDetails extends Component {
  state = {
    videosItemDetailsList: [],
    isLike: false,
    isDislike: false,
    isSaved: false,
  }
  componentDidMount() {
    this.getVideoItemDetails()
  }
  getVideoItemDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const itemApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(itemApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()

      const updatedData = {
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        channelName: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subsrciberCount: data.video_details.channel.subscriber_count,
      }

      this.setState({
        videosItemDetailsList: updatedData,
      })
    }
  }
  rendervideoPlayer = () => {
    const {videosItemDetailsList} = this.state
    return (
      <ReactPlayerContainer>
        <ReactPlayer
          controls
          url={videosItemDetailsList.videoUrl}
          width="100%"
          height="60vh"
        />
      </ReactPlayerContainer>
    )
  }

  renderSuccessView = () => {
    const {videosItemDetailsList, isLike, isDislike, isSaved} = this.state
    const {
      description,
      title,
      viewCount,
      publishedAt,
      profileImageUrl,
      channelName,
      subsrciberCount,
    } = videosItemDetailsList

    return (
      <ThemeContext.Consumer>
        {value => {
          const {savedVideoButtonclicked} = value
          const isLikeClassName = isLike ? ' #3b82f6' : '#000'

          const isDisLikeClassName = isDislike ? ' #3b82f6' : '#000'

          const isSavedClassName = isSaved ? ' #3b82f6' : '#000'

          const isSavedText = isSaved ? 'Saved' : 'Save'

          const onClickLiked = () => {
            this.setState(prevState => ({
              isLike: !prevState.isLike,
              isDislike: false,
            }))
          }
          const onClickDisliked = () => {
            this.setState(prevState => ({
              isDislike: !prevState.isDislike,
              isLike: false,
            }))
          }
          const onClickSaved = () => {
            this.setState(prevState => ({isSaved: !prevState.isSaved}))
            savedVideoButtonclicked(videosItemDetailsList)
          }
          return (
            <VideoItemDetailsContainer>
              {this.rendervideoPlayer()}
              <ItemDescription>{title}</ItemDescription>
              <LikesAndViewsContainer>
                <ViewsContainer>
                  <Views>{viewCount}</Views>
                  <Posted>{publishedAt}</Posted>
                </ViewsContainer>
                <LikesContainer>
                  <LikesButton
                    color={isLikeClassName}
                    type="button"
                    onClick={onClickLiked}
                  >
                    <BiLike size="22" /> Like
                  </LikesButton>
                  <DisLikesButton
                    color={isDisLikeClassName}
                    type="button"
                    onClick={onClickDisliked}
                  >
                    <BiDislike size="22" /> Dislike
                  </DisLikesButton>
                  <SaveButton
                    color={isSavedClassName}
                    type="button"
                    onClick={onClickSaved}
                  >
                    <FaRegSave size="22" /> {isSavedText}
                  </SaveButton>
                </LikesContainer>
              </LikesAndViewsContainer>
              <HrLine />
              <ChannelDetailsContainer>
                <ChannelLogoContainer>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                </ChannelLogoContainer>
                <ChannelDetails>
                  <ChannelName>{channelName}</ChannelName>
                  <Subscribers>{`${subsrciberCount} subscribers`}</Subscribers>
                  <About>{description}</About>
                </ChannelDetails>
              </ChannelDetailsContainer>
            </VideoItemDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  render() {
    return (
      <>
        <MainContainer>
          <SideBar />
          {this.renderSuccessView()}
        </MainContainer>
      </>
    )
  }
}

export default VideoItemDetails
