import {useState, useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (so) =>{

const [isDark, setIsDark] = useLocalStorage('isDark', so)
useEffect(()=>{
  if(isDark){
    document.body.classList.add('dark-mode')
  }
  else{
    document.body.classList.remove('dark-mode')
  }
},[isDark])

return [isDark, setIsDark]

}