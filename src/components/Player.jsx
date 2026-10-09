import { useContext, useRef, useState } from "react";
import { PlayerContext } from "../Context/playerContext";

export default function Player(){
    const  {isPlaying, setIsPlaying} = useContext(PlayerContext);
    const [musicSecon, setMusicSecon] = useState(0)
    const [musicDuration, setMusicDuration] = useState(0)

    const audioRef = useRef(null)
    const togglePlay = () => {
        setIsPlaying(!isPlaying)
        if(isPlaying === false){
            audioRef.current.play()
        } else{
            audioRef.current.pause()
        }
    }
    const timeUpdate = () => {
        setMusicSecon(audioRef.current.currentTime)
    }
    const timeDuration = () => {
        setMusicDuration(audioRef.current.duration)
    }
    const handleEnded = () => {
        setIsPlaying(false)
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