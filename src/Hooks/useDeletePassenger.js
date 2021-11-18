import { useMutation } from "@apollo/client";
import { DELETE_PASSENGER } from "../GraphQL/Mutation";

export default function useDeletePassenger() {
    const [deletePassenger, {loading: loadingDelete}] = useMutation(DELETE_PASSENGER);

    return { deletePassenger, loadingDelete };
}