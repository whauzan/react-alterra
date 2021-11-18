import { useSubscription } from "@apollo/client";
import { SUBS_PASSENGER } from "../GraphQL/Subscription";

export default function useSubsPassenger({id_stasiun}) {
    const {
        data: dataSubsPassenger,
        loading: loadingSubsPassenger,
        error: errorSubsPassenger
    } = useSubscription(SUBS_PASSENGER,{variables: { idStasiun: id_stasiun }});

    console.log(id_stasiun);
    
    return { dataSubsPassenger, loadingSubsPassenger, errorSubsPassenger };
}