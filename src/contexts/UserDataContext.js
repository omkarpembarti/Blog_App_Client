import React, { createContext, useState } from 'react'

export const UserContext = createContext();

const UserDataContext = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        userName: ''
    });
    // const setUserInfoWrap = (param) => {
    //     setUserInfo(param)
    // }
    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>

    )
}



export default UserDataContext
