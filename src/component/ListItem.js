import "./Home.css"
import PassengerEdit from "./PassengerEdit";

const ListItem = (props) => {
    const { id, nama, umur, jenisKelamin } = props.data;
    const hapusPengunjung = props.hapusPengunjung;
    const editPengunjung = props.editPengunjung;
    // console.log(props.data);
    // console.log(hapusPengunjung);

    return (
        <>
        <tr>
            {/* <td onClick={() => {}}>{id}</td> */}
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jenisKelamin}</td>
            <td className="removeBorder" onClick={() => hapusPengunjung(id)}><button>Hapus</button></td>
            <PassengerEdit id={id} data={props.data} editPengunjung={editPengunjung} />
            {/* <td className="removeBorder"><PassengerEdit data={props.data} editPengunjung={editPengunjung} /></td> */}
        </tr>
        </>
    )
}

export default ListItem;