import React  from 'react';
import propTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {RiArrowLeftLine} from 'react-icons/ri'

import './RouteHeader.scss';

const RouterHeader = ({ categoryName, path }) => (
    <div className="route-header" data-testid="route-header">
        <div className="route-header_title-group">
            <Link to={path} className='back-button'>
                <RiArrowLeftLine />
            </Link>

            <span className='route-header_title'>{categoryName}</span>
        </div>
    </div>
);

RouterHeader.defaulProps = {
    path: '/dashboard'
}

RouterHeader.propTypes = {
    categoryName: propTypes.string.isRequired,
    path: propTypes.string
}

export default RouterHeader;

