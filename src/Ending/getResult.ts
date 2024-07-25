import { AxiosError, AxiosResponse } from "axios";
import { responseDTO } from "..";
import { Result } from "./result.type";
import { apiClient } from "../apis/apiClient";

export async function GetResult(): Promise<Result | null> {
    try {
        let response: AxiosResponse<responseDTO<Result>> =
            await apiClient.get(`/api/main/result`);

        if (response.data.statusCode === 200) {
            return response.data.data;
        } else {
            throw AxiosError<{
                statusCode: number;
                message: string;
            }>;
        }
    } catch (err) {
        console.log(err);
        return null;
    }
}
