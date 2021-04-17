import React from 'react'
import styles from "./App.module.css"
import useKeyPress from './hooks/useKeyPress'

const App = () => {

    const dinoPress = useKeyPress("d");
    const astroPress = useKeyPress("a");
    const hackerPress = useKeyPress("h");
    const ninjaPress = useKeyPress("n");

    return (
        <div className={styles.container}>
            <pre className={styles.letters}>n,a,h,d</pre>
            <div className={styles.emojis}>
                {dinoPress && "🐱‍🐉"}
                {astroPress && "🐱‍🚀"}
                {hackerPress && "🐱‍💻"}
                {ninjaPress && "🐱‍👤"}
            </div>
        </div>
    )
}

export default App
