import axios, { AxiosError, AxiosResponse } from "axios";
import { responseDTO } from "..";
import { Result } from "./result.type";

export async function GetResult(): Promise<Result | null> {

    try{
        let response: AxiosResponse<responseDTO<Result>>
        = await  axios.get(`${import.meta.env.VITE_REACT_APP_BACK_URL}/api/main/result`);

        if(response.data.statusCode === 200){
            return response.data.data;
        }
        else{
            throw AxiosError<{
                statusCode: Number;
                message: String;
            }>
        }
    }
    catch(err){
        console.log(err);
        return null;
    }
}