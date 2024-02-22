import React, { useState } from "react"
import { Link } from "gatsby"
import SoundPlayer from '../logic/SoundPlayer'

const RadioPage = () => {
    const [key, setKey] = useState('C');
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
            <div>
                <label>Tempo: </label>
                <input type="number" value={tempo} onChange={event => setTempo(event.target.value)} />
                <button onClick={() => console.log(`Current tempo: ${tempo}`)}>Log Tempo</button>
            </div>
            <div>
                <label>Key: </label>
                <select value={key} onChange={event => setKey(event.target.value)}>
                    <option value="C">C</option>
                    <option value="C#">C#</option>
                    <option value="D">D</option>
                    <option value="D#">D#</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="F#">F#</option>
                    <option value="G">G</option>
                    <option value="G#">G#</option>
                    <option value="A">A</option>
                    <option value="A#">A#</option>
                    <option value="B">B</option>
                    <option value="Cm">Cm</option>
                    <option value="C#m">C#m</option>
                    <option value="Dm">Dm</option>
                    <option value="D#m">D#m</option>
                    <option value="Em">Em</option>
                    <option value="Fm">Fm</option>
                    <option value="F#m">F#m</option>
                    <option value="Gm">Gm</option>
                    <option value="G#m">G#m</option>
                    <option value="Am">Am</option>
                    <option value="A#m">A#m</option>
                    <option value="Bm">Bm</option>
                </select>
                <button onClick={() => console.log(`Current key: ${key}`)}>Log Key</button>
            </div>
            <button onClick={() => soundPlayer.playSound(tempo, key)}>Play Sound</button>
            <button onClick={() => soundPlayer.stopSound()}>Stop Sound</button>
            <Link to="/">Go back to the homepage</Link>
        </div>
    )
}

export default RadioPage