import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useQuery } from '@apollo/client';
import { LOAD_PASSENGERS } from '../GraphQL/Query';

function Home() {
    const { error, loading, data } = useQuery(LOAD_PASSENGERS);

    useEffect(() => {
        if (data) {
            setDataPassenger(data.passenger);
        }
        if (error) {
            console.log(error);
            return null
        }
    }, [data])

    const [dataPassenger, setDataPassenger] = useState([])

    const hapusPengunjung = (id) => {
        setDataPassenger((oldData) => oldData.filter((item) => item.id !== id))
    }

    const tambahPengunjung = (newUser) => {
        const newPengunjung = {id : uuidv4(), ...newUser}
        setDataPassenger((oldData) => [...oldData, newPengunjung])
    }

    return (
        <div>
            <Header />
            <ListPassenger data={dataPassenger} hapusPengunjung={hapusPengunjung}/>
            <PassengerInput tambahPengunjung={tambahPengunjung}/>
        </div>
    )
    
}

export default Home;