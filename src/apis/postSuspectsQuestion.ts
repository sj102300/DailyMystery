import axios from "axios";

export async function postSuspectsQuestion(
    suspectNumber: number,
    inputValue: string,
) {
    const userId = localStorage.getItem("userId");

    try {
        const response = await axios.post(
            `${import.meta.env.VITE_REACT_APP_BACK_URL}/api/suspects/${suspectNumber}/question`,
            {
                userId: userId,
                question: inputValue,
            },
        );

        console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
    }
}
