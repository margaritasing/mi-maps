import { useContext, useLayoutEffect, useRef } from "react"
import { Map } from "mapbox-gl";
import { MapContext, PlacesContext } from "../context"
import { Loading } from "./Loading"

import '../index.css';


export const MapView = () => {
    const { isLoading, userLocation} = useContext( PlacesContext );
    const { setMap } = useContext( MapContext)
    const mapDiv = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
      if (!isLoading ) {
        const map = new Map({
          container: mapDiv.current!, // container ID
          style: 'mapbox://styles/mapbox/streets-v12', // style URL
          center: userLocation, // [-74.5, 40] starting position [lng, lat]
          zoom: 14, // starting zoom
      })
    
      setMap(map)
    }

   
    }, [isLoading])

    if (isLoading) {
        return (<Loading/>)        
    }
  return (
    <div ref={ mapDiv }
     style={{     
      height:'100vh',
      width:'100vw',
      position:'fixed',
      top:0,
      left:0
     }}
    >
       { userLocation?.join(',')  }
    </div>
  )
}
