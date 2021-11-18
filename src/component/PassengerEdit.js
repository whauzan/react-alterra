import { useState } from "react";
import "./Home.css";

function PassengerEdit(props) {
    // console.log(props);
  const [state, setState] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
    editing: true,
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.nama.trim() && state.umur && state.jenisKelamin) {
      const umur = state.umur;
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai");
      } else {
        const newData = {
            id: props.id,
            nama: state.nama,
            umur: state.umur,
            jenisKelamin: state.jenisKelamin,
        }
        props.editPengunjung(newData);

        setState({
          ...state,
          nama: "",
          umur: "",
          jenisKelamin: "Pria",
        });
      }
    } else {
      alert("Data masih ada yang kosong");
    }
  };

  const handleBukaInput = () => {
    setState({
      ...state,
      editing: false,
    });
  };

  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    });
  };

  let viewMode = {
    backgroundColor: "white",
		position: "absolute",
		padding: "10px",
		zIndex: "2",
  };
  let editMode = {};

  if (state.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input
          type="text"
          className="input-text"
          placeholder={props.data.nama}
          value={state.nama}
          name="nama"
          onChange={onChange}
        />
        <p>Masukkan Umur Anda</p>
        <input
          type="number"
          className="input-text"
          placeholder={props.data.umur}
          value={state.umur}
          name="umur"
          onChange={onChange}
        />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={onChange} name="jenisKelamin">
          <option value="Pria" selected>
            Pria
          </option>
          <option value="Wanita">Wanita</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Edit
      </button>
    </div>
  );
}

export default PassengerEdit;