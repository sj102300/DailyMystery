import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { checkIsSolved } from "../checkIsSolved"
import { Link, useNavigate } from "react-router-dom"
import { GetStroy, GetVictim } from "./getStory";

export default function Story() {

    let navigate = useNavigate();

    //풀었는지 확인. 접근 못하게
    useEffect(() => {
        checkIsSolved() ? navigate('/') : null;
    }, [])

    let [storyLine, setStoryLine] = useState<Array<string>>([]);
    let [victim, setVictim] = useState<string>('');
    let [textLine, setTextLine] = useState<React.ReactNode[]>([]);

    useEffect(()=>{
        let fetchData = async () => {
            let data = await GetVictim();
            setVictim(`피해자 정보: ${data?.victimName}, ${data?.victimAge}세, ${data?.victimGender}, ${data?.victimOccupation}`)
        }
        fetchData();
    })

    useEffect(() => {
        let fetchData = async () => {
            let data = await GetStroy();
            setStoryLine(data);
        };
        fetchData();
    }, [])

    let [currentLine, setCurrentLine] = useState<number>(1);
    let [next, setNext] = useState<Boolean>(false);

    useEffect(()=>{
        if (currentLine < storyLine.length){
            const timer = setTimeout(()=>{
                appendTextLine(storyLine[currentLine]);
                setCurrentLine(prev => prev + 1);
            }, (storyLine[currentLine].length / 25 + 1) * 1000)
            return () => clearTimeout(timer);
        }
        else if (currentLine === storyLine.length) {
            const timer = setTimeout(()=>{
                setNext(true);
            }, (storyLine[currentLine - 1].length / 25 + 1) * 1000)
            return () => clearTimeout(timer);
        }
    },[currentLine, storyLine])

    //한줄씩 보임
    // const appendTextLine = (sentence: string) => {
    //     let box = document.getElementById('box');
    //     if(!box) return;
    //     const root = createRoot(box);
    //     root.render(<TextLine charsnum={sentence.length}>{sentence}</TextLine>)
    // }

    const appendTextLine = (sentence:string) =>{
        let newLine = <TextLine charsnum={sentence.length}>{sentence}</TextLine>;
        setTextLine(prev => [...prev, newLine]);
    }

    return (
        <>
            <Background />
            <Box id="box">
                <TextLine charsnum={victim?.length}>
                    {victim}
                </TextLine>
                {
                    textLine.map((value) => value)
                }
                {
                    next && <Link to='/main'><Next>&gt;</Next></Link>
                }
            </Box>
        </>
    )
}
const Background = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100dvh;
    background-color: #333232;
    opacity: 40%;
    z-index: -1;
`
const updown = keyframes`
    from {
        bottom: 50px;
    }
    to{
        bottom: 40px;
    }
`

const fadein = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const Next = styled.div`
    font-size: 80px;
    position: absolute;
    bottom: 40px;
    right: 40px;
    animation: ${updown} 1s linear 0s infinite alternate,
            ${fadein} 0.5s ease-in forwards;

`



const Box = styled.div`
    width: 800px;
    height: 100dvh;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const typing = keyframes`
  from { 
    width: 0;
    white-space: nowrap;
}

 80%{
    width: 100%;
    white-space: nowrap;
}
  to {
    width: 100%;
    white-space: normal;
}
`;

const TextLine = styled.p<{ charsnum: number }>`
    font-size: x-large;
    text-align: center;
    overflow: hidden;

    white-space: nowrap;
    animation: ${typing} ${({ charsnum }) => charsnum / 25}s steps(${({ charsnum }) => charsnum}, end) forwards;

`