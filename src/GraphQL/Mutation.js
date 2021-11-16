import { gql } from '@apollo/client'

export const INSERT_PASSENGER = gql`
  mutation insertPassenger($idStasiun: Int!, $nama: String!, $umur: Int!, $jenisKelamin: String!) {
    insert_passenger(objects: {idStasiun: $idStasiun, jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur}) {
      affected_rows
    }
  }
`

export const DELETE_PASSENGER = gql`
  mutation deletePassenger($id: uuid!) {
    delete_passenger_by_pk(id: $id) {
      id
    }
  }
`