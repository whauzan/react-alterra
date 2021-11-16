import ListItem from './ListItem';

const ListPassenger = props => {
    const {data, hapusPengunjung} = props;
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
                    {data?.map((item, i) => (
                        <ListItem
                            key={i}
                            data={item}
                            // hapusPengunjung={hapusPengunjung}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger;