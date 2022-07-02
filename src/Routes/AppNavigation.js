import React from 'react'
import { useRoutes } from 'react-router';
import Hqp from '../Home/Hqp';
import AppIndex from './AppIndex';
import Signup from '../Signup/Signup';
import EditProfile from '../Home/EditProfile';
import Signin from '../Signup/Signin';
import Forgotpassword from '../Signup/Forgotpassword'
function AppNavigation() {
    let element = useRoutes([
        {
            path: '/',
            element: <Signup />,
            children: [{ index: true },
            // {
            //     path: '/Signin',
            //     element: <Signin />
            // }

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
                    path: '/signin',
                    element: <Signin />
                },
                {
                    path: '/forgotpassword',
                    element: <Forgotpassword />
                },
            ]

        },




    ])
    return element;

}
export default AppNavigation