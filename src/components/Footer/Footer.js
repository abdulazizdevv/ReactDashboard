import { Item } from "../Item/Item";
import { List } from "../List/List";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Plus from "../../assets/images/plus/icon/create/inactive.png"
const Todo = () => {
  const inputValue = useRef();

  const [todos, setTodo] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const modalClick=()=>{
    
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTodo([
      ...todos,
      {
        id: todos.at(-1)?.id + 1 || 1,
        isComplate: false,
        text: inputValue.current.value,
      },
    ]);
    inputValue.current.value = "";
    toast.success("Todo qo'shildi");
  };

  localStorage.setItem("todos", JSON.stringify(todos));
  return (
    <div className="d-flex justify-content-between">
      <div className="left-f w-100 me-5 p-3">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p>Unresolved tickets</p>
            <p>
              <span className="text-secondary">Group</span>: Support
            </p>
          </div>
          <p className="text-primary">View details</p>
        </div>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between py-3">
            Waiting on Feature Request{" "}
            <span className="text-secondary">4238</span>
          </li>
          <li class="list-group-item d-flex justify-content-between py-3">
            Awaiting Customer Response{" "}
            <span className="text-secondary">1005</span>
          </li>
          <li class="list-group-item d-flex justify-content-between py-3">
            Awaiting Developer Fix <span className="text-secondary">914</span>
          </li>
          <li class="list-group-item d-flex justify-content-between py-3">
            Pending <span className="text-secondary">281</span>
          </li>
        </ul>
      </div>
      <div className="task p-2">
        <div>
          <h4 className="  my-3   ms-3">Task</h4>
          <p className="text-secondary ms-3">
          Today
          </p>
          <form onSubmit={handleSubmit} className="w-100 mx-auto ">
            <div className="input-group">
              <input
                ref={inputValue}
                className="form-control"
                type="text"
                placeholder="Create new task"
              />
              <button onClick={modalClick} className="btn " type="submit">
                <img src={Plus} alt="plus"/>
              </button>
            </div>
          </form>

          {todos.length ? (
            <List>
              {todos.map((todo) => (
                <Item
                  key={todo.id}
                  todos={todos}
                  setTodo={setTodo}
                  text={todo.text}
                  isComplate={todo.isComplate}
                  id={todo.id}
                />
              ))}
            </List>
          ) : (
            <h2 className="text-center mt-5">Todolar kiritilmagan</h2>
          )}
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
