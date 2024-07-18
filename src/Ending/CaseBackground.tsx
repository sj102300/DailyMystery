import styled, { keyframes } from "styled-components"


export function CaseBackground({ idx, casebackground }: {
    idx: number;
    casebackground: string;
}){

    return (
        <Container idx={idx}>
            <P charsnum={casebackground.length}>{casebackground}</P>
        </Container>
    )
}

const fadein = keyframes`
    from { 
        opacity: 0;
        transform: translateY(20px);
    }
    to{
        opacity: 1;
        transform: translateY(0);
    }
`

const Container = styled.div<{ idx: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100dvh;

    scroll-snap-align: start;
    animation: ${fadein} 2s ease-in forwards;
    flex-shrink: 0;
`

const P = styled.p<{ charsnum: number }>`
    font-size: x-large;
    text-align: center;
    width: 800px;
`