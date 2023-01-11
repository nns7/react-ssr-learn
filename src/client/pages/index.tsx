import { VFC } from "react";
import { TodoItem } from "../../TodoItem";
import TodoList from "../components/TodoList";

export type IndexPageProps = {
  data: TodoItem[];
  isLoading: boolean;
};

export const IndexPage: VFC<IndexPageProps> = ({ data, isLoading }) => {
  if (isLoading) return <p>loading Index Page</p>;
  return (
    <div>
      <h1>index page</h1>
      <TodoList initItems={data} />
    </div>
  );
};
