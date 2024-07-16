import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { checkIsSolved } from "../checkIsSolved"
import { useNavigate } from "react-router-dom"
import { GetStroy } from "./getStory";

export default function Story() {

    let navigate = useNavigate();

    //풀었는지 확인. 접근 못하게
    useEffect(() => {
        checkIsSolved() ? navigate('/') : null;
    }, [])

    let [storyLine, setStoryLine] = useState<Array<string>>([]);

    useEffect(() => {
        let fetchData = async () => {
            let data = await GetStroy();
            setStoryLine(data);
            console.log(data);
        };
        fetchData();
    }, [])

    let [currentLine, setCurrentLine] = useState<number>(0);

    useEffect(()=>{
        if (currentLine < storyLine.length - 1) {
            const timer = setTimeout(() => {
              setCurrentLine(currentLine + 1);
            }, storyLine[currentLine].length * 100 + 500);
      
            return () => clearTimeout(timer);
        }
    },[currentLine])

    return (
        <Background>
            {
                storyLine.slice(0, currentLine + 1).map((line, index) => (
                    <TextLine key={index} charsnum={line.length}>
                        {line}
                        {index === currentLine && <Cursor />}
                    </TextLine>
                ))
            }
        </Background >
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

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const typing = keyframes`
  from { width: 0 }
  to {width: 600px}
`;

const TextLine = styled.p<{ charsnum: number }>`
    font-size: x-large;
    /* white-space: nowrap; */
    /* overflow: hidden; */
    text-align: center;
    animation: ${typing} ${({ charsnum }) => charsnum / 25}s steps(${({ charsnum }) => charsnum}, end) forwards;
    /* width: ${({charsnum}) => charsnum + 6}ch;  //ch 기준 크기가 0이라서. 이정도 더해주면 자연스럽다. */
`

// 커서 컴포넌트 스타일
const Cursor = styled.span`
  display: inline-block;
  background-color: black;
  width: 2px;
  height: 1em;
  margin-left: 2px;
  animation: blink 1s step-start infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;
