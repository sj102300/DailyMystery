import { AxiosError, AxiosResponse } from "axios";
import { apiClient } from "../apis/apiClient";

export async function PostNickname(nickname: string): Promise<number> {

    try {
        let body = {
            nickname: nickname
        }
    
       let response: AxiosResponse<{
        statusCode: number;
        message: string;
        data: {
            userId: number;
        };
       }> = await apiClient.post(`/api/user`, body);

       if(response.data.statusCode === 200){
        return response.data.data.userId;
       }
       else{
        throw AxiosError<{
            statusCode: number;
            message: string;
        }>
       }

    }
    catch(err){
        console.log(err);
        alert('중복된 닉네임입니다!')
        return -1;
    }
    

}