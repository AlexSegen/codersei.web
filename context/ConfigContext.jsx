import { createContext, useState, useEffect } from 'react';

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

    const toggleDarkMode = () =>  {
        localStorage.theme = darkMode ? 'light' : 'dark';
        handleToggle();
    }

    const handleToggle = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            document.body.classList.add('dark:bg-slate-900')
            setDarkMode(true);
          } else {
            document.documentElement.classList.remove('dark')
            document.body.classList.remove('dark:bg-slate-900')
            setDarkMode(false);
        }
    }

    useEffect(() => {
        
        handleToggle();	

    }, [])

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