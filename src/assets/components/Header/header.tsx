import styles from "./header.module.css"

function Header(){
    return(
        <header className={styles.header}>
            <h1>React + TS to-do</h1>
        </header>
    )
}
export default Header