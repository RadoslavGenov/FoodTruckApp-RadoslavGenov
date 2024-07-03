import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { COLUMNS } from './FoodTruckList.constants'
import { GET_FOOD_TRUCK_LIST, apiInstance } from '../../api'
import { FoodTruck } from './FoodTruckList.types'
import FoodTruckModal from '../../modals/FoodTruckModal/FoodTruckModal'

const FoodTruckList: React.FC = () => {
  const [data, setData] = useState([])
  const [foodTruck, setFoodTruck] = useState<FoodTruck | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(GET_FOOD_TRUCK_LIST)
        setData(response.data)
      } catch (error) {
        console.error('Error fetching food truck data:', error)
      }
    }

    fetchData()
  }, [])

  const handleRowClick = async (item: FoodTruck) => {
    try {
      const response = await apiInstance.get(
        `${GET_FOOD_TRUCK_LIST}/${item._id}`
      )
      setFoodTruck(response.data)
      setIsModalVisible(true)
    } catch (error) {
      console.error('Failed to fetch food truck details')
    }
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
    setFoodTruck(null)
  }

  return (
    <>
      <Table
        columns={COLUMNS}
        dataSource={data}
        rowKey="_id"
        onRow={(item) => ({
          onClick: () => handleRowClick(item)
        })}
      />

      {foodTruck && (
        <FoodTruckModal
          isOpen={isModalVisible}
          onClose={handleCloseModal}
          foodTruck={foodTruck}
        />
      )}
    </>
  )
}

export default FoodTruckList
