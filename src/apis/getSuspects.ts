import axios from "axios";

export async function getSuspects() {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_REACT_APP_BACK_URL}/api/suspects`,
        );

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}
