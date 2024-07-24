import { AxiosError, AxiosResponse } from "axios";
import { responseDTO } from "../..";
import { Evidence } from "./evidence.type";
import { apiClient } from "../../apis/apiClient";

export async function GetEvidences(): Promise<Array<Evidence>> {
    try {
        let response: AxiosResponse<responseDTO<Array<Evidence>>> =
            await apiClient.get(
                `/api/evidences`,
            );

        if (response.data.statusCode === 200) {
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
