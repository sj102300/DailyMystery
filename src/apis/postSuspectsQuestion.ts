export async function postSuspectsQuestion(
    suspectNumber: number,
    inputValue: string,
) {
    let userId = localStorage.getItem("userId");
    if (!userId) {
        userId = "454";
    }

    try {
        const response = await fetch(
            `${import.meta.env.VITE_REACT_APP_BACK_PROXY}/api/suspects/${suspectNumber}/question`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                    // "Content-Type": "text/event-stream" 헤더를 원한다면 주석을 해제하세요
                },
                body: JSON.stringify({
                    userId: userId,
                    question: inputValue,
                }),
            },
        );

        if (response.ok && response.body) {
            return response;
        }
    } catch (error) {
        console.log(error);
    }
}
