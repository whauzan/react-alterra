import React from 'react'
import styles from './FormPage.module.css'

function FormPage() {
    return (
        <>
            <h1 style={{"textAlign":"center"}}>Formulir Buku Baru</h1>
            <form action="">
                <label>
                    Judul:
                    <input type="text" name="judul" className={styles.input}/>
                </label>
                <label>
                    Pengarang:
                    <input type="text" name="pengarang" className={styles.input}/>
                </label>
                <label>
                    Cetakan:
                    <input type="text" name="cetakan" className={styles.input}/>
                </label>
                <label>
                    Tahun Terbit:
                    <input type="number" name="tahunTerbit" className={styles.input}/>
                </label>
                <label>
                    Kota Terbit:
                    <input type="text" name="kotaTerbit" className={styles.input}/>
                </label>
                <label>
                    Harga:
                    <input type="number" name="harga" className={styles.input}/>
                </label>
                <label>
                    Foto Sampul:
                    <input type="file" className={styles.input}/>
                </label>
                <input type="submit" value="Submit" className={styles.btn}/>
                <button className={styles.btn}>Reset</button>
            </form>
        </>
    )
}

export default FormPage
