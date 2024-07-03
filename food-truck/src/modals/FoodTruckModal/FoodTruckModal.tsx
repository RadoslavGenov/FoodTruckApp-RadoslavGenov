import React from 'react'
import { Modal, Descriptions } from 'antd'
import { FoodTruckModalProps } from './FoodTruckModal.types'

const FoodTruckModal: React.FC<FoodTruckModalProps> = ({
  isOpen,
  onClose,
  foodTruck
}) => (
  <Modal
    title={foodTruck ? foodTruck.applicant : 'Food Truck Details'}
    open={isOpen}
    onCancel={onClose}
    footer={null}
  >
    <Descriptions bordered layout="horizontal" column={1}>
      <Descriptions.Item label="Facility Type">
        {foodTruck.facilityType}
      </Descriptions.Item>
      <Descriptions.Item label="Location Description">
        {foodTruck.locationDescription}
      </Descriptions.Item>
      <Descriptions.Item label="Address">{foodTruck.address}</Descriptions.Item>
      <Descriptions.Item label="Food Items">
        {foodTruck.foodItems}
      </Descriptions.Item>
      <Descriptions.Item label="Latitude">
        {foodTruck.latitude}
      </Descriptions.Item>
      <Descriptions.Item label="Longitude">
        {foodTruck.longitude}
      </Descriptions.Item>
    </Descriptions>
  </Modal>
)

export default FoodTruckModal
