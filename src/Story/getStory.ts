import axios, { AxiosError, AxiosResponse } from "axios";
import { responseDTO } from "..";
import { Victim } from "../Intro/intro.types";

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

export async function GetStroy(): Promise<string[]> {

    try {
        let response: AxiosResponse<responseDTO<{
            storyLine: string;
        }>> = await axios.get(`${import.meta.env.VITE_REACT_APP_BACK_URL}/api/main/story`);

        if (response.data.statusCode === 200) {
            console.log(response.data.data);
            let data = splitToSentence(response.data.data.storyLine);
            return splitToSentence(response.data.data.storyLine);
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

export async function GetVictim(): Promise<Victim | null> {

    try{
        let response: AxiosResponse<responseDTO<Victim>>
        = await axios.get(`${import.meta.env.VITE_REACT_APP_BACK_URL}/api/main`);
        
        if (response.data.statusCode === 200){
            return response.data.data;
        }
        else{
            throw AxiosError<{
                statusCode: Number;
                message:string;
            }>
        }
    }
    catch(err){
        console.log(err);
        alert('피해자 정보 불러오기 실패');
        return null;
    }
}