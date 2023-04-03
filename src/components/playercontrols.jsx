import styled from "styled-components";
import {BsPlayCircleFill, BsPauseCircleFill, BsShuffle, BsFillPauseCircleFill, BsFillPlayCircleFill} from "react-icons/bs";
import {CgPlayTrackNext, CgPlayTrackPrev} from 'react-icons/cg'
import {FiRepeat} from 'react-icons/fi'
import { reducerCases } from "../utils/constant";
import { useStateProvider } from "../utils/stateprovider";
import axios from "axios";

const PlayerControls = () => {
    const [{token,playerState}, dispatch] = useStateProvider();

    const changeTrack = async (type) => {

        await axios.post(`https://api.spotify.com/v1/me/player/${type}`,{} ,
        {
            headers: {
                Authorization: "Bearer  " + token,
                "Content-Type": "application/json",
            },
        });
        const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing" , {},
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

        else {

            dispatch({type: reducerCases.SET_PLAYING,currentlyPlaying: null});
        }


    }

    return (
        <Container>
            <div className="shuffle">
        <BsShuffle/>
            </div>
            <div className="previous">
        <CgPlayTrackPrev  onClick={() => changeTrack("previous") }/>
            </div>
            <div className="state">
                {playerState ? <BsFillPauseCircleFill/> : <BsFillPlayCircleFill/>}
            </div>
            <div className="next">
                <CgPlayTrackNext onClick={() => changeTrack("next") }  />
            </div>
            <div className="repeat">
                <FiRepeat/>
            </div>
        </Container>
    )
}

export default PlayerControls;


const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap:2rem;

    svg {
        color: #b3b3b3;
        transition : 0.2a ease-in-out;

        &:hover {
            color: white;
        }
    }

    .state {

        svg{
            color:white;
        }
    }

    .previous, .next , .state{
        font-size: 2rem;
    }
    `