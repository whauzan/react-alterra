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

export const LOAD_PASSENGERS_LAZY = gql`
    query GetPassenger($idStasiun: Int!) {
        passenger(where: {idStasiun: {_eq: $idStasiun}}) {
            id
            nama
            jenisKelamin
            umur
            stasiun {
                namaStasiun
            }
        }
    }
`