import { useState } from "react"

function PassengerInput() {
    const [data, setData] = useState({
        nama : "",
        umur : "",
        jenisKelamin : "Pria"
    })

    const [editing, setEditing] = useState(true)

    const onChange = e => {
        setData({...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const formIsNotEmpty = data.nama && data.umur && data.jenisKelamin
        if (formIsNotEmpty) {
            const newData = {
                nama : data.nama,
                umur : data.umur,
                jenisKelamin : data.jenisKelamin
            }

            props.tambahPengunjung(newData)
            setData({
                nama : "",
                umur : "",
                jenisKelamin : "Pria"
            })
        } else {
            alert("Data masih ada yang kosong")
        }
    }

    handleBukaInput = () => {
        this.setState({
            editing : false
        })
    }

    handleTutupInput = () => {
        this.setState({
            editing : true
        })
    }

    render() {
        const viewMode = {};
        const editMode = {};

        if (data.editing) {
            viewMode.display = "none";
        } else {
            editMode.display = "none";
        }

        return (
            <div style={{marginTop: "20px"}}>
                <div onSubmit={() => {}} style={viewMode}>
                    <p>Masukkan Nama Anda</p>
                    <input type="text" placeholder="Nama anda..." value={data.nama} name="nama" onChange={this.onChange}></input>

                    <p>Masukkan Umur Anda</p>
                    <input type="number" placeholder="Umur anda..." value={data.umur} name="umur" onChange={this.onChange}></input>

                    <p>Masukkan Jenis Kelamin Anda</p>
                    <select onChange={this.onChange} name="jenisKelamin">
                        <option value="Pria" selected>Pria</option>
                        <option value="Wanita">Wanita</option>
                    </select>

                    <button onClick={this.handleSubmit}>Submit</button>
                    <button onClick={this.handleTutupInput}>Selesai</button>
                </div>
                <button onClick={this.handleBukaInput} style={editMode}>Masukkan Nama Penumpang</button>
            </div>
        )
    }
}

export default PassengerInput