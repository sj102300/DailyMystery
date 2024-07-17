import axios, { AxiosError, AxiosResponse } from "axios";
import { responseDTO } from "../..";
import { Evidence } from "./evidence.type";

export async function GetEvidences(): Promise<Array<Evidence>> {
    try {
        let response: AxiosResponse<responseDTO<Array<Evidence>>> =
            await axios.get(
                `${import.meta.env.VITE_REACT_APP_BACK_URL}/api/evidences`,
            );

<<<<<<< HEAD
        if (response.data.statusCode === 200) {
=======
    try{
        let response: AxiosResponse<responseDTO<Evidence[]>>
         = await axios.get(`${import.meta.env.VITE_REACT_APP_BACK_URL}/api/evidences`)

         if (response.data.statusCode === 200){
>>>>>>> cb00040184a86b88455ff40e1edba13e624bf612
            console.log(response.data);
            return response.data.data;
        } else {
            throw AxiosError<{
                statusCode: number;
                message: string;
            }>;
        }
    } catch (err) {
        console.log(err);
        alert("증거 물품 불러오기 실패");
        return [];
    }
}
