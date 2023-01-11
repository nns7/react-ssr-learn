import { Request } from "express";
import { VFC } from "react";
import mockDB from "./server/mockDB";

export type PageProps = {
  path: string;
  buildPath: (id?: string) => string;
  component: VFC;
  getServerSideProps: (req: Request) => unknown;
};

const routes: { [key: string]: PageProps } = {
  "/todos": {
    path: "/tods",
    buildPath: () => "/todos",
    component: IndexPage,
    getServerSideProps: (req: Request) => mockDB.findAll(),
  },
  "/todos/:id": {
    path: "/todos/:id",
    buildPath: (id: string) => "/todos/" + id,
    component: DetailPage,
    getServerSideProps: (req: Request) => mockDB.find(req.params.id),
  },
};

export default routes;
