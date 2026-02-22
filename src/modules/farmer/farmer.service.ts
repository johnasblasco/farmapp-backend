// /mnt/data/farmer.service.ts
import { farmerRepository } from "./farmer.repository";  // Ensure farmerRepository is imported

export const farmerService = {
    // Fetch orders for the farmer
    getOrders: async (farmerId: string) => {
        return farmerRepository.getOrders(farmerId);  // Calls the repository to get orders for the farmer
    },

    // Mark order as ready
    markReady: async (id: string) => {
        return farmerRepository.updateOrderStatus(id, "Ready");  // Calls the repository to mark the order as "Ready"
    },

    // Mark order as picked up
    markPickedUp: async (id: string) => {
        return farmerRepository.updateOrderStatus(id, "Picked Up");  // Calls the repository to mark the order as "Picked Up"
    },

    // Cancel order
    cancelOrder: async (id: string) => {
        return farmerRepository.updateOrderStatus(id, "Cancelled");  // Calls the repository to mark the order as "Cancelled"
    },

    // Delete order
    deleteOrder: async (id: string) => {
        return farmerRepository.deleteOrder(id);  // Calls the repository to delete the order
    },

    // Fetch farmer profile
    getProfile: async (farmerId: string) => {
        return farmerRepository.getProfile(farmerId);  // Calls the repository to fetch the farmer's profile
    },

    // Update farmer profile
    updateProfile: async (farmerId: string, data: any) => {
        return farmerRepository.updateProfile(farmerId, data);  // Calls the repository to update the farmer's profile
    },
};