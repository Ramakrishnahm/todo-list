import { useState } from "react";
import '../App.css'

const Form = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput.trim() !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput
      };

      setList([...list, newItem]);
      setUserInput("");
    }
  };
  const deleteItem = (key) => {
    const updatedList = list.filter((item) => item.id !== key);
    setList(updatedList);
  };

  const editItem = (index) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedList = [...list];
      updatedList[index].value = editedTodo;
      setList(updatedList);
    }
  };
  return (
    <>
      <div className="form">
        <input
          type="text"
          className="form-control"
          placeholder="Add Item..."
          value={userInput}
          onChange={(e) => updateInput(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn-add" onClick={() => addItem()}>
            ADD
          </button>
        </div>
        <div className="row">
          
            <ol className="list-group">
              {list.map((item, index) => (
                <li className="list-group-item" key={index}>
                  <span>{item.value}</span>
                  <div className="btn-group">
                    <button
                      className="btn-delete"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn-edit"
                      onClick={() => editItem(index)}
                    >
                      Edit
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      
    </>
  );
};

export default Form;
