import styled from 'styled-components'

export const MainContainer = styled.div`
 display:flex;
flex-direction:row;
height:100vh;
 
`

export const VideoItemDetailsContainer = styled.div`
  width:100%;
  padding:20px;
  background-color:#f1f1f1;
`

export const ReactPlayerContainer = styled.div``

export const ItemDescription = styled.p`
  font-family:'Roboto';
  font-size:20px;
`

export const LikesAndViewsContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
`

export const ViewsContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
`

export const Views = styled.p``

export const Posted = styled.p`
 padding-left:40px;
`

export const LikesContainer = styled.div`
    display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
`

export const LikesButton = styled.button`
  cursor:pointer;
  height:30px;
  width:100px;
  display:flex;
  flex-direction:row;
  align-items:center;
  font-size:17px;
  background-color:transparent;
  margin-right:20px;
    border:none;
    color:${props => props.color}
`
export const DisLikesButton = styled.button`
  cursor:pointer;
  height:30px;
  width:100px;
    display:flex;
  flex-direction:row;
  align-items:center;
    font-size:17px;
    background-color:transparent;
  border:none;
   margin-right:20px;
   color:${props => props.color}
`
export const SaveButton = styled.button`
  cursor:pointer;
  height:30px;
  width:100px;
    display:flex;
  flex-direction:row;
  align-items:center;
    font-size:17px;
    background-color:transparent;
  border:none;
   margin-right:20px;
    color:${props => props.color}
`
export const HrLine = styled.hr`
  width:98%;
  height:3px;
  background-color:#000;
  
  
   
`
export const ChannelDetailsContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
`

export const ChannelLogoContainer = styled.div``

export const ChannelLogo = styled.img`
  height:60px;
`
export const ChannelDetails = styled.div`
display:flex;
  flex-direction:column;
  justify-content:flex-start;
  padding-left:10px;
  
`

export const ChannelName = styled.p``

export const Subscribers = styled.p``

export const About = styled.p``
