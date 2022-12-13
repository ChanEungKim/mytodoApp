import React from "react";
import styled from "styled-components";
import backImg from "./../img/back.png"
import { useState , useParams } from "react";

const TODOLISTsave = styled.form`
    width: 500px;
    height: 700px;
    background-color: #BFC6DF;
    border: 1px solid #DDCBCB;
    border-radius: 20px;
    display: grid;
    justify-content: center;
`
const TODOLISTsaveContainer = styled.div`
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    background-color:rgba(0,0,0,0);
    display: flex;
    justify-content: center;
    align-items: center;
`
const TODOLISTtext = styled.div`
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
`
const BackImageContainer = styled.div`
    margin-top: 20px;
    width: 50px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BackImage = styled.img`
    width: 30px;
    height: 30px;
`
const TODOLISTimageContainer = styled.div`
    display: flex;
    height: 50px;
    margin-bottom: 30px;
`
const TitleContentsText = styled.div`
    font-size: 20px;
    height: 1px;
`
const TitleInput = styled.input`
    width: 400px;
    height: 50px;
    font-size: 20px;
    border: 1px solid white;
    border-radius: 15px;
`
const ContentsInput = styled.input`
    width: 400px;
    height: 300px;
    font-size: 20px;
    border: 1px solid white;
    border-radius: 15px;
`
const SaveButton= styled.button`
    width: 410px;
    height: 50px;
    border: 1px solid white;
    border-radius: 15px;
`


const TodolistSave = ({CloseTodoListSave,setFirstTodolist,setSecondTodolist,setThirdTodolist,setFourthTodolist}) =>{

    const [ChangeTitle , setChangeTitle] = useState('')
    const [ChangeContents , setChangeContents] = useState('')
    // const {id} = useParams();
    //     console.log(id)

    const handleSumit = (e)=>{
        e.preventDefault();
        fetch(`http://localhost:3001/data/1`,{
            method : "PATCH",
            body : JSON.stringify({
                title: ChangeTitle,
                contents: ChangeContents
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res)=>{
            window.location.reload();
        })
    
    }
    return (
        <TODOLISTsaveContainer>
            <TODOLISTsave onSubmit={handleSumit}>
                <TODOLISTimageContainer>
                    <TODOLISTtext>TODO LIST</TODOLISTtext>
                    <BackImageContainer onClick={CloseTodoListSave}><BackImage src={backImg} ></BackImage></BackImageContainer>
                </TODOLISTimageContainer>
                <TitleContentsText>제목</TitleContentsText>
                <TitleInput onChange={(e)=>setChangeTitle(e.target.value)} placeholder="제목을 입력해주세요."></TitleInput>
                <TitleContentsText>내용</TitleContentsText>
                <ContentsInput onChange={(e)=>setChangeContents(e.target.value)} placeholder="내용을 입력해주세요."></ContentsInput>
                <SaveButton>저장하기</SaveButton>
            </TODOLISTsave>
        </TODOLISTsaveContainer>
    )
}

export default TodolistSave