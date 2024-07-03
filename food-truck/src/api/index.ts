import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_HOST_URI}:${process.env.REACT_APP_PORT}`

export const GET_FOOD_TRUCK_LIST = '/food-trucks'

export const apiInstance = axios.create({
  baseURL: BASE_URL
})
