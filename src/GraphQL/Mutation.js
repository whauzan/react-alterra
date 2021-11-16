import { gql } from '@apollo/client'

export const INSERT_PASSENGER = gql `
    mutation insertPassenger($nama: String!, $jenisKelamin: String!, $umur: Int!) {
        insert_passenger_one(object: {jenisKelamin: $jenisKelamin, nama: $nama, umur: $umur}) {
          id
        }
    }
`