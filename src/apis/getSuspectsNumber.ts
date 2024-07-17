import axios from "axios";

export async function getSuspectsNumber(suspectNumber: number) {
    const userId = localStorage.getItem("userId");
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_REACT_APP_BACK_URL}/api/suspects/${suspectNumber}`,
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
