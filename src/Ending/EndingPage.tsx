import { useEffect, useRef, useState } from "react";
import { Result } from './result.type';
import { GetResult } from "./getResult";
import styled, { keyframes } from "styled-components";
import { CaseBackground } from "./CaseBackground";
import FirstReason from "./FirstReason";
import SecondReason from "./SecondReason";
import { Link } from "react-router-dom";

export default function EndingPage({ setIsSolved }: {
    setIsSolved: (isSolved: boolean) => void;
}) {

    localStorage.setItem('isSolved', 'true');

    let [result, setResult] = useState<Result | null>(null)
    useEffect(()=>{
        setIsSolved(true);
        let fetchData = async () => {
            let data = await GetResult();
            setResult(data);
        }
        fetchData();
    }, [])

    let containerRef = useRef<HTMLDivElement>(null)

    const handleScroll = ()=>{
        if (!containerRef.current) return;
        containerRef.current.scrollBy({ top: 400, behavior: 'smooth' });
      }

    let [pages, setPages] = useState<React.ReactNode[]>([]);

    useEffect(()=>{
        if (!result) return;

        if (pages.length <= 4){
            let timer = setTimeout(()=>{
                appendPage();
            }, 4000)
            return ()=>clearTimeout(timer);
        }
    }, [result, pages])

    useEffect(()=>{
        handleScroll();
    },[pages])
    
    let [next,setNext] = useState<Boolean>(false);

    const appendPage = ()=>{

        if (!result) return;

        switch (pages.length){
            case 0:
                let firstReason = <FirstReason idx={1} reason={result.resultContent1} imgSrc={result.resultImage1} />;
                setPages(prev => [...prev, firstReason]);
                return;
            case 1:
                let secondReason = <SecondReason idx={2} reason={result.resultContent2} imgSrc={result.resultImage2} />;
                setPages(prev => [...prev, secondReason]);
                return
            case 2:
                let criminal = <FirstReason idx={3} reason={result.criminalSaying} imgSrc={result.criminalImage} />;
                setPages(prev => [...prev, criminal]);
                return;
            case 3:
                setNext(true);
                return;
            default:
                return;
        }
    }

    return (
        <>
            <Background />
            <Container scrollbarState={next} ref={containerRef}>
                <CaseBackground idx={0} casebackground={result?.caseBackground || ''}/>
                {
                    pages.map(value => value)
                }
                {
                    next && <Link to='/'><Next>&gt;</Next></Link>
                }
            </Container>
        </>
    );
}


const Background = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100dvh;
    background-color: #000000;
    opacity: 40%;
    z-index: -1;
`

const Container = styled.div<{ scrollbarState: Boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar{
    display: ${({ scrollbarState }) => scrollbarState ? "visible": "none"};
  }
`;

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