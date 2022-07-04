import React, { useEffect } from 'react'
import { useNavigate, useRoutes } from 'react-router';
import Hqp from '../Home/Hqp';
import AppIndex from './AppIndex';
import Signup from '../Signup/Signup';
import EditProfile from '../Home/EditProfile';
import Signin from '../Signup/Signin';
import Forgotpassword from '../Signup/Forgotpassword'
import {useDispatch} from 'react-redux'
import { initUser } from '../redux/actions/auth';
import ViewProfile from '../Home/ViewProfile';

function AppNavigation() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
dispatch(initUser(() => navigate("/login")))
    }, [])

    let element = useRoutes([
        {
            path: '/',
            element: <Signup />,
            children: [{ index: true },


            ]
        },
        {
            element: <AppIndex />,
            children: [
                {
                    path: '/home',
                    element: <Hqp />
                },
                {
                    path: '/edit-profile',
                    element: <EditProfile />
                },
                {
                    path: '/view-profile',
                    element: <ViewProfile />
                },
                // {
                //     path: '/forgotpassword',
                //     element: <Forgotpassword />
                // },
            ]

        },
        {
            path: '/Signin',
            element: <Signin />
        },
        {
            path: '/forgotpassword',
            element: <Forgotpassword />
        },




    ])
    return element;

}
export default AppNavigation