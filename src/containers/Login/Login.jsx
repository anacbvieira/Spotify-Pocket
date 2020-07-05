import React from 'react'
import {Logo} from '../../components'
import {endpoints} from '../../modules/endpoints'
import backgroundImage from '../../assets/images/app-intro-2.jpg'

import './Login.scss';

const Login = () => (
    <main 
        className="login" 
        data-testid="login"
        style={{backgroundImage: `url(${backgroundImage})`}}
    >
        <div className="container">
            <Logo />
            <h2 className='login_microcopy'>
            Não toca a música inteira,
            <strong> mas toca o seu <span role="img" className="login_microcopy_heart" aria-label="Coração">❤️</span></strong>
            </h2>
            <a href={endpoints.getAuthorization.url} className="login_auth-button">
                Entrar com o Spotify
            </a>
        </div>
    </main>
);

export default Login;
