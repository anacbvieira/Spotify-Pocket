import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {endpoints} from '../modules/endpoints'
import {request, sanitizeUrl} from '../modules/request'
import {getContentNameById} from '../modules/helpers'
import {Tracks} from '../containers'
import {
    getPlaylistTracksFailed,
    getPlaylistTracksRequest,
    getPlaylistTracksSuccess,
    logout
} from '../actions'

const {getPlaylistTracks} = endpoints

const TracksRoute = ({path}) => {
    const {auth, content} = useSelector(state => state)
    const {playlistId} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        const requestOptions = {
            ...getPlaylistTracks.options,
            headers: {'Authorization': `Bearer ${auth.accessToken}`}
        }

        dispatch(getPlaylistTracksRequest())

        request(sanitizeUrl(getPlaylistTracks.url, {playlistId}), requestOptions)
            .then(data => dispatch(getPlaylistTracksSuccess(data)))
            .catch(error => {
                if(error === 401) {
                    dispatch(logout())
                    return
                }
                dispatch(getPlaylistTracksFailed(error))
            })
    }, [auth, playlistId, dispatch])

    return (
        <Tracks
            categoryName = {getContentNameById(playlistId, content.playlistsS)}
            data = {content.tracks}
            isLoading = {content.status === 'running'}
            path={path}
        />
    )
}

export default TracksRoute