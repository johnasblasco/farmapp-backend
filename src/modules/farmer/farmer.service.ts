import { farmerRepository } from "./farmer.repository";

export const farmerService = {
    getOrders: async () => {
        return farmerRepository.getOrders();
    },

    markReady: async (id: string) => {
        return farmerRepository.updateOrderStatus(id, "Ready");
    },

    markPickedUp: async (id: string) => {
        return farmerRepository.updateOrderStatus(id, "Picked Up");
    },

    cancelOrder: async (id: string) => {
        return farmerRepository.updateOrderStatus(id, "Cancelled");
    },

    deleteOrder: async (id: string) => {
        return farmerRepository.deleteOrder(id);
    },

    getProfile: async (id: string) => {
        return farmerRepository.getProfile(id);
    },

    updateProfile: async (id: string, data: any) => {
        return farmerRepository.updateProfile(id, data);
    },
};