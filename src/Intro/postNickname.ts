import axios, { AxiosError, AxiosResponse } from "axios";

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
       }> = await axios.post(`${import.meta.env.VITE_REACT_APP_BACK_URL}/api/user`, body);

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