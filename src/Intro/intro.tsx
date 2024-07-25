import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getDMInfo } from "./getIntro";
import { DMInfo } from "./intro.types";
import { useNavigate } from "react-router-dom";
import { PostNickname } from "./postNickname";

<<<<<<< HEAD
export default function Intro({ isSolved }: {
    isSolved: Boolean;
}) {

    let navigate = useNavigate();

    useEffect(() => {

=======
export default function Intro({ isSolved }: { isSolved: boolean }) {
    let navigate = useNavigate();

    useEffect(() => {
>>>>>>> ryu
        //오늘의 미스터리 정보 가져오기
        let fetchData = async () => {
            let dm = await getDMInfo();
            setDMInfo(dm);
        };
        fetchData();
<<<<<<< HEAD
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
=======
    }, []);

    useEffect(() => {
        if (sourceRef.current) {
            setWidth(sourceRef.current.offsetWidth);
        }
    }, []);

    const [width, setWidth] = useState<number>(0);
    let [DMInfo, setDMInfo] = useState<DMInfo | null>(null);
    let nicknameRef = useRef<HTMLInputElement>(null);
    const sourceRef = useRef<HTMLDivElement>(null);

    const handleClick = async () => {
        let nickname = nicknameRef.current?.value || "";
        if (nickname === "") {
            alert("닉네임을 입력해주세요!");
        } else {
            let postData = await PostNickname(nickname);
            if (postData !== -1) {
                localStorage.setItem("userId", String(postData));
                navigate("/story");
            }
        }
    };
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleClick();
        }
    };
>>>>>>> ryu

    return (
        <>
            <Background />
            <Container>
<<<<<<< HEAD
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
                            <div
                                onClick={()=>navigate('/ending')}
                                className="px-8 py-2 text-center cursor-pointer bg-mainColor rounded-2xl">
                                <div className="text-xl">엔딩 다시보기</div>
                            </div>
                        </>
                        : <>
                            <Box>
                                <h1 className="text-3xl text-black opacity-85">DM: Daily Mystery</h1>
                                <p className="text-2xl text-black opacity-85">
                                    {DMInfo?.weather},<br />
                                    {DMInfo?.place}에서<br />
                                    {DMInfo?.time}의 미스터리
                                </p>
                            </Box>
                            <Input ref={nicknameRef} placeholder="닉네임 입력하기.." />
                            <div
                                onClick={handleClick}
                                className="px-8 py-2 text-center cursor-pointer bg-mainColor rounded-2xl">
                                <div className="text-xl">오늘의 미스터리 풀어보기</div>
                            </div>
                        </>
                }

=======
                <img
                    src="./logo.png"
                    alt="로고사진"
                    width="150px"
                    height="150px"
                />
                {isSolved ? (
                    <>
                        <Box>
                            <h1 className="text-3xl text-black">
                                DM: Daily Mystery
                            </h1>
                            <p className="text-2xl text-black">
                                오늘의 미스터리를 해결하셨네요!
                                <br />
                                내일 새로운 미스터리로 다시 만나요 :)
                            </p>
                        </Box>
                        <div
                            onClick={() => navigate("/ending")}
                            className="px-8 py-2 text-center cursor-pointer bg-mainColor rounded-2xl"
                        >
                            <div className="text-xl">엔딩 다시보기</div>
                        </div>
                    </>
                ) : (
                    <>
                        <Box>
                            <p className="text-2xl font-[Pretendard-SemiBold] text-black">
                                {DMInfo?.weather},<br />
                                {DMInfo?.place}에서
                                <br />
                                {DMInfo?.time}의 미스터리
                            </p>
                        </Box>

                        <Input
                            ref={nicknameRef}
                            placeholder="닉네임 입력하기.."
                            maxLength={10}
                            onKeyDown={handleKeyPress}
                            style={{ width: `${width}px` }}
                        />

                        <div
                            onClick={handleClick}
                            ref={sourceRef}
                            className="px-8 py-2 text-center cursor-pointer bg-[#2c2c2c] border-2 border-white rounded-2xl"
                        >
                            <div className="text-xl">
                                오늘의 미스터리 풀어보기
                            </div>
                        </div>
                    </>
                )}
>>>>>>> ryu
            </Container>
        </>
    );
}

const Background = styled.div`
<<<<<<< HEAD
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
        background-color: rgba(217,217,217,0.4);
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
        width: 300px;
        padding: 10px 15px;
        color: white;
        font-size: large;

        
        &:focus{
            outline:none;
        }
`
=======
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: #333232;
    opacity: 40%;
    z-index: -1;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100dvh;
`;

const Box = styled.div`
    border-radius: 8px;
    width: 450px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.5);
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

const Input = styled.input.attrs({ type: "text" })`
    border-radius: 8px;
    background-color: #2c2c2c;
    color: #ffffff;
    padding: 10px 15px;
    color: white;
    font-size: large;
    &:focus {
        outline: none;
    }
`;
>>>>>>> ryu
