import axios, { AxiosError, AxiosResponse } from "axios";
import { responseDTO, Suspect } from "..";


export async function GetSuspectsInfo(): Promise<Suspect[]> {

    try{
        let response: AxiosResponse<responseDTO<Suspect[]>>
        = await axios.get(`${import.meta.env.VITE_REACT_APP_BACK_URL}/api/suspects`);

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