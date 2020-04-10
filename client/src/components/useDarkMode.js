import {useState, useEffect} from 'react'

export const useDarkMode = (so) =>{

const [isDark, setIsDark] = useState(so)
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