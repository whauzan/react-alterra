import { gql } from '@apollo/client'

export const SUBS_PASSENGER = gql`
    subscription SubsPassenger($idStasiun: Int!) {
        passenger(where: {idStasiun: {_eq: $idStasiun}}) {
            id
            idStasiun
            jenisKelamin
            nama
            umur
        }
    }
`