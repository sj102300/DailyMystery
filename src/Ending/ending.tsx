import { useEffect, useState } from "react";
import { Result } from './result.type';
import { GetResult } from "./getResult";


export default function Ending(){

    let [result, setResult] = useState<Result | null>(null)

    useEffect(()=>{
        let fetchData = async () => {
            let data = await GetResult();
            setResult(data);
        }
        fetchData();
    },[])

    return <></>;
}