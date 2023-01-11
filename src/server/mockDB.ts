import { TodoItem } from "../TodoItem";

const mockDB = {
  data: [
    { id: "id1", title: "hoge", detail: "hogehoge", isFinished: false },
    { id: "id2", title: "fuga", detail: "fugafuga", isFinished: true },
  ] as TodoItem[],
  findAll: function () {
    return this.data as TodoItem[];
  },
  find: function (id: string) {
    return this.data.find((d) => d.id === id) as TodoItem;
  },
};

export default mockDB;
