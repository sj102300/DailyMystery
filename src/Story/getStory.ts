import axios, { AxiosError, AxiosResponse } from "axios";
import { responseDTO } from "..";

function splitToSentence(storyLine: string): Array<string> {
    const sentenceEndings = /([.!?])\s*(?=[A-Z가-힣])/g;
    const sentences = storyLine.split(sentenceEndings)
        .reduce((acc: string[], part: string, index: number) => {
            if (index % 2 === 0) {
                // 짝수 인덱스는 문장 부분
                acc.push(part);
            } else {
                // 홀수 인덱스는 구두점 부분
                acc[acc.length - 1] += part;
            }
            return acc;
        }, [])
    return sentences;
}

export async function GetStroy(): Promise<Array<string>> {

    try {
        let response: AxiosResponse<responseDTO<{
            storyLine: string;
        }>> = await axios.get(`${import.meta.env.VITE_REACT_APP_BACK_URL}/api/main/story`);

        if (response.data.statusCode === 200) {
            console.log(response.data.data);
            // return splitToSentence(response.data.data.storyLine);
            return splitToSentence("오늘 밤 눈이 내리는 대학교 캠퍼스 도서관 앞에서 신비로운 사건이 발생했다. 도서관을 나가는 학생들이 흥분된 목소리로 발을 구르던 그 시각, 캠퍼스에서 인기 많은 역사학과 교수 김현우가 갑작스럽게 쓰러져 있었다. 눈이 계속 내려 주위의 흔적은 금방 사라졌지만, 현장에는 교수가 남긴 것으로 추정되는 작은 노트 한 권이 발견되었다. 노트 안에는 일련의 암호와도 같은 메모들이 적혀 있었으며, 일련의 이상한 발자국들이 얼핏 보였다. 교수의 쓰러진 직후, 학생 이수민이 발견하고 도서관 경비원에게 알리며 사건은 긴박하게 번졌다. 경찰이 급히 출동해 현장을 조사 중이며, 이 노트와 발자국이 사건의 중요한 단서가 될 것으로 보인다.");
        }
        else {
            throw AxiosError<{
                statusCode: number;
                message: string;
            }>
        }
    }
    catch (err) {
        console.log(err);
        alert('스토리 라인 불러오기 실패');
        return [];
    }

}