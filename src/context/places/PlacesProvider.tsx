import React from 'react'

export interface PlaceState {
  isLoading:boolean,
  userLocation?: [number, number]
}

const INITIAL_STATE: PlaceState = {
  isLoading: true,
  userLocation: undefined
}

export const PlacesProvider = () => {
  return (
    <div>Placesprovider</div>
  )
}
