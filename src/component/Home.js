import { useEffect, useState } from "react";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { LOAD_PASSENGERS, LOAD_PASSENGERS_LAZY } from '../GraphQL/Query';
import { DELETE_PASSENGER, INSERT_PASSENGER, UPDATE_PASSENGER } from "../GraphQL/Mutation";

function Home() {
    // const { error, loading, data } = useQuery(LOAD_PASSENGERS);
    const [getPassengerStasiun, {error, loading, data}] = useLazyQuery(LOAD_PASSENGERS_LAZY);
    const [deletePassenger, {loading: loadingDelete}] = useMutation(DELETE_PASSENGER, {
        refetchQueries: [LOAD_PASSENGERS_LAZY]
    });
    const [insertPassenger, {loading: loadingInsert}] = useMutation(INSERT_PASSENGER, {
        refetchQueries: [LOAD_PASSENGERS_LAZY]
    });
    const [editPassenger, {loading: loadingEdit}] = useMutation(UPDATE_PASSENGER, {
        refetchQueries: [LOAD_PASSENGERS_LAZY]
    });

    useEffect(() => {
        if (data) {
            setDataPassenger(data.passenger);
        }
        if (error) {
            console.log("tes",error);
            return null
        }
    }, [data, error])

    const [dataPassenger, setDataPassenger] = useState([]);
    const [id_stasiun, setStasiunID] = useState({idStasiun: null});

    const hapusPengunjung = (idx) => {
        deletePassenger({variables: {
            id: idx
        }})
    }

    const tambahPengunjung = (newUser) => {
        insertPassenger({variables: {
            nama: newUser.nama,
            umur: newUser.umur,
            jenisKelamin: newUser.jenisKelamin,
            idStasiun: id_stasiun
        }})
    }

    const editPengunjung = (editUser) => {
        // console.log(editUser);
        editPassenger({variables: {
            id: editUser.id,
            nama: editUser.nama,
            umur: editUser.umur,
            jenisKelamin: editUser.jenisKelamin
        }})
    }

    const onGetData = () => {
        getPassengerStasiun({variables: {
            idStasiun: id_stasiun
        }})
        setDataPassenger(data?.passenger)
    }

    const onChangeStasiunID = (e) => {
        if (e.target) {
            setStasiunID(e.target.value)
        }
    }

    return (
        <div>
            <Header />
            <input type="number" className="input-text" placeholder="ID Stasiun..." value={id_stasiun} onChange={onChangeStasiunID} />
            <button onClick={onGetData}>Get Data</button>
            {data? <h3>{`Stasiun ${data.passenger[0].stasiun.namaStasiun}`}</h3> : null}
            {data? <ListPassenger data={dataPassenger} hapusPengunjung={hapusPengunjung} editPengunjung={editPengunjung}/> : null}
            {data? <PassengerInput tambahPengunjung={tambahPengunjung}/> : null}
        </div>
    )
}

export default Home;