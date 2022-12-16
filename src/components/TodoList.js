/* eslint-disable react/prop-types */
import styled from 'styled-components';
import backImg from './../img/back.png';
import { useState } from 'react';
import TodolistSave from './TodolistSave';

const TODOLIST = styled.div`
  width: 500px;
  height: 600px;
  background-color: #bfc6df;
  border: 1px solid #ddcbcb;
  border-radius: 20px;
  display: grid;
  justify-content: center;
`;
const TODOLISTcontainer = styled.div`
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
`;
const NextTODOLIST = styled.div`
  width: 400px;
  height: 80px;
  background-color: white;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;
const BackImageContainer = styled.div`
  width: 50px;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackImage = styled.img`
  width: 30px;
  height: 30px;
`;
const TODOLISTimageContainer = styled.div`
  display: flex;
  height: 50px;
  margin-bottom: 30px;
`;
const DeleteTODOLIST = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const TextTodoList = styled.div`
  margin-left: 20px;
`;

const TodoList = ({
  CloseTodoList,
  FirstTodolist,
  SecondTodolist,
  ThirdTodolist,
  FourthTodolist,
  setFirstTodolist,
  setSecondTodolist,
  setThirdTodolist,
  setFourthTodolist,
}) => {
  const [TodoListSaveOpen, setTodoListSave] = useState(false);
  const ShowTodoListSave = () => {
    setTodoListSave(true);
  };
  const CloseTodoListSave = () => {
    setTodoListSave(false);
  };

  const handleDeleteClick = (e) => {
    // DELETE를 사용하면 id가 담긴 객체 자체가 사라져서 Patch사용
    e.preventDefault();
    fetch(`http://localhost:3001/data/0`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: '',
        contents: '',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <TODOLISTcontainer>
      <TODOLIST>
        <TODOLISTimageContainer>
          <TODOLISTtext>TODO LIST</TODOLISTtext>
          <BackImageContainer onClick={CloseTodoList}>
            <BackImage src={backImg}></BackImage>
          </BackImageContainer>
        </TODOLISTimageContainer>
        {TodoListSaveOpen === true && (
          <TodolistSave
            CloseTodoListSave={CloseTodoListSave}
            setFirstTodolist={setFirstTodolist}
            setSecondTodolist={setSecondTodolist}
            setThirdTodolist={setThirdTodolist}
            setFourthTodolist={setFourthTodolist}
          />
        )}
        <NextTODOLIST onClick={ShowTodoListSave}>
          <TextTodoList>{FirstTodolist}</TextTodoList>
          <DeleteTODOLIST
            src={backImg}
            onClick={handleDeleteClick}
          ></DeleteTODOLIST>
        </NextTODOLIST>
        <NextTODOLIST>
          <TextTodoList>{SecondTodolist}</TextTodoList>
          <DeleteTODOLIST src={backImg}></DeleteTODOLIST>
        </NextTODOLIST>
        <NextTODOLIST>
          <TextTodoList>{ThirdTodolist}</TextTodoList>
          <DeleteTODOLIST src={backImg}></DeleteTODOLIST>
        </NextTODOLIST>
        <NextTODOLIST>
          <TextTodoList>{FourthTodolist}</TextTodoList>
          <DeleteTODOLIST src={backImg}></DeleteTODOLIST>
        </NextTODOLIST>
      </TODOLIST>
    </TODOLISTcontainer>
  );
};
export default TodoList;
