import axios from "axios";

export async function getUserChange() {
    let userId = localStorage.getItem("userId");
    if (!userId) {
        userId = "454";
    }
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_REACT_APP_BACK_URL}/api/user/chance`,
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
