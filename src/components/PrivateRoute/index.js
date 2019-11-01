import React, { Fragment, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {
    const [isAuth, setIsAuth] = useState(true);

    useEffect(() => {
        const session = localStorage.getItem("__auth_lie");
        if (!session) setIsAuth(false);
        
    },[]);
    
    return (
        <Fragment>
            { isAuth ? props.children : <Redirect to="/login" /> }
        </Fragment>
    )
}

export default PrivateRoute;