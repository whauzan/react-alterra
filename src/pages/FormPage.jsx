import React, { useRef, useState } from 'react'
import styles from './FormPage.module.css'

function FormPage() {
    const initialData = {
        namaLengkap : "",
        email : "",
        noHandphone : "",
        pendidikan : "",
        kelas : "",
        harapan : "",
    }

    const initialError = {
        nama : "",
        email : "",
        noHandphone : "",
    }

    const [data, setData] = useState(initialData);
    const regex = /^[A-Za-z ]*$/;
    const emailRegex = /\S+@\S+\.\S+/;
    const [errMsg, setErrMsg] = useState(initialError);
    const fotoSampul = useRef(null);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "namaLengkap") {
            if (regex.test(value)) {
                errMsg.nama = ""
            } else {
                errMsg.nama = "Nama Lengkap Harus Berupa Huruf"
            }
            // setErrMsg(errMsg)
        }

        if (name === "email") {
            if (emailRegex.test(value)) {
                errMsg.email = ""
            } else {
                errMsg.email = "Email Tidak Sesuai"
            }
            // setErrMsg(errMsg)
        }

        if (name === "noHandphone") {
            if (value.length >= 9 && value.length <= 14) {
                errMsg.noHandphone = ""
            } else {
                errMsg.noHandphone = "No Handphone Tidak Sesuai"
            }
            
        }

        setErrMsg(errMsg)
        setData({
            ...data,
            [name] : value
        })
        // console.log("data", data);
    }

    // const handleRadio = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     setData({
    //         ...data,
    //         [name] : value
    //     })
    // }

    // const handleSelect = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     setData({
    //         ...data,
    //         [name] : value
    //     })
    // }

    const handleSubmit = (e) => {
        console.log(errMsg);
        if (errMsg.nama !== "" || errMsg.email !== "" || errMsg.noHandphone !== "") {
            alert("Terdapat data yang tidak sesuai")
            e.preventDefault();
        } else {
            alert(`Data Pendaftar "${data.namaLengkap}" Berhasil Diterima`)
            setData(initialData)
        }   
    }

    const resetData = () => {
        console.log(errMsg);
        setData(initialData)
        setErrMsg(initialError)
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
                    <input type="number" name="noHandphone" onChange={handleInput} value={data.noHandphone} className={styles.input} required/>
                </label>
                <label className={styles.input}>
                    Latar Belakang Pendidikan: <br />
                    <input type="radio" name="pendidikan" onChange={handleInput} value="IT" required/>
                    <label className={styles.input}>IT</label>
                    <input type="radio" name="pendidikan" onChange={handleInput} value="Non-IT" />
                    <label className={styles.input}>Non-IT</label>
                </label>
                <label>
                    Kelas Coding yang Dipilih:
                    <select type="text" name="kelas" onChange={handleInput} value={data.kelas} className={styles.input} required>
                        <option value="">Pilih Salah Satu Program</option>
                        <option value="Coding BackEnd with Golang" required>Coding BackEnd with Golang</option>
                        <option value="Coding FrontEnd with ReactJS">Coding FrontEnd with ReactJS</option>
                        <option value="Fullstack Developer">Fullstack Developer</option>
                    </select>
                </label>
                <label>
                    Foto Surat Kesungguhan:
                    <input type="file" ref={fotoSampul} className={styles.input} required/>
                </label>
                <label>Harapan Untuk Coding Bootcamp ini:
                    <textarea name="harapan" cols="30" rows="5" value={data.harapan} onChange={handleInput} className={styles.input}></textarea>
                </label>
                <ul>
                    <li style={errMsg.nama ? {color : 'red'} : {display:'none'}}>{errMsg.nama}</li>
                    <li style={errMsg.email ? {color : 'red'} : {display:'none'}}>{errMsg.email}</li>
                    <li style={errMsg.noHandphone ? {color : 'red'} : {display:'none'}}>{errMsg.noHandphone}</li>
                </ul>
                <div className={styles.btn_container}>
                    <input type="submit" value="Submit" onSubmit={handleSubmit} className={styles.btn}/>
                    <button className={styles.btn} onClick={resetData}>Reset</button>
                </div>
            </form>
        </>
    )
}

export default FormPage
