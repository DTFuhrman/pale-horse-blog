import React from "react"
import { Link } from "gatsby"
import { useContext, useState } from "react"
import { TempoContext } from "../context/TempoContext"
import SoundPlayer from '../logic/SoundPlayer'

const RadioPage = () => {
    const { tempo, setTempo } = useContext(TempoContext);
    const soundPlayer = new SoundPlayer(tempo);

    const [newTempo, setNewTempo] = useState(tempo);

    const handleTempoChange = (event) => {
        setNewTempo(Number(event.target.value));
    }

    const handleSetTempo = () => {
        setTempo(newTempo);
        soundPlayer.setTempo(newTempo);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <input type="number" id="newTempo" name="newTempo" onChange={handleTempoChange} value={newTempo} />
            <button onClick={handleSetTempo}>Set Tempo</button>
            <button onClick={() => soundPlayer.playSound()}>Play Sound</button>
            <button onClick={() => soundPlayer.stopSound()}>Stop Sound</button>
            <Link to="/">Go back to the homepage</Link>
        </div>
    )
}

export default RadioPage