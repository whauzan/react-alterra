import ListItem from './ListItem';

const ListPassenger = props => {
    const {data, hapusPengunjung, editPengunjung} = props;
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                <tbody>
                    {data?.map((item) => (
                        <ListItem
                            key={item.id}
                            data={item}
                            hapusPengunjung={hapusPengunjung}
                            editPengunjung={editPengunjung}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger;