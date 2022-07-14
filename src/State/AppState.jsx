import React, { Component, useState } from 'react';
import AppContext from './AppContext';

const AppState = (props) => {
    const [theme, setTheme] = useState("red")


    

    const changeTheme = (theme) => {
        setTheme((prevTheme) => {
            return {
                theme
            }
        })
    }

        // const { changeTheme } = theme
        // const { theme } = setTheme
        return (
            <AppContext.Provider value={{ theme, changeTheme }}>
                {props.children}
            </AppContext.Provider>
        )
    }


export default AppState;