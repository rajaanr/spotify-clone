import styled from "styled-components";
import { IoLibrary } from "react-icons/io5";
import {MdHomeFilled, MdSearch}  from 'react-icons/md'
import Playlist from "./playlist";


const Sidebar = () => {
    return (
        <Container>
          <div className="top-links">
            <div className="logo">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Spotify Logo" />
                <ul>
                    <li><MdHomeFilled/><span>Home</span></li>
                    <li><MdSearch/><span>Search</span></li>
                    <li><IoLibrary/><span>Your Library</span></li>
                </ul>
            </div>
          </div>
          <Playlist/>
        </Container>
    )
}

const Container = styled.div`
  background-color: black;
  color : #b8b8b8;
  display : flex ;
  flex-direction : column;
  height : 100%;
  wieth: 100% ;

  .top-links {
    display : flex ;
  flex-direction : column;
    .logo{
        text-align: center;
        margin : 1rem 0;
        img {
            max-inline-size : 75%;
            block-size: auto;
            padding-bottom: 1rem;
        }
    }
    ul {
        list-style-type : none;
        display : flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;

        li{
        gap: 1rem;
        display : flex;
        cursor :pointer;
        transition : 0.3 ease-in-out;
        &:hover {
            color: white;
        }
        }
    }

  }

`;




export default Sidebar;