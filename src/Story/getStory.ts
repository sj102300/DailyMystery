import { AxiosError, AxiosResponse } from "axios";
import { responseDTO } from "..";
import { Victim } from "../Intro/intro.types";
import { apiClient } from "../apis/apiClient";

function splitToSentence(storyLine: string): Array<string> {
    const sentenceEndings = /([.!?])\s*(?=[A-Z가-힣])/g;
<<<<<<< HEAD
    const sentences = storyLine.split(sentenceEndings)
=======
    const sentences = storyLine
        .split(sentenceEndings)
>>>>>>> ryu
        .reduce((acc: string[], part: string, index: number) => {
            if (index % 2 === 0) {
                // 짝수 인덱스는 문장 부분
                acc.push(part);
            } else {
                // 홀수 인덱스는 구두점 부분
                acc[acc.length - 1] += part;
            }
            return acc;
<<<<<<< HEAD
        }, [])
=======
        }, []);
>>>>>>> ryu
    return sentences;
}

export async function GetStroy(): Promise<string[]> {
<<<<<<< HEAD

    try {
        let response: AxiosResponse<responseDTO<{
            storyLine: string;
        }>> = await apiClient.get(`/api/main/story`);

        if (response.data.statusCode === 200) {
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
        = await apiClient.get(`/api/main`);
        
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
=======
    try {
        let response: AxiosResponse<
            responseDTO<{
                storyLine: string;
            }>
        > = await apiClient.get(`/api/main/story`);

        if (response.data.statusCode === 200) {
            return splitToSentence(response.data.data.storyLine);
        } else {
            throw AxiosError<{
                statusCode: number;
                message: string;
            }>;
        }
    } catch (err) {
        console.log(err);
        alert("스토리 라인 불러오기 실패");
        return [];
    }
}

export async function GetVictim(): Promise<Victim | null> {
    try {
        let response: AxiosResponse<responseDTO<Victim>> =
            await apiClient.get(`/api/main`);

        if (response.data.statusCode === 200) {
            return response.data.data;
        } else {
            throw AxiosError<{
                statusCode: number;
                message: string;
            }>;
        }
    } catch (err) {
        console.log(err);
        alert("피해자 정보 불러오기 실패");
        return null;
    }
}
>>>>>>> ryu
