import React, {useEffect, useState} from 'react'
import propTypes from 'prop-types'
import {useDispatch, useSelector} from 'react-redux'
import {BsPlayFill, BsVolumeUpFill} from 'react-icons/bs'
import {addTrackToPlayer, removePlayerTrack} from '../../actions'

import './Track.scss'

const Track = ({ track }) => {
    const PlayingNowId = useSelector(state => state.content.PlayingNowId)
    const [isPlaying, setIsPlaying] = useState(false)
    const dispatch = useDispatch()

    const handleClick = () => {
        if(isPlaying && PlayingNowId === track.id) {
            setIsPlaying(false)
            dispatch(removePlayerTrack())
            return
        }
        
        dispatch(addTrackToPlayer(track))
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        if(PlayingNowId === track.id) {
            return
        }
        setIsPlaying(false)
    },[PlayingNowId,track.id])

    return(
        <div
            className={`track ${isPlaying && 'is-playing'}`} 
            data-testid="track"
            onClick={handleClick}
        >
            <div className="track_play">
                <div className="track_play_wrapper">
                    <BsPlayFill className='track_play_icon' />
                    <BsVolumeUpFill className='track_play_icon' />
                </div>
            </div>

            <div className="track_info">
                <span className='track_name'>{track.name}</span>
                <span className='track_artists'>
                    {track.artists.length && track.artists.map(({name}) => name).join(',')}
                </span>
            </div>
        </div>
    )
}

Track.propTypes = {
    track: propTypes.object.isRequired
}

export default Track;

