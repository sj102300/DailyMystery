import axios from "axios";

export async function getSuspects(suspectNumber: number) {
    const userId = localStorage.getItem("userId");

    const params = {
        userId: userId,
    };

    try {
        const response = await axios.get(
            `${import.meta.env.VITE_REACT_APP_BACK_URL}/api/suspects/${suspectNumber}`,
            {
                params: params,
            },
        );

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}
