import { deliveryRepository } from "./delivery.repository";

export const deliveryService = {

    getAvailable: async () => {
        return deliveryRepository.getAvailable();
    },

    acceptTask: async (taskId: string, riderId: string) => {
        return deliveryRepository.accept(taskId, riderId);
    },

    completeTask: async (taskId: string) => {
        return deliveryRepository.complete(taskId);
    },

    getHistory: async (riderId: string) => {
        return deliveryRepository.history(riderId);
    }
};