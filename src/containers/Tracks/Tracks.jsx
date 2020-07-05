import React  from 'react'
import propTypes from 'prop-types'
import {Loading, RouteHeader} from '../../components'
import Track from './Track'

import './Tracks.scss'

const Tracks = ({ categoryName, data, isLoading, path }) => (
    <div className="tracks" data-testid="tracks">
        <div className="container">
            <RouteHeader categoryName={categoryName} path={path} />

            {isLoading
                ?(<Loading text='Carregando tracks...' />)
                :(
                    <div className="tracks_content">
                        {data.length && data.map(({track}, index) => (
                            <Track key={`${index} - ${track.id}`} track={track} />
                        ))}
                    </div>
                )}
        </div>
    </div>
);

Tracks.defaulProps = {
    isLoading: false
}

Tracks.propTypes = {
    categoryName: propTypes.string.isRequired,
    data: propTypes.array.isRequired,
    isLoading: propTypes.bool
}

export default Tracks;

