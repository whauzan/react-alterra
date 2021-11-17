import "./Home.css"

const ListItem = (props) => {
    const { id, nama, umur, jenisKelamin } = props.data;
    const hapusPengunjung = props.hapusPengunjung;
    console.log(hapusPengunjung);

    return (
        <tr>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jenisKelamin}</td>
            <td className="removeBorder" onClick={() => hapusPengunjung(id)}><button>Hapus</button></td>
        </tr>
    )
}

export default ListItem;