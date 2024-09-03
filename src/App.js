import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './Context/ThemeContext'
// Replace your code here

class App extends Component {
  state = {
    savedVideosList: [],
  }

  savedVideoButtonclicked = data => {
    const {savedVideosList} = this.state
    const isVideoSaved = savedVideosList.some(video => video.id === data.id)
    if (isVideoSaved) {
      this.setState({
        savedVideosList: savedVideosList.filter(video => video.id !== data.id),
      })
    } else {
      this.setState({savedVideosList: [...savedVideosList, data]})
    }
  }

  render() {
    const {savedVideosList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          savedVideosList,
          savedVideoButtonclicked: this.savedVideoButtonclicked,
        }}
      >
        <>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />

            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
          </Switch>
        </>
      </ThemeContext.Provider>
    )
  }
}

export default App
