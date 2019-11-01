import React, { Fragment, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const PublicRoute = (props) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const session = localStorage.getItem("__auth_lie");
        if (session) setIsAuth(true);
    },[]);
    
    return (
        <Fragment>
            { isAuth ?  <Redirect to="/logged" /> : props.children }
        </Fragment>
    )
}

export default PublicRoute;