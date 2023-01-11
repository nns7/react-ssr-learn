import { VFC } from "react";
import { TodoItem } from "../../TodoItem";

type Props = { item: TodoItem };

const TodoCard: VFC<Props> = ({ item }) => {
  return (
    <div
      style={{
        borderRadius: "4px",
        border: "1px solid black",
        padding: "1rem",
        margin: "0.5rem 0",
      }}
    >
      <h2>{item.title}</h2>
      <p>{item.detail}</p>
    </div>
  );
};

export default TodoCard;
