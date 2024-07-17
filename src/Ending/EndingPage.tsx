import { useEffect, useState } from "react";
import { Result } from './result.type';
import { GetResult } from "./getResult";

export default function EndingPage() {

    localStorage.setItem('isSolved', 'true');

    let [result, setResult] = useState<Result | null>(null)
    useEffect(()=>{
        let fetchData = async () => {
            let data = await GetResult();
            console.log(data);
            setResult(data);
        }
        fetchData();
    }, [])

    return (
        <div>
            {result?.caseBackground}
        </div>
    );
}
