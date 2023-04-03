import styled from "styled-components";
import CurrentTrack from "./currentTrack";
import PlayerControls from "./playercontrols";

const Footer = () => {
    return (
        <Container>
            <CurrentTrack/>
            <PlayerControls/>
        </Container>
    )
}

const Container = styled.div`
  background-color: #181818;
  height: 100%;
  width: 100%;
  border-top: 1px solid #282828;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;

`;

export default Footer;