import React from 'react'
import styles from './NotFound.module.css'
import { Link } from "react-router-dom"
import page404 from './404.png'

function NotFound() {
    return (
        <div className={styles.err}>
            <img src={page404} alt="404 page" className={styles.err_img} />
            <h1 className={styles.message}>Oops! Something went wrong!</h1>
            <Link className={styles.btn} to="/" replace>Return to Home</Link>
        </div>
    )
}

export default NotFound
