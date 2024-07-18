import { apiClient } from "./apiClient";

export async function getUserChange() {
    let userId = localStorage.getItem("userId");
    if (!userId) {
        userId = "454";
    }
    try {
        const response = await apiClient.get(
            `/api/user/chance`,
            {
                params: {
                    userId: userId,
                },
            },
        );

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}
