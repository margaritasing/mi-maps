
import { useEffect, useReducer } from 'react'
import { getUserGeolocation } from '../../helpers'
import { PlacesContext } from './PlacesContext'
import { placesReducer } from './PlacesReducer'

export interface PlaceState {
  isLoading:boolean,
  userLocation?: [number, number]
}

const INITIAL_STATE: PlaceState = {
  isLoading: true,
  userLocation: undefined
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
     getUserGeolocation()
              .then( lnglat => dispatch({type:'setUserLocation', payload: lnglat  }) )
  }, [])
  
  return (
    <PlacesContext.Provider value={{
       ...state
    }}>
        { children }
    </PlacesContext.Provider>
  )
}
