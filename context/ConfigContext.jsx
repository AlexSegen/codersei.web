import { createContext, useState } from 'react';

export const ConfigContext = createContext();

const initialState =  {
    title: "Bienvenido | Alejandro Vivas - Frontend Developer",
    description: "Alejandro Vivas - Frontend Developer.",
    author: "alexsegen",
    twitter: "https://twitter.com/pixelagil",
    linkedin: "https://www.linkedin.com/in/alejandro-vivas/",
    github : "https://github.com/alexsegen"
}

const ConfigContextProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false);
    const [config] = useState(initialState);

    const toggleDarkMode = () => setDarkMode(!darkMode)

    return ( 
        <ConfigContext.Provider value={{
            ...config,
            toggleDarkMode,
            darkMode
        }} >
            { children }
        </ConfigContext.Provider>
     );
}
 
export default ConfigContextProvider;