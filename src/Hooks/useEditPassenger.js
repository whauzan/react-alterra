import { useMutation } from "@apollo/client";
import { UPDATE_PASSENGER } from "../GraphQL/Mutation";

export default function useEditPassenger() {
    const [editPassenger, {loading: loadingEdit}] = useMutation(UPDATE_PASSENGER);

    return { editPassenger, loadingEdit };
}