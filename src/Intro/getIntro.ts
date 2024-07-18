import { AxiosError, AxiosResponse } from "axios";
import { DMInfo } from "./intro.types";
import { responseDTO } from "..";
import { apiClient } from "../apis/apiClient";


export async function getDMInfo(): Promise<DMInfo> {

    try{
        let response: AxiosResponse<responseDTO<DMInfo>> 
        = await apiClient.get(`/api/main`);
        if (response.data.statusCode === 200) {
            return response.data.data;
        }
        else {
            throw AxiosError<{
                statusCode: number;
                message: string;
            }>
        }
    }
    catch(err){
        console.log(err);
        alert('오늘의 미스터리가 없습니다!');
        return {
            weather: '',
            place: '',
            time: ''
        };
    }
}

