import "./Home.css"
import { useQuery, gql } from '@apollo/client'
// import { LOAD_PASSENGERS } from '../GraphQL/Query'
import { useEffect, useState } from "react";

// const ListItem = (props) => {

//     const { id, nama, umur, jenisKelamin } = props.data

//     return (
//         <tr>
//             <td>{nama}</td>
//             <td>{umur}</td>
//             <td>{jenisKelamin}</td>
//             <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td>
//         </tr>
//     )
// }

const LOAD_PASSENGERS = gql`
query getAllPassenger {
    passenger {
        id
        jenisKelamin
        nama
        umur
    }
}
`

const ListItem = (props) => {

    const { error, loading, data } = useQuery(LOAD_PASSENGERS);
    // const [passengers, setPassengers] = useState([]);

    console.log('data',data);

    return (
        // <tr>
        //     <td>{nama}</td>
        //     <td>{umur}</td>
        //     <td>{jenisKelamin}</td>
        //     <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td>
        // </tr>
        <h1>Halo</h1>
    )
}

export default ListItem;