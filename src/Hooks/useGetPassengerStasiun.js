import { useLazyQuery } from '@apollo/client';
import { LOAD_PASSENGERS_LAZY } from '../GraphQL/Query';
import { SUBS_PASSENGER } from '../GraphQL/Subscription';

export default function useGetPassengerStasiun() {
    const [
        getPassengerStasiun,
        {
            error: errorPassengerStasiun,
            loading: loadingPassengerStasiun,
            data: dataPassengerStasiun,
            subscribeToMore
        }
    ] = useLazyQuery(LOAD_PASSENGERS_LAZY);

    // console.log("ini tes", dataPassengerStasiun);

    const subscribePassengerStasiun = () => {
        subscribeToMore({
            document: SUBS_PASSENGER,
            updateQuery: (prev, { subscriptionData: {dataPassengerStasiun} }) => {
                return dataPassengerStasiun;
            }
        })
    }

    // console.log("ini tes2", dataPassengerStasiun);
    
    return { getPassengerStasiun, errorPassengerStasiun, loadingPassengerStasiun, dataPassengerStasiun, subscribePassengerStasiun };
}