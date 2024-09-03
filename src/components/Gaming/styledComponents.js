import styled from 'styled-components'

export const GamingMainContainer = styled.div`
  height:100vh;
  display:flex;
  flex-direction:row;
  width:100%;
  
`
export const GamingContent = styled.div`
  width:100%;
 
`

export const GamingHeader = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  background-color:#f4f4f4;
   padding-left:30px;
  padding-top:10px;
  height:120px;
  
`

export const IconContainer = styled.div`
    background-color: #e2e8f0;
    padding:20px;
    border-radius:50px;
`

export const GamingTitle = styled.h1`
  font-family:'Roboto';
  margin-left:20px;
`

export const GamingVideoslist = styled.ul`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  height:87vh;
  overflow-y:scroll;
`
