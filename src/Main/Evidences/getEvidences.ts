import axios, { AxiosError, AxiosResponse } from "axios";
import { responseDTO } from "../..";
import { Evidence } from "./evidence.type";


export async function GetEvidences(): Promise<Array<Evidence>> {

    try{
        let response: AxiosResponse<responseDTO<Evidence[]>>
         = await axios.get(`${import.meta.env.VITE_REACT_APP_BACK_URL}/api/evidences`)

         if (response.data.statusCode === 200){
            console.log(response.data);
            return response.data.data;
         }
         else{
            throw AxiosError<{
                statusCode: Number;
                message: string;
            }>
         }
    }
    catch(err){
        console.log(err);
        alert('증거 물품 불러오기 실패');
        return [];
    }
}