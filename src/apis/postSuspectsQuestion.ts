export async function postSuspectsQuestion(
    suspectNumber: number,
    inputValue: string,
) {
    const userId = localStorage.getItem("userId");

    try {
        const response = await fetch(
            `${import.meta.env.VITE_REACT_APP_BACK_URL}/api/suspects/${suspectNumber}/question`,
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
            const reader = response.body

                .pipeThrough(new TextDecoderStream())
                .getReader();

            // eslint-disable-next-line no-constant-condition
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                console.log(value);
            }
        }
    } catch (error) {
        console.log(error);
    }
}
