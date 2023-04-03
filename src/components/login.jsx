import React from "react";
import styled from "styled-components";


export default function Login () {
    const handelclick = () => {
        const ClientID = import.meta.env.VITE_REACT_BASEKEY;
        const redirectURL = "http://localhost:5173/";
        const apiUrl = "http://accounts.spotify.com/authorize";
        const scope = [
        'user-read-email',
        'user-read-private',
        'user-read-playback-state',
        'user-modify-playback-state',
        'user-read-currently-playing',
        'user-read-playback-position',
        'user-top-read',
        'user-read-recently-played'];

        window.location.href =`${apiUrl}?client_id=${ClientID}&redirect_uri=${redirectURL}&scope=${scope.join(
            " "
        )}&response_type=token&show_daialog=true`;
    } 
    return (
        <Container>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="Spotify Logo" />
            <button onClick={handelclick}>Connect Spotify</button>
        </Container>
    );

    
}

const Container = styled.div`

display:flex;
flex-direction : column;
align-items : center;
justify-content : center;
height : 100vh;
width : 100%;
background-color : #1db954;
gap: 5rem;
padding: 0;

img {
   height: 20vh;
}
button{
 padding : 0.7rem 4rem;
 border-radius: 5rem;
 background-color : black;
 color : #49f585;
 font-size: 1.2rem;
 cursor : pointer;
} 
`;

