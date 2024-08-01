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
            `${window.location.hostname === "localhost"
                ? import.meta.env.VITE_REACT_APP_BACK_URL
                : import.meta.env.VITE_REACT_APP_BACK_PROXY
            }/api/suspects/${suspectNumber}/question`,
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

export async function getSuspectAnswer(
    suspectNumber: number,
    inputValue: string,
    setChatList: (updater: (prev: string[]) => string[]) => void
) {
    let userId = localStorage.getItem("userId");

    try {
        const eventSource = new EventSource(`${window.location.hostname === "localhost"
            ? import.meta.env.VITE_REACT_APP_BACK_URL
            : import.meta.env.VITE_REACT_APP_BACK_PROXY
            }/api/suspects/question?suspectNumber=${suspectNumber}&question=${inputValue}&userId=${userId}`);

            setChatList((prev)=>[...prev, '']);

        eventSource.onmessage = function (event) {
            if (event.data === '[DONE]'){
                eventSource.close();
            }
            else{
                const data = JSON.parse(event.data);

                if (data.choices && data.choices.length > 0){
                    let content = data.choices[0].delta.content;
    
                    if (content){
                        setChatList((prev) => {
                            const newList = [...prev];
                            newList[newList.length - 1] += content
                            return newList;
                        })
                    }
                }
            }
            
        };

        // eventSource.close();
        
    }
    catch (error) {
        console.log(error);
    }
}