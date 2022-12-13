import React from "react";
import styled from 'styled-components'
import optionImg from './../img/option.png'
import TodoList from "./TodoList";
import { useState, useEffect } from "react";
import Contents from "./Contents";



const Planer = styled.div`
    width: 600px;
    height: 650px;
    background-color: #DDCBCB;
    border: 1px solid #DDCBCB;
    border-radius: 20px;
`
const Today = styled.div`
    font-size: 30px;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
`
const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
`
const Clock = styled.div`
    width: 520px;
    height: 200px;
    background-color: #F6EDED;
    margin-top: 10px;
    border: 1px solid  #F6EDED;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
`
const ClockContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Todolist = styled.div`
    width: 240px;
    height: 300px;
    background-color: #F6EDED;
    border: 1px solid #F6EDED;
    border-radius: 15px;
`
const Calendar = styled.div`
    width: 240px;
    height: 300px;
    margin-left: 30px;
    background: #F6EDED;
    border: 1px solid #F6EDED;
    border-radius: 15px;
`
const Containerlistcalendar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 390px;
`
const OptionImage = styled.img`
    width: 30px;
    height: 30px;
`
const TodolistOptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    margin-left: 8px;
    margin-right: 8px;
`
const List = styled.div`
    width: 200px;
    height: 50px;
    background-color: white;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ListContainer = styled.div`
    height: 250px;
    display: grid;
    align-items: center;
    justify-content: center;
`


const MainPlaner = ()=>{
    const [TodoListOpen,setTodoList] = useState(false);
    const [ContentsOpen, setContents] = useState(false);
    const [FirstTodolist, setFirstTodolist] = useState('');
    const [SecondTodolist, setSecondTodolist] = useState('');
    const [ThirdTodolist, setThirdTodolist] = useState('');
    const [FourthTodolist, setFourthTodolist] = useState('');
    const [FirstContents, setFirstContents] = useState('');
    const [SecondContents, setSecondContents] = useState('');
    const [ThirdContents, setThirdContents] = useState('');
    const [FourthContents, setFourthContents] = useState('');



    const ShowTodoList = () =>{
      setTodoList(true);
    }
    const CloseTodoList = () =>{
        setTodoList(false)
    }
    const ShowContents = () =>{
        setContents(true)
    }
    const Closecontent = () =>{
        setContents(false);
    }

    useEffect(()=>{
        fetch('http://localhost:3001/data/')
        .then ((res) => {
          return res.json()
        })
        .then (myJson =>{
            setFirstTodolist(myJson[0].title)
            setSecondTodolist(myJson[1].title)
            setThirdTodolist(myJson[2].title)
            setFourthTodolist(myJson[3].title)
            setFirstContents(myJson[0].contents)
            setSecondContents(myJson[1].contents)
            setThirdContents(myJson[2].contents)
            setFourthContents(myJson[3].contents)

        })
    },[])



    return (
        <>
            <Planer>
                <HeaderContainer>
                    <Today>Today</Today>
                    <Today>2022</Today>
                </HeaderContainer>
                <ClockContainer>
                    <Clock>24 : 00 : 00</Clock>
                </ClockContainer>
                <Containerlistcalendar>
                        <Todolist>
                            <TodolistOptionContainer>
                                <div>TODO LIST</div>
                                <OptionImage src={optionImg} alt="img" onClick={ShowTodoList}></OptionImage>
                                {TodoListOpen && <TodoList 
                                CloseTodoList={CloseTodoList} 
                                FirstTodolist={FirstTodolist} 
                                SecondTodolist={SecondTodolist} 
                                ThirdTodolist={ThirdTodolist} 
                                FourthTodolist={FourthTodolist}
                                setFirstTodolist={setFirstTodolist} 
                                setSecondTodolist={setSecondTodolist} 
                                setThirdTodolist={setThirdTodolist} 
                                setFourthTodolist={setFourthTodolist}
                                />}
                            </TodolistOptionContainer>
                            <ListContainer>
                                <List onClick={ShowContents}>{FirstTodolist}</List>
                                   {ContentsOpen && <Contents
                                    FirstContents={FirstContents} 
                                    SecondContents={SecondContents} 
                                    ThirdContents={ThirdContents} 
                                    FourthContents={FourthContents}
                                    Closecontent={Closecontent}
                                    />}
                                <List>{SecondTodolist}</List>
                                <List>{ThirdTodolist}</List>
                                <List>{FourthTodolist}</List>
                            </ListContainer>
                        </Todolist>
                    <Calendar></Calendar>
                </Containerlistcalendar>
            </Planer>
        </>
    )
}

export default MainPlaner