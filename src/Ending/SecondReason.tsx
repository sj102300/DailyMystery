import styled, { keyframes } from "styled-components";


export default function SecondReason({ idx, imgSrc, reason }: {
    imgSrc: string;
    reason: string;
    idx: number;
}) {

    return(
        <Container idx={idx}>
            <Comment>{reason}</Comment>
            <Img src={imgSrc} />
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
    display: grid;
    grid-template-columns: 5fr 4fr;
    align-items: center;
    gap: 50px;
    height: 100dvh;
    width: 100%;
    padding: 5% 10%;

    scroll-snap-align: start;
    flex-shrink: 0;
    animation: ${fadein} 1s ease forwards;
`

const Img = styled.img`
    object-fit: cover;
    border-radius: 0.75rem;
    height: 600px;
    border: 2px solid #ffffff;
`

const Comment = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: black;
    padding: 20px;
    font-size: large;

    //말풍선 세모 달기
    &::after{
	    content: '';
	    position: absolute;
	    right: 0;
	    top: 50%;
	    width: 0;
	    height: 0;
	    border: 20px solid transparent;
	    border-left-color: black;
	    border-right: 0;
	    border-bottom: 0;
	    margin-top: -10px;
	    margin-right: -20px;
    }
`