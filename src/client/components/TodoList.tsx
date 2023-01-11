import { useCallback, useState, VFC } from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { TodoItem } from "../../TodoItem";
import TodoCard from "./TodoCard";
import TodoForm from "./TodoForm";

type Props = { initItems?: TodoItem[] };
const TodoList: VFC<Props> = ({ initItems = [] }) => {
  const [todoList, setTodolist] = useState<TodoItem[]>(initItems);
  const addItem = useCallback(
    (item: TodoItem) => setTodolist((items) => [...items, item]),
    []
  );

  return (
    <>
      {todoList.map((item) => (
        <Link to={routes["/todos/:id"].buildPath(item.id)} key={item.id}>
          <TodoCard item={item} />
        </Link>
      ))}
      <TodoForm addItem={addItem} />
    </>
  );
};

export default TodoList;
