import React  from 'react';
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'

const CategoryItem = ({ id, icon, name, url }) => (
    <div 
        className="categories_item" 
        data-testid="category"
        style={{backgroundImage: `url(${icon.url})`}}
    >
        <Link to={`${url}/${id}`} className="categories_item_link">
            <span className="categories_item_title">{name}</span>
        </Link>
    </div>
)

CategoryItem.propTypes = {
    id: propTypes.string.isRequired,
    icon: propTypes.object.isRequired,
    name: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
}

export default CategoryItem;

