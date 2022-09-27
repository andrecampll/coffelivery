import { useEffect, useState } from 'react'
import { axiosClient } from '../services'

type Address = {
  city: string
  state: string
}

type Geolocation = {
  address: {
    road: string
    city: string
    state: string
  }
}

export const useGeolocation = () => {
  const [location, setLocation] = useState<[number, number]>([0, 0])
  const [address, setAddress] = useState<Address>({
    city: '',
    state: '',
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      setLocation([latitude, longitude])
    })
  }, [])

  useEffect(() => {
    if (location[0]) {
      axiosClient
        .get<Geolocation>(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location[0]}&lon=${location[1]}&zoom=18&addressdetails=1`,
        )
        .then((response) => {
          setAddress({
            city: response.data.address.city,
            state: response.data.address.state,
          })
        })
    }
  }, [location])

  return {
    address,
  }
}
