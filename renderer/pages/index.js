import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    useEffect(() => {
        // on mount
    }, []);
    return (
        <div className={styles.wrapper}>
            <h1>Welcome to Nextron Boilerplate! Helloooo</h1>
        </div>
    );
}
