import { AxiosError, AxiosResponse } from "axios";
import { responseDTO, Suspect } from "..";
import { apiClient } from '../apis/apiClient';

export async function GetSuspectsInfo(): Promise<Suspect[]> {

    try{
        let response: AxiosResponse<responseDTO<Suspect[]>>
        = await apiClient.get(`/api/suspects`);

        if(response.data.statusCode === 200){
            console.log(response.data.data);
            return response.data.data;
        }
        else{
            throw AxiosError<{
                statusCode:number;
                message: string;
            }>
        }
    }
    catch(err){
        console.log(err);
        alert('용의자 정보 불러오기 실패');
        return [];
    }
}