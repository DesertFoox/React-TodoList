import React, { useState, useEffect } from "react";
import "../assets/App.css";
import AddTask from "../Components/AddTask";
import Tasks from "../Components/tasks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Filter from "../Components/Filter";
// import Pagination from "../Components/Pagination";

const App = ({}) => {
  const [items, setItem] = useState([]);
  const [thetext, setText] = useState("");

  //sorting
  const [status, setstatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [items, status]);

  const colorHandler = () => {
    let colors = [
      "blue",
      "aqua",
      "peach",
      "purple",
      "aqua",
      "peach",
      "purple",
      "blue",
      "aqua",
    ];
    let Color = `color-block z-depth-2 ${
      colors[Math.floor(Math.random() * colors.length)]
    }-gradient `;
    return Color;
  };

  const handleSubmit = () => {
    if (thetext.length === 0) {
      toast.error("field is empty !");
    } else {
      try {
        let newItem = {
          id: Math.floor(Math.random() * 100),
          text: thetext,
          completed: false,
          color: colorHandler(),
        };
        setItem(() => items.concat(newItem));
        setText("");
        toast.success("Your todo List has been Created");
      } catch (ex) {
        toast.error("Some thing went wrong with making Todo");
      }
    }
  };

  const DeleteHandler = (Itemid) => {
    const item = items.filter((m) => m.id !== Itemid);
    setItem(item);
    toast.error("Your Todo Has been Deleted");
  };

  const compl = (itemId) => {
    setItem(
      items.map((item) => {
        if (itemId === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setfilteredTodos(items.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setfilteredTodos(items.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredTodos(items);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(items));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todolocal = JSON.parse(
        localStorage.getItem("todos", JSON.stringify(items))
      );
      setItem(todolocal);
    }
  };

  return (
    <div className="App container d-flex justify-content-center">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <div className="w-50 bgcol p-4" style={{ marginTop: 150 }}>
        <h1 className="text-center mb-3">Salar Todo List</h1>
        <AddTask
          value={thetext}
          ChangeHandler={handleChange}
          SubmitHandler={handleSubmit}
        />
        <Filter setFilterStatus={setstatus} />
        <div className="row d-flex justify-content-center">
          {filteredTodos.map((item) => (
            <Tasks
              key={item.id}
              id={item.id}
              color={item.color}
              compl={compl}
              items={item.text}
              DeleteHandler={DeleteHandler}
              completed={item.completed}
              isComplete={item.completed}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
