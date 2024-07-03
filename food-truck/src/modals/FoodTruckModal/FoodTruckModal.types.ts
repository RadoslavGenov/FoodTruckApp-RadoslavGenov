import { FoodTruck } from '../../pages/FoodTruckList/FoodTruckList.types'

export type FoodTruckModalProps = Readonly<{
  isOpen: boolean
  onClose: () => void
  foodTruck: FoodTruck
}>
