import React from "react";
import styled from "styled-components";
import backImg from "./../img/back.png"

const CONTENTS = styled.div`
    width: 500px;
    height: 600px;
    background-color: #B6D0F8;
    border: 1px solid #B6D0F8;
    border-radius: 20px;
    display: grid;
    justify-content: center;
`
const Contentscontainer = styled.div`
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    background-color:rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeaderText = styled.div`
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 80px;
`
const TextContentContainer = styled.div`
    background-color: white;
    width: 400px;
    height: 470px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const TextContents = styled.div`
    font-size: 20px;
    width: 350px;
    height: 400px;
`

const BackImage = styled.img`
    width: 30px;
    height: 30px;
`
const BackImageContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`
const TextImageContainer = styled.div`
    width: 400px;
    height: 80px;
    display: flex;
    justify-content: center;
`

const Contents = ({Closecontent , FirstContents , SecondContents,  ThirdContents, FourthContents}) =>{

    return (
        <Contentscontainer>
            <CONTENTS>
                <TextImageContainer>
                    <HeaderText>내용</HeaderText>
                    <BackImageContainer onClick={Closecontent}>
                        <BackImage src={backImg}></BackImage>
                    </BackImageContainer>
                </TextImageContainer>
                <TextContentContainer>
                    <TextContents>
                        {FirstContents}
                    </TextContents>
                </TextContentContainer>
            </CONTENTS>
        </Contentscontainer>
    )
}

export default Contents