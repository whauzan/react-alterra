import React, { useRef, useState } from 'react'
import styles from './FormPage.module.css'

function FormPage() {
    const initialData = {
        judul : "",
        pengarang : "",
        cetakan : "",
        tahunTerbit : 0,
        kotaTerbit : "",
        harga : 0,
    }

    const [data, setData] = useState(initialData);
    const regex = /^[A-Za-z ]*$/;
    const [errMsg, setErrMsg] = useState("")

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "pengarang") {
            if (regex.test(value)) {
                setErrMsg("")
            } else {
                setErrMsg("Nama Pengarang Harus Berupa Huruf")
            }
        }

        setData({
            ...data,
            [name] : value
        })
        console.log("data", data);
    }

    const fotoSampul = useRef(null);

    const handleSubmit = (e) => {
        if (errMsg !== "") {
            alert("Terdapat data yang tidak sesuai")
        } else {
            alert(`Data Buku "${data.judul}" Berhasil Diterima`)
        }
        e.preventDefault();
    }

    return (
        <>
            <h1 style={{"textAlign":"center"}}>Formulir Buku Baru</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Judul:
                    <input type="text" name="judul" onChange={handleInput} value={data.judul} className={styles.input}/>
                </label>
                <label>
                    Pengarang:
                    <input type="text" name="pengarang" onChange={handleInput} value={data.pengarang} className={styles.input}/>
                </label>
                <label>
                    Cetakan:
                    <input type="text" name="cetakan" onChange={handleInput} value={data.cetakan} className={styles.input}/>
                </label>
                <label>
                    Tahun Terbit:
                    <input type="number" name="tahunTerbit" onChange={handleInput} value={data.tahunTerbit} className={styles.input}/>
                </label>
                <label>
                    Kota Terbit:
                    <input type="text" name="kotaTerbit" onChange={handleInput} value={data.kotaTerbit} className={styles.input}/>
                </label>
                <label>
                    Harga:
                    <input type="number" name="harga" onChange={handleInput} value={data.harga} className={styles.input}/>
                </label>
                <label>
                    Foto Sampul:
                    <input type="file" ref={fotoSampul} className={styles.input}/>
                </label>
                <input type="submit" value="Submit" className={styles.btn}/>
                <button className={styles.btn}>Reset</button>
            </form>
        </>
    )
}

export default FormPage
