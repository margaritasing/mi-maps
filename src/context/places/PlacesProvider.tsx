import React from 'react'

export interface PlaceState {
  isLoading:boolean,
  userLocation?: [number, number]
}

const INITIAL_STATE: PlaceState = {
  isLoading: true,
  userLocation: undefined
}

export const Placesprovider = () => {
  return (
    <div>Placesprovider</div>
  )
}
