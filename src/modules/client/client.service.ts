// /mnt/data/example.service.ts
import { clientRepository } from "./client.repository";

export const clientService = {
    getOrders: async (clientId: string) => {
        return clientRepository.getOrders(clientId);  // Calls the repository to get client orders
    },

    updateProfile: async (clientId: string, profileData: any) => {
        return clientRepository.updateProfile(clientId, profileData);  // Calls the repository to update profile
    },

    getDashboardData: async (clientId: string) => {
        return clientRepository.getDashboardData(clientId);  // Calls the repository to get dashboard data
    }
};