import React, { useRef, useState } from 'react'
import styles from './FormPage.module.css'

function FormPage() {
    const initialData = {
        namaLengkap : "",
        email : "",
        noHandphone : "",
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

        if (name === "namaLengkap") {
            if (regex.test(value)) {
                setErrMsg("")
            } else {
                setErrMsg("Nama Lengkap Harus Berupa Huruf")
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
        console.log(errMsg);
        if (errMsg !== "") {
            alert("Terdapat data yang tidak sesuai")
        } else {
            alert(`Data Pendaftar "${data.namaLengkap}" Berhasil Diterima`)
        }
        e.preventDefault();
    }

    const resetData = () => {
        console.log(errMsg);
        setData(initialData)
        setErrMsg("")
    }

    return (
        <>
            <h1 style={{"textAlign":"center"}}>Pendaftaran Peserta Coding Bootcamp</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nama Lengkap:
                    <input type="text" name="namaLengkap" onChange={handleInput} value={data.namaLengkap} className={styles.input} required/>
                </label>
                <label>
                    Email:
                    <input type="email" name="email" onChange={handleInput} value={data.email} className={styles.input} required/>
                </label>
                <label>
                    No Handphone:
                    <input type="number" name="noHandphone" onChange={handleInput} value={data.noHandphone} className={styles.input}/>
                </label>
                <label>
                    Latar Belakang Pendidikan:
                    <input type="radio" name="tahunTerbit" onChange={handleInput} value={data.tahunTerbit} />
                    <label>IT</label>
                    <input type="radio" name="tahunTerbit" onChange={handleInput} value={data.tahunTerbit} />
                    <label>Non-IT</label>
                </label>
                <label>
                    Kelas Coding yang Dipilih:
                    <select type="text" name="kotaTerbit" onChange={handleInput} value={data.kotaTerbit} className={styles.input}>
                        <option>Coding BackEnd with Golang</option>
                        <option>Coding FrontEnd with ReactJS</option>
                        <option>Fullstack Developer</option>
                    </select>
                </label>
                <label>
                    Foto Surat Kesungguhan:
                    <input type="file" ref={fotoSampul} className={styles.input}/>
                </label>
                <label>Harapan Untuk Coding Bootcamp ini:
                    <textarea name="" id="" cols="30" rows="5" className={styles.input}></textarea>
                </label>
                {errMsg}
                <input type="submit" value="Submit" className={styles.btn}/>
                <button className={styles.btn} onClick={resetData}>Reset</button>
            </form>
        </>
    )
}

export default FormPage
