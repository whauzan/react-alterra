import { useEffect, useState } from "react";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import useGetPassengerStasiun from "../Hooks/useGetPassengerStasiun";
import useSubsPassenger from "../Hooks/useSubsPassenger";
import useDeletePassenger from "../Hooks/useDeletePassenger";
import useInsertPassenger from "../Hooks/useInsertPassenger";
import useEditPassenger from "../Hooks/useEditPassenger";

function Home() {
    // const { error, loading, data } = useQuery(LOAD_PASSENGERS);
    
    const [dataPassenger, setDataPassenger] = useState([]);
    const [id_stasiun, setStasiunID] = useState({idStasiun: null});

    const { getPassengerStasiun, errorPassengerStasiun, loadingPassengerStasiun, dataPassengerStasiun, subscribePassengerStasiun } = useGetPassengerStasiun();
    const { dataSubsPassenger, loadingSubsPassenger, errorSubsPassenger } = useSubsPassenger(id_stasiun);
    const { deletePassenger, loadingDelete } = useDeletePassenger();
    const { insertPassenger, loadingInsert } = useInsertPassenger();
    const { editPassenger, loadingEdit } = useEditPassenger();
    // console.log(dataPassenger);

    useEffect(() => {
        if (dataPassengerStasiun) {
            subscribePassengerStasiun();
            setDataPassenger(dataPassengerStasiun?.passenger);
            // console.log("tes 3", dataPassengerStasiun);
        }
        // if (dataSubsPassenger) {
        //     // subscribePassengerStasiun();
        //     setDataPassenger(dataSubsPassenger?.passenger);
        //     console.log("tes 4", dataSubsPassenger);
        // }
        if (errorPassengerStasiun || errorSubsPassenger) {
            console.log("error Subs",errorSubsPassenger);
            console.log("error fetch", errorPassengerStasiun);
            return null
        }
    }, [dataPassengerStasiun, errorPassengerStasiun, errorSubsPassenger])

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
        setDataPassenger(dataPassengerStasiun?.passenger)
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
            {dataPassengerStasiun? <h3>{`Stasiun ${dataPassengerStasiun.passenger[0].stasiun.namaStasiun}`}</h3> : null}
            {dataPassengerStasiun? <ListPassenger data={dataPassenger} hapusPengunjung={hapusPengunjung} editPengunjung={editPengunjung}/> : null}
            {dataPassengerStasiun? <PassengerInput tambahPengunjung={tambahPengunjung}/> : null}
        </div>
    )
}

export default Home;