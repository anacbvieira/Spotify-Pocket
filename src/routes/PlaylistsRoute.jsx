import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {endpoints} from '../modules/endpoints'
import {request, sanitizeUrl} from '../modules/request'
import {getContentNameById} from '../modules/helpers'
import {Playlists} from '../containers'
import {
    getCategoryPlaylistFailed,
    getCategoryPlaylistRequest,
    getCategoryPlaylistSuccess,
    logout
} from '../actions'

const {getCategoryPlaylists} = endpoints

const PlaylistsRoute = ({path}) => {
    const {auth, content} = useSelector(state => state)
    const {categoryId} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        const requestOptions = {
            ...getCategoryPlaylists.options,
            headers: {'Authorization': `Bearer ${auth.accessToken}`}
        }

        dispatch(getCategoryPlaylistRequest())

        request(sanitizeUrl(getCategoryPlaylists.url, {categoryId}), requestOptions)
            .then(data => dispatch(getCategoryPlaylistSuccess(data)))
            .catch(error => {
                if(error === 401) {
                    dispatch(logout())
                    return
                }
                dispatch(getCategoryPlaylistFailed(error))
            })
    }, [auth, categoryId, dispatch])

    return (
        <Playlists
            categoryId = {categoryId}
            categoryName = {getContentNameById(categoryId, content.categories)}
            data = {content.playlists}
            // isLoading = {content.status === 'running' & content.playlists.length === 0}
            path = {path}
        />
    )
}

export default PlaylistsRoute

