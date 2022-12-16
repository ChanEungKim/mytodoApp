/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import optionImg from './../img/option.png';
import TodoList from './TodoList';
import Contents from './Contents';
import calendarImg from './../img/calendar.png';
import CurClock from 'react-live-clock';

const Planer = styled.div`
  width: 600px;
  height: 650px;
  background-color: #ddcbcb;
  border: 1px solid #ddcbcb;
  border-radius: 20px;
`;
const Today = styled.div`
  font-size: 30px;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
`;
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;
const Clock = styled.div`
  width: 520px;
  height: 200px;
  background-color: #f6eded;
  margin-top: 10px;
  border: 1px solid #f6eded;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
`;
const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Todolist = styled.div`
  width: 240px;
  height: 300px;
  background-color: #f6eded;
  border: 1px solid #f6eded;
  border-radius: 15px;
`;
const Calendar = styled.div`
  width: 240px;
  height: 300px;
  margin-left: 30px;
  background: #f6eded;
  border: 1px solid #f6eded;
  border-radius: 15px;
`;
const CalendarImg = styled.img`
  width: 240px;
  height: 280px;
`;
const Containerlistcalendar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 390px;
`;
const OptionImage = styled.img`
  width: 30px;
  height: 30px;
`;
const TodolistOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-left: 8px;
  margin-right: 8px;
`;
const List = styled.div`
  width: 200px;
  height: 50px;
  background-color: white;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListContainer = styled.div`
  height: 250px;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const MainPlaner = () => {
  const [TodoListOpen, setTodoList] = useState(false);
  const [ContentsOpen, setContents] = useState(false);
  const [FirstTodolist, setFirstTodolist] = useState('');
  const [SecondTodolist, setSecondTodolist] = useState('');
  const [ThirdTodolist, setThirdTodolist] = useState('');
  const [FourthTodolist, setFourthTodolist] = useState('');
  const [FirstContents, setFirstContents] = useState('');
  const [SecondContents, setSecondContents] = useState('');
  const [ThirdContents, setThirdContents] = useState('');
  const [FourthContents, setFourthContents] = useState('');
  const [todo, setTodo] = useState([]);
  const [detail, setDetail] = useState({
    title: '',
    contents: '',
  });

  const ShowTodoList = () => {
    setTodoList(true);
  };
  const CloseTodoList = () => {
    setTodoList(false);
  };
  const ShowContents = (item) => {
    console.log('start', item);
    // setDetail(
    //     {
    //         title: item.title,
    //         contents: item.contents
    //     }
    // );
    setDetail(item);
    setContents(true);
  };
  const Closecontent = () => {
    setContents(false);
  };

  useEffect(() => {
    fetch('http://localhost:3001/data/')
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        setFirstTodolist(myJson[0].title);
        setSecondTodolist(myJson[1].title);
        setThirdTodolist(myJson[2].title);
        setFourthTodolist(myJson[3].title);
        setFirstContents(myJson[0].contents);
        setSecondContents(myJson[1].contents);
        setThirdContents(myJson[2].contents);
        setFourthContents(myJson[3].contents);

        console.log('myJson', myJson);

        setTodo(myJson);
      });
  }, []);

  const todoComponent = () => {
    console.log('todotodo', todo);
    return (
      todo.length > 0 &&
      todo.map((item, index) => {
        if (index < 4) {
          return <List onClick={() => ShowContents(item)}>{item.title}</List>;
        }
      })
    );
  };
  console.log(FirstContents, SecondContents, ThirdContents, FourthContents);

  return (
    <>
      <Planer>
        <HeaderContainer>
          <Today>Today</Today>
          <Today>
            <CurClock
              format={'YYYY'}
              ticking={false}
              timezone={'KR/Pacific'}
            ></CurClock>
            <CurClock
              format={'MMMM'}
              ticking={false}
              timezone={'KR/Pacific'}
            ></CurClock>
          </Today>
        </HeaderContainer>
        <ClockContainer>
          <Clock>
            <CurClock
              format={'HH:mm:ss'}
              ticking={true}
              timezone={'KR/Pacific'}
            ></CurClock>
          </Clock>
        </ClockContainer>
        <Containerlistcalendar>
          <Todolist>
            <TodolistOptionContainer>
              <div>TODO LIST</div>
              <OptionImage
                src={optionImg}
                alt="img"
                onClick={ShowTodoList}
              ></OptionImage>
              {TodoListOpen && (
                <TodoList
                  CloseTodoList={CloseTodoList}
                  FirstTodolist={FirstTodolist}
                  SecondTodolist={SecondTodolist}
                  ThirdTodolist={ThirdTodolist}
                  FourthTodolist={FourthTodolist}
                  setFirstTodolist={setFirstTodolist}
                  setSecondTodolist={setSecondTodolist}
                  setThirdTodolist={setThirdTodolist}
                  setFourthTodolist={setFourthTodolist}
                />
              )}
            </TodolistOptionContainer>
            <ListContainer>
              {console.log('todo', todo)}
              {todoComponent()}
              {ContentsOpen && (
                <Contents Closecontent={Closecontent} detail={detail} />
              )}
            </ListContainer>
          </Todolist>
          <Calendar>
            <CalendarImg src={calendarImg}></CalendarImg>
          </Calendar>
        </Containerlistcalendar>
      </Planer>
    </>
  );
};

export default MainPlaner;
