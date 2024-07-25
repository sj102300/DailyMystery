import { AxiosError, AxiosResponse } from "axios";
import { responseDTO } from "..";
import { apiClient } from "./apiClient";

export async function GetBackgroundImage(): Promise<string> {
<<<<<<< HEAD

    try{
        let response: AxiosResponse<responseDTO<{
            backgroundImageUrl: string;
        }>> = await apiClient.get(`/api/main/image`);

        if (response.data.statusCode === 200){
            return response.data.data.backgroundImageUrl;
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
        alert('배경 이미지 불러오기 실패');
        return '';
    }
}
=======
    try {
        let response: AxiosResponse<
            responseDTO<{
                backgroundImageUrl: string;
            }>
        > = await apiClient.get(`/api/main/image`);

        if (response.data.statusCode === 200) {
            return response.data.data.backgroundImageUrl;
        } else {
            throw AxiosError<{
                statusCode: number;
                message: string;
            }>;
        }
    } catch (err) {
        alert("배경 이미지 불러오기 실패");
        return "";
    }
}
>>>>>>> ryu
