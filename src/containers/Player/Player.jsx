import React, {useState, useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BsPauseFill, BsPlayFill} from 'react-icons/bs'
import {removePlayerTrack, setPlayerHeight} from '../../actions'
import {usePrevious} from '../../modules/custom-hooks'

const Player = () => {
    const [currentTrack, setCurrentTrack] = useState(null)
    const [isPlaying, setIsPlaying] = useState(true)
    const [progressBarWidth, setProgressBarWidth] = useState('0%')
    const playingNowId = useSelector(state => state.content.playingNowId)
    const playingNowTrack = useSelector(state => state.content.playingNowTrack)
    const prevPlayingNowId = usePrevious(playingNowId)
    const audioElementRef = useRef(null)
    const playerRef = useRef(null)
    const playerHeight = playerRef?.current?.offsetHeight || 0
    const dispatch = useDispatch()

    const togglePlayPause = () => {
        const audioPlayer = audioElementRef.current

        if(isPlaying && !audioPlayer.paused) {
            setIsPlaying(false)
        }
        else if (!isPlaying && audioPlayer.paused) {
            setIsPlaying(true)
        }
    }

    const handleOnEnded = () => {
        dispatch(removePlayerTrack())
    }

    const handleTimeUpdate = () => {
        const audioPlayer = audioElementRef.current
        const width = Math.floor((audioPlayer.currentTime / audioPlayer.duration) * 100) + '%'

        setProgressBarWidth(width)
    }

    useEffect(() => {
        if(playingNowId === prevPlayingNowId) {
            return
        }
        setCurrentTrack(playingNowTrack)
    },[playingNowId, prevPlayingNowId, playingNowTrack])

    useEffect(() => {
        const audioPlayer = audioElementRef.current

        if(prevPlayingNowId === playingNowId){
            if(isPlaying && audioPlayer?.paused) {
                audioPlayer.play()
            }
            if(!isPlaying && !audioPlayer?.paused) {
                audioPlayer.pause()
            }
        }else{
            setIsPlaying(true)
        }
    },[isPlaying,playingNowId, prevPlayingNowId])

    useEffect(() => {
        if(playerHeight > 0) {
            dispatch(setPlayerHeight(playerHeight))
        }
    },[isPlaying,dispatch,playerHeight])

    return (
        <div 
            data-testid="player"
            className={`player ${currentTrack ? 'is-playing' : ''}`}
            ref={playerRef}
        >
            {currentTrack && (
                <div className="player_wrapper">
                    <div className="player_progress-bar">
                        <div 
                            className="player_progress-bar_stroke"
                            style={{width: `${progressBarWidth}`}}
                        />
                    </div>
                    <div className="container">
                        <figure
                            className='player_album-cover'
                            style={{backgroundImage: `url(${currentTrack.album?.images[1]?.url || ''})`}}
                        />

                        <div className="player_status">
                            <div className="player_artist">
                                <span className='player_music'>{currentTrack.name}</span>
                                <span className='player_artists'>
                                    {currentTrack.artists && currentTrack.artists.map(({name}) => name).join(',')}
                                </span>
                                <div className={`player_status_current ${isPlaying ? 'is-playing' : ''}`}>
                                    <span>Pausado</span>
                                    <span>Reproduzindo</span>
                                </div>
                            </div>
                        </div>

                        <div className="player_controls" onClick={togglePlayPause}>
                            <div className={`player_control ${!isPlaying ? 'is-playing' : ''}`}>
                                {isPlaying
                                    ?(<BsPlayFill />)
                                    :(<BsPauseFill />)
                                }
                            </div>
                        </div>
                    </div>
                    <audio 
                        src={currentTrack.preview_url}
                        ref={audioElementRef}
                        autoPlay
                        onEnded={handleOnEnded}
                        onTimeUpdate={handleTimeUpdate}
                        preload='metada'
                    />
                </div>
            )}
        </div>
    )
};

export default Player;
