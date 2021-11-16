import { gql } from '@apollo/client'

export const LOAD_PASSENGERS = gql`
    query getAllPassenger {
        passenger {
            id
            jenisKelamin
            nama
            umur
        }
    }
`