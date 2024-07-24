import styled, { keyframes } from "styled-components"

export default function FirstReason({ imgSrc, reason, idx }: {
    imgSrc: string;
    reason: string;
    idx: number;
}) {

    return (
        <Container idx={idx}>
            <Img src={imgSrc} />
            <Comment>{reason}</Comment>
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

const Container = styled.div<{idx: number}>`
    display: grid;
    grid-template-columns: 4fr 5fr;
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
    &:after{
        content: '';
	    position: absolute;
	    left: 0;
	    top: 50%;
	    width: 0;
	    height: 0;
	    border: 20px solid transparent;
	    border-right-color: black;
	    border-left: 0;
	    border-bottom: 0;
	    margin-top: -10px;
	    margin-left: -20px;
    }
`