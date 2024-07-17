import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getDMInfo } from "./getIntro";
import { DMInfo } from "./intro.types";
import { useNavigate } from "react-router-dom";
import { PostNickname } from "./postNickname";
import { checkIsSolved } from "../checkIsSolved";

export default function Intro() {

    let navigate = useNavigate();

    let [isSolved, setIsSolved] = useState<Boolean>(false);

    useEffect(() => {
        //풀었으면 더이상 못풀게
        setIsSolved(checkIsSolved());

        //오늘의 미스터리 정보 가져오기
        let fetchData = async () => {
            let dm = await getDMInfo();
            setDMInfo(dm);
        };
        fetchData();
    }, [])

    let [DMInfo, setDMInfo] = useState<DMInfo | null>(null);

    let nicknameRef = useRef<HTMLInputElement>(null);

    const handleClick = async () => {
        let nickname = nicknameRef.current?.value || ''
        if (nickname === '') {
            alert('닉네임을 입력해주세요!');
        }
        else {
            let postData = await PostNickname(nickname);
            if (postData !== -1) {
                localStorage.setItem('userId', String(postData));
                navigate('/story');
            }
        }
    }

    return (
        <>
            <Background />
            <Container>
                <img src="./logo.png" alt="로고사진" width="200px" height="200px" />
                {
                    isSolved ?
                        <>
                            <Box>
                                <h1 className="text-3xl text-black">DM: Daily Mystery</h1>
                                <p className="text-2xl text-black">
                                    오늘의 미스터리를 해결하셨네요!<br />
                                    내일 새로운 미스터리로 다시 만나요 :)
                                </p>
                            </Box>
                            <Button>내일의 미스터리 알림 받기</Button>
                        </>
                        :<>
                            <Box>
                                <h1 className="text-3xl text-black">DM: Daily Mystery</h1>
                                <p className="text-2xl text-black">
                                    {DMInfo?.weather},<br />
                                    {DMInfo?.place}에서<br />
                                    {DMInfo?.time}의 미스터리
                                </p>
                            </Box>
                            <Input ref={nicknameRef} placeholder="닉네임 입력하기.." />
                            <Button onClick={handleClick}>오늘의 미스터리 풀어보기</Button>
                        </>
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
        background-color: #333232;
        opacity: 40%;
        z-index: -1;
    `

const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        
        width: 100%;
        height: 100dvh;
    `

const Box = styled.div`
        border-radius: 15px;
        width: 470px;
        height:250px;
        background-color: #D9D9D9;
        opacity: 40%;
        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:30px;
    `

const Input = styled.input.attrs({ type: "text" })`
        border-radius: 15px;
        background-color: #2c2c2c;
        color: #ffffff;
        width: 250px;
        padding: 8px 8px;
        color: white;
        font-size: large;

        
        &:focus{
            outline:none;
        }
`


const Button = styled.button`
        border-radius: 15px;
        background-color: #2c2c2c;
        color: #ffffff;
        width: 200px;
        padding:8px 0;
        text-align: center;
    `
