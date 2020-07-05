import React  from 'react';
import propTypes from 'prop-types';
import {Loading} from '../../components'
import CategoryItem from './CategoryItem'


import './Categories.scss';

const Categories = ({ data, isLoading, url }) => (
    <div className="categories" data-testid="categories">
        <div className="container">
            <h3 className="categories title">Categorias</h3>

            {isLoading
                ?(<Loading text='Carregando' />)
                :(
                    <div className="categories_content">
                        {data.length && data.map(category => (
                            <CategoryItem
                                key = {category.id}
                                id = {category.id}
                                icon = {category.icons[0]}
                                name = {category.name}
                                url = {url}
                            />
                        ))}
                    </div>
                )}
        </div>
    </div>
);

Categories.defaultProps = {
    isLoading: false
}

Categories.propTypes = {
    data: propTypes.array.isRequired,
    isLoading: propTypes.bool,
    url: propTypes.string.isRequired
}

export default Categories;

