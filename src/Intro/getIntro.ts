import axios, { AxiosError, AxiosResponse } from "axios";
import { DMInfo } from "./intro.types";
import { responseDTO } from "..";


export async function getDMInfo(): Promise<DMInfo> {

    try{
        let response: AxiosResponse<responseDTO<DMInfo>> = await axios.get(`${import.meta.env.VITE_REACT_APP_BACK_URL}/api/main`);
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

