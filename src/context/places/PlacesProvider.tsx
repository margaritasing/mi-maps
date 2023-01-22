
import { useEffect, useReducer } from 'react'
import { searchApi } from '../../apis'
import { getUserGeolocation } from '../../helpers'
import { Feature, PlacesResponse } from '../../interfaces/places'
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

  const searchPlacesByTerm = async( query: string ): Promise<Feature[]> => {
    if ( query.length === 0 ) {
        dispatch({ type: 'setPlaces', payload: [] });
        return [];
    }
    if ( !state.userLocation ) throw new Error('No hay ubicación del usuario');

    dispatch({ type: 'setLoadingPlaces' });

    const resp = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
        params: {
            proximity: state.userLocation.join(',')
        }
    });

    dispatch({ type: 'setPlaces', payload: resp.data.features });
    return resp.data.features;
}

  
  return (
    <PlacesContext.Provider value={{
       ...state,

      // Methods
      searchPlacesByTerm
    }}>
        { children }
    </PlacesContext.Provider>
  )
}
