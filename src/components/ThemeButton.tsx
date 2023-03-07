import React from "react";
import { FaMoon, FaSun } from 'react-icons/fa'


const ThemeButton = () => {
    const [theme, setTheme] = React.useState('business');
    const toggleTheme = () => {
        setTheme(theme === 'business' ? 'corporate' : 'business');
    };
    // initially set the theme and "listen" for changes to apply them to the HTML tag
    React.useEffect(() => {
        document.querySelector('html')?.setAttribute('data-theme', theme);
        document.querySelector('html')?.setAttribute('class', theme === 'business' ? 'dark' : '');
    }, [theme]);
    return (
        <>
            <button className="btn btn-circle btn-ghost" onClick={toggleTheme}>
            {theme === 'business' ? 
                <><FaMoon size={15} color="white"/></>: 
                <><FaSun size={15} color="yellow"/></>
            }
            </button>
        </>
    );
}

export default ThemeButton;