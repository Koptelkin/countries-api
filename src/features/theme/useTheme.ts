import { useDispatch, useSelector } from "react-redux";
import { Theme, setTheme } from "./themeSlice";
import { selectTheme } from "./selectTheme";
import {useEffect} from 'react';

export const useTheme = (): [Theme, ()=> void] => {
    const dispatch = useDispatch(); // тригер для выполнения экшена, мол redux обрати внимание что выполняется такой-то экшен 
    const theme = useSelector(selectTheme); //хук useSelector позволяет нам достать значения из store

    const toggleTheme = () => {
        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
    }

    useEffect(()=>{
        document.body.setAttribute('data-theme', theme)
    },[theme]);

    return [theme, toggleTheme];
}