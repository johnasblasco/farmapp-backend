// /mnt/data/delivery.service.ts
import { deliveryRepository } from "./delivery.repository";  // Ensure deliveryRepository is imported

export const deliveryService = {
    getDeliveries: async (riderId: string) => {
        return deliveryRepository.getDeliveries(riderId);  // Fetch deliveries for a specific rider
    },

    getAllDeliveries: async () => {
        return deliveryRepository.getAllDeliveries();  // Fetch all deliveries (admin)
    },

    updateStatus: async (deliveryId: string, status: string) => {
        return deliveryRepository.updateStatus(deliveryId, status);  // Update delivery status
    },

    assignRider: async (deliveryId: string, riderId: string) => {
        return deliveryRepository.assignRider(deliveryId, riderId);  // Assign a rider to a delivery
    }
};