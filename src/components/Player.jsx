import { useContext, useRef } from "react";
import { PlayerContext } from "../Context/playerContext";

export default function Player(){
    const {state, dispatch} = useContext(PlayerContext);
    const {isPlaying, musicSecon, musicDuration} = state

    const audioRef = useRef(null)
    const togglePlay = () => {
        dispatch({type: 'toggle-play'})
        if(isPlaying === false){
            audioRef.current.play()
        } else{
            audioRef.current.pause()
        }
    }
    const timeUpdate = () => {
        dispatch({
            type: 'time-update',
            payload: audioRef.current.currentTime,
        })
    }
    const timeDuration = () => {
        dispatch({
            type: 'time-duration',
            payload: audioRef.current.duration,
        })
    }
    const handleEnded = () => {
        dispatch({type: 'ended'})
    }
    function format(seconds){
        const minutes = Math.floor(seconds / 60)
        const sec = Math.floor(seconds % 60)
        return `${minutes}:${sec.toString().padStart(2, "0")}`
    }
    return(
        <div className="wrapper">
            <h1>Аудіоконтролер</h1>
            <div className="box">
                <button onClick={togglePlay}>{isPlaying ? "⏸" : "▶"}</button>
                <audio src="https://cdn.truefilesize.com/mp3/sample-500kb.mp3" ref={audioRef} onTimeUpdate={timeUpdate} onLoadedMetadata={timeDuration} onEnded={handleEnded}></audio>
                <p>{format(musicSecon)}</p>
                <input type="range" min={0} max={musicDuration} value={musicSecon} onChange={(e) => {audioRef.current.currentTime = e.target.value}}/>
                <p>{format(musicDuration)}</p>
            </div>
        </div>
        
    )
}