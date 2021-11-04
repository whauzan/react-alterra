import ListItem from "./ListItem"

const ListPassenger = (props) => {
    const {data, hapusPengunjung} = props
    
    return (
        <div>
            <h1>Daftar Pengunjung</h1>
            <h3>Stasiun Pemalang</h3>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td style={{border: "1px solid black"}}>Nama</td>
                    <td style={{border: "1px solid black"}}>Umur</td>
                    <td style={{border: "1px solid black"}}>Jenis Kelamin</td>
                </thead>
                <tbody>
                    {data.map((passenger) => <ListItem key={passenger.id} item ={passenger} hapusPengunjung={hapusPengunjung}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger