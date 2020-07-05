import AuthConstants from '../constants/auth'

const authInitialState = {
    accessToken: '',
    errorMessage: '',
    expirationTime: '',
    expiresIn: '',
    tokenType: '',
    isLogged: false
    
}

const authReducer = (state = authInitialState, action) => {
    const {type, payload} = action
    switch(type) {
        case AuthConstants.AUTH_CALLBACK_ERROR:
            return {
                ...state,
                accessToken: '',
                errorMessage: payload,
                expiresIn: '',
                tokenType: '',
                isLogged: false            
            }
        case AuthConstants.AUTH_CALLBACK_SUCESS:
            return {
                ...state,
                accessToken: payload.accessToken,
                errorMessage: '',
                expirationTime: new Date().getTime() + parseInt(payload.expiresIn),
                expiresIn: payload.expiresIn,
                tokenType: payload.tokenType,
                isLogged: true
            }
        default:
            return state
    }
}

export default authReducer