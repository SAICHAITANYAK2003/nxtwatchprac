import {Link} from 'react-router-dom'
import {
  VideoItemLi,
  VideoImage,
  ChannelLogoAndDetails,
  ChannelLogo,
  Title,
  ChannelDetails,
  ChannelName,
  ViewsandPublished,
  ViewsCount,
  PublishedDate,
  ChannelLogoContainer,
} from './styledComponents'
import './index.css'
const VideoItem = props => {
  const {videoDetails} = props
  const {
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channelName,
    profileImageUrl,
  } = videoDetails
  return (
    <Link to={`/videos/${videoDetails.id}`} className="item-link">
      <VideoItemLi>
        <VideoImage src={thumbnailUrl} alt={title} />
        <ChannelLogoAndDetails>
          <ChannelLogoContainer>
            <ChannelLogo src={profileImageUrl} alt={channelName} />
          </ChannelLogoContainer>

          <ChannelDetails>
            <Title>{title}</Title>
            <ChannelName>{channelName}</ChannelName>
            <ViewsandPublished>
              <ViewsCount>{`${viewCount} views`}</ViewsCount>
              <PublishedDate>{publishedAt}</PublishedDate>
            </ViewsandPublished>
          </ChannelDetails>
        </ChannelLogoAndDetails>
      </VideoItemLi>
    </Link>
  )
}

export default VideoItem
