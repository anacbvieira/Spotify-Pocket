import React  from 'react'
import propTypes from 'prop-types'
import {Loading, RouteHeader} from '../../components'
import PlaylistItem from './PlaylistItem'

import './Playlists.scss';

const Playlists = ({ data, categoryName, categoryId, isLoading, path }) => (
    <div className="playlists" data-testid="playlists">
        <div className="container">
            <RouteHeader categoryName={categoryName} path={path} />

            {isLoading
                ?(<Loading text='Carregando playlists...' />)
                :(
                    <div className="playlists_content">
                        {data.length && data.map(playlist => (
                            <PlaylistItem
                                key={playlist.id}
                                id={playlist.id}
                                name={playlist.name}
                                categoryId={categoryId}
                                description={playlist.description}
                                image={playlist.images[0]}
                                path={path}
                            />
                        ))}
                    </div>
                )}
        </div>
    </div>
);

Playlists.defaultProps = {
    isLoading: false
}

Playlists.propTypes = {
    data: propTypes.array.isRequired,
    categoryName: propTypes.string.isRequired,
    categoryId: propTypes.string.isRequired,
    isLoading: propTypes.bool,
    path: propTypes.string.isRequired,
}

export default Playlists;

