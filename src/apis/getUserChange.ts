import { AxiosError, AxiosResponse } from "axios";
import { apiClient } from "./apiClient";
import { responseDTO } from "..";

export async function getUserChange(): Promise<Boolean> {
    let userId = localStorage.getItem("userId");

    if (!userId){
        alert('유저 정보가 없습니다');
        return false;
    }

    try {
        const response: AxiosResponse<responseDTO<{
            isChanceLeft: Boolean
        }>> = await apiClient.get(
            `/api/user/chance`,
            {
                params: {
                    userId: userId,
                },
            },
        );

        if (response.data.statusCode === 200) {
            return response.data.data.isChanceLeft;
        }
        else{
            throw AxiosError<{
                statusCode: number,
                message: string;
            }>
        }
    } catch (error) {
        alert('심문 횟수 가져오기 실패');
        console.log(error);
        return false;
    }
}
