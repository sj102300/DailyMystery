import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { checkIsSolved } from "../checkIsSolved";
import { Link, useNavigate } from "react-router-dom";
import { GetStroy, GetVictim } from "./getStory";
import useStoryLine from "../client/storyLine";
import { useStore } from "zustand";

export default function Story() {
    let navigate = useNavigate();

    //풀었는지 확인. 접근 못하게
    useEffect(() => {
        checkIsSolved() ? navigate("/") : null;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { storyLine, setStoryLine } = useStore(useStoryLine);
    let [victim, setVictim] = useState<string>("");
    let [textLine, setTextLine] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        let fetchData = async () => {
            let data = await GetVictim();
            setVictim(
                `피해자 정보: ${data?.victimName}, ${data?.victimAge}세, ${data?.victimGender}, ${data?.victimOccupation}`,
            );
        };
        fetchData();
    });

    useEffect(() => {
        let fetchData = async () => {
            let data = await GetStroy();
            setStoryLine(data);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let [currentLine, setCurrentLine] = useState<number>(1);
    let [next, setNext] = useState<boolean>(false);

    useEffect(() => {
        if (currentLine < storyLine.length) {
            const timer = setTimeout(
                () => {
                    appendTextLine(storyLine[currentLine]);
                    setCurrentLine((prev) => prev + 1);
                },
                (storyLine[currentLine].length / 25 + 1) * 1000,
            );
            return () => clearTimeout(timer);
        } else if (currentLine === storyLine.length) {
            const timer = setTimeout(
                () => {
                    setNext(true);
                },
                (storyLine[currentLine - 1].length / 25 + 1) * 1000,
            );
            return () => clearTimeout(timer);
        }
    }, [currentLine, storyLine]);

    //한줄씩 보임
    // const appendTextLine = (sentence: string) => {
    //     let box = document.getElementById('box');
    //     if(!box) return;
    //     const root = createRoot(box);
    //     root.render(<TextLine charsnum={sentence.length}>{sentence}</TextLine>)
    // }

    const appendTextLine = (sentence: string) => {
        let newLine = (
            <TextLine charsnum={sentence.length}>{sentence}</TextLine>
        );
        setTextLine((prev) => [...prev, newLine]);
    };

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-dvh">
            <img
                src="./logo.png"
                alt="로고사진"
                width="150px"
                height="150px"
                className="absolute top-20"
            />
            <Background />
            <Box
                id="box"
                className="text-[#1e1e1e] font-[Pretendard-SemiBold] p-4"
            >
                <TextLine charsnum={victim?.length}>{victim}</TextLine>
                {textLine.map((value) => value)}
            </Box>
            {next && (
                <Link to="/main">
                    <Next className="text-white">&gt;</Next>
                </Link>
            )}
        </div>
    );
}
const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: #333232;
    opacity: 40%;
    z-index: -1;
`;
const updown = keyframes`
    from {
        bottom: 50px;
    }
    to{
        bottom: 40px;
    }
`;

const fadein = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

const Next = styled.div`
    font-size: 80px;
    position: absolute;
    bottom: 0px;
    right: 20px;
    animation:
        ${updown} 1s linear 0s infinite alternate,
        ${fadein} 0.5s ease-in forwards;
`;

const Box = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

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
    animation: ${typing} ${({ charsnum }) => charsnum / 25}s
        steps(${({ charsnum }) => charsnum}, end) forwards;
`;
