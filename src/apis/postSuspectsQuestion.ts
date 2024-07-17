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
<<<<<<< HEAD
            return response;
=======
            const reader = response.body

                ?.pipeThrough(new TextDecoderStream())
                .getReader();

            const done = false;

            while (!done) {
                const { value, done: readerDone } = await reader.read();
                if (readerDone) break;

                const lines = value.split("\n");
                for (const line of lines) {
                    const trimmedLine = line.trim();

                    if (trimmedLine) {
                        let jsonString = trimmedLine;
                        if (trimmedLine.startsWith("data:")) {
                            jsonString = trimmedLine.slice(5).trim();
                        }
                        let data;
                        if (jsonString && jsonString !== "[DONE]")
                            data = JSON.parse(jsonString);

                        if (data.choices && data.choices[0].delta.content)
                            return data.choices[0].delta.content;
                    }
                }

            }
>>>>>>> cb00040184a86b88455ff40e1edba13e624bf612
        }
    } catch (error) {
        console.log(error);
    }
}
