import { useEffect } from "react";
import { useStateProvider } from "../utils/stateprovider";
import axios from "axios";
import { reducerCases } from "../utils/constant";
import styled from "styled-components";

const Playlist = () => {
    const [{token,playlists}, dispatch] = useStateProvider();
    
    useEffect(() => {
        const getPlaylistData = async () => {
            
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
             const response = await axios.get("https://api.spotify.com/v1/me/playlists" ,
                {
                    headers: {
                        Authorization: "Bearer  " + token,
                        "Content-Type": "application/json",
                    }
                })
            
            const {items} = response.data
            const playlists = items.map(({name,id})=> {return {
                name,id
            }})

            dispatch({type:reducerCases.SET_PLAYLISTS, playlists});

    

            
        }

        getPlaylistData();
    },[token,dispatch])

  
    return (
        <Container>
            <ul>
                {
                    playlists.map(({name, id}) => {return (
                        <li key={id}>{name}</li>
                    )})
                }
            </ul>
        </Container>
    )
}

export default Playlist;


const Container = styled.div`

height: 100%;
overflow: hidden;
    
    ul {
        list-style-type : none;
        display : flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        height : 55vh;
        max-height: 100%;

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
`