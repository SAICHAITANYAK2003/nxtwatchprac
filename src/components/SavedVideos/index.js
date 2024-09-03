import {FaSave} from 'react-icons/fa'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import ThemeContext from '../../Context/ThemeContext'
import {
  SavedMainContainer,
  SavedVideosContainer,
  SavedHeader,
  IconContainer,
  SavedTitle,
  SavedVideosContent,
  VideosContentList,
} from './styledComponents'

const SavedVideos = () => {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {savedVideosList} = value
        console.log(savedVideosList)

        const renderSavedVideos = () => (
          <>
            <VideosContentList>
              {savedVideosList.map(eachVideoDetails => (
                <VideoItem
                  videoDetails={eachVideoDetails}
                  key={eachVideoDetails.id}
                />
              ))}
            </VideosContentList>
          </>
        )
        return (
          <>
            <SavedMainContainer>
              <SideBar />
              <SavedVideosContainer>
                <SavedHeader>
                  <IconContainer>
                    <FaSave size="30" color="red" />
                  </IconContainer>
                  <SavedTitle>Saved</SavedTitle>
                </SavedHeader>
                <SavedVideosContent>{renderSavedVideos()}</SavedVideosContent>
              </SavedVideosContainer>
            </SavedMainContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
