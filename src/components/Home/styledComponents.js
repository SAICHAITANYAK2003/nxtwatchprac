import styled from 'styled-components'

export const HomeContainer = styled.div`
 display:flex;
 flex-direction:row;
height:100vh;
`
export const MainHeader = styled.h1`
  font-family:'Roboto';
  
`

export const FiltersGroup = styled.div``

export const HomeContentContainer = styled.div`

 width:100%;
 
`

export const InputBox = styled.input`
  height:35px;
  width:250px;
  outline:none;
  border:1px solid  #909090;
`

export const InputBoxContainer = styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;

`

export const SearchButton = styled.button`
  height:35px;
  width:60px;
  border:1px solid  #909090;
  cursor:pointer;
`
export const VideosListContainer = styled.ul`
  list-style-type:none;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  overflow-y:scroll;
  height:94vh;
 
  
 
`
