import Routes, { Registry, HTTPHandler, Router, LinkProps } from 'next-routes';
import { Server } from "next";
import { ComponentType } from "react";

export interface Route {
  name: string;
  pattern: string;
  page: string;
  regex: RegExp;
  keyNames: Array<string>
  toPath: ( opts: { [index : string ] : any }) => string
}

interface NewRouter extends Registry {
    getRequestHandler(app: Server, custom?: HTTPHandler): HTTPHandler;
    add(name: string, pattern?: string, page?: string): this;
    add(pattern: string, page: string): this;
    add(options: { name: string; pattern?: string; page?: string }): this;
    Link: ComponentType<LinkProps>;
    Router: Router;
    routes: Array<Route>
}

export default (
  new Routes()
    .add('about')
    .add('/', 'home')
    .add('/login', 'login')
    .add('/builder', 'builder')
  ) as NewRouter;
