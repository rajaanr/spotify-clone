import styled from "styled-components";
import { useStateProvider } from "../utils/stateprovider";
import { useEffect } from "react";
import axios from "axios";
import { reducerCases } from "../utils/constant";


const CurrentTrack = () => {
    const [{token,currentlyPlaying}, dispatch] = useStateProvider();

    useEffect(() => {
        const getCurrentTrack = async () => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
             const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing" ,
                {
                    headers: {
                        Authorization: "Bearer  " + token,
                        "Content-Type": "application/json",
                    }
                })
            
                if (response.data !== "") {
                    const {item} = response.data
                    const currentlyPlaying = {
                        id: item.id,
                        name:item.name,
                        artists:item.artists.map((artists) => artists.name),
                        image: item.album.images[2].url,
                    }

                    dispatch({type: reducerCases.SET_PLAYING, currentlyPlaying});
                }
            
        }

        getCurrentTrack();
    },[token,dispatch])

  

    return (
        <Container>
           {
            currentlyPlaying && (
                <div className="track">
                    <div className="track-img">
                        <img src={currentlyPlaying.image} alt="currentlyPlaying" />
                    </div>
                    <div className="track-info">
                        <h4>{currentlyPlaying.name}</h4>
                        <h6>{currentlyPlaying.artists}</h6>
                    </div>
                </div>
            )
           }
        </Container>
    )
}

const Container = styled.div`
.track {
    display: flex;
    align-items: center;
    gap: 1rem;
    .track-info{
        display: flex;
        gap: 0.3rem;
        flex-direction: column;

        h4 {
            color: white;
        }

        h6{
            color: #b3b3b3;
        }
    }
}

`;

export default CurrentTrack;