import React, { useEffect, useState } from 'react'

const useKeyPress = (targetKey) => {
    
    const [keyPressed, setkeyPressed] = useState(false)

    const downHandler = ({key}) =>{
        if(key===targetKey){
            setkeyPressed(true);
        }
    }
    
    const upHandler = ({key}) =>{
        if(key===targetKey){
            setkeyPressed(false);
        }
    }

    useEffect(() => {
        window.addEventListener("keydown",downHandler)
        window.addEventListener("keyup",upHandler)
        return () => {
            window.removeEventListener("keydown",downHandler)
            window.removeEventListener("keyup",upHandler)
        }
    }, [])

    return keyPressed;
}

export default useKeyPress
