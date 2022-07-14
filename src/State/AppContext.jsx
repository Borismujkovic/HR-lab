import React from 'react';

const AppContext = React.createContext({
    theme: "red",
    changeTheme: f => f
})

export default AppContext;