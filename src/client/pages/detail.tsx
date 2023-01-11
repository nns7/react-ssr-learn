import { VFC } from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { TodoItem } from "../../TodoItem";
import TodoCard from "../components/TodoCard";

export type DetailPageProps = {
  data: TodoItem;
  isLoading: boolean;
};

const DetailPage: VFC<DetailPageProps> = ({ data, isLoading }) => {
  if (isLoading) return <p>loading detail page</p>;
  return (
    <div>
      <h1>Detail page</h1>
      <p>
        <Link to={routes["/todos"].buildPath()}>Top</Link>
      </p>
      <TodoCard item={data} />
    </div>
  );
};

export default DetailPage;
