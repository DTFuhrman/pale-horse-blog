import React, { useState } from "react"
import { Link } from "gatsby"
import SoundPlayer from '../logic/SoundPlayer'

const RadioPage = () => {
    const [tempo, setTempo] = useState(60);
    const [inputTempo, setInputTempo] = useState(60);
    const soundPlayer = new SoundPlayer();

    const handleTempoChange = (event) => {
        const newTempo = Number(event.target.value);
        if (!isNaN(newTempo)) {
            setInputTempo(newTempo);
        }
    }

    const setNewTempo = () => {
        setTempo(inputTempo);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <input type="number" id="tempo" name="tempo" onChange={handleTempoChange} value={inputTempo} />
            <button onClick={setNewTempo}>Set Tempo</button>
            <button onClick={() => soundPlayer.playSound(tempo)}>Play Sound</button>
            <button onClick={() => soundPlayer.stopSound()}>Stop Sound</button>
            <Link to="/">Go back to the homepage</Link>
        </div>
    )
}

export default RadioPage