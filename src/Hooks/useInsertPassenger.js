import { useMutation } from "@apollo/client";
import { INSERT_PASSENGER } from "../GraphQL/Mutation";

export default function useInsertPassenger() {
    const [insertPassenger, {loading: loadingInsert}] = useMutation(INSERT_PASSENGER);

    return { insertPassenger, loadingInsert };
}