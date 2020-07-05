import React  from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'


const PlaylistItem = ({ categoryId, description, id, image, name, path }) => (
    <div className="playlists_item" data-testid="playlist">
        <Link
            className='playlists_item_link'
            style={{backgroundImage: `url(${image.url})`}}
            title={name}
            to={`${path}/${categoryId}/${id}`}
        />
        <p className='playlists_item_description'>
            <strong>{name}</strong>
            {description}
        </p>
    </div>
)

PlaylistItem.propTypes = {
    categoryId: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    image: propTypes.object.isRequired,
    name: propTypes.string.isRequired,
    path: propTypes.string.isRequired,
}

export default PlaylistItem;

