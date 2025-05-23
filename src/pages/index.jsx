import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import { Suspense } from "../utils";
import SingleMovie from "./single-movie/SingleMovie";
const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/Home"));
const Movies = lazy(() => import("./movies/Movies"));
const Saved = lazy(() => import("./saved/Saved"));
const Search = lazy(() => import("./search/Search"));
const Login = lazy(() => import("./login/Login"));
const AuthLayout = lazy(() => import("./layout/AuthLayout"));

const MainRouters = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/movies",
          element: (
            <Suspense>
              <Movies />
            </Suspense>
          ),
        },
        {
          path: "/saved",
          element: (
            <Suspense>
              <Saved />
            </Suspense>
          ),
        },
        {
          path: "/search",
          element: (
            <Suspense>
              <Search />
            </Suspense>
          ),
        },
        {
          path: "/movie/:id",
          element: (
            <Suspense>
              <SingleMovie />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/",
      element: (
        <Suspense>
          <AuthLayout />
        </Suspense>
      ),
      children: [
        {
          path: "/login",
          element: (
            <Suspense>
              <Login />
            </Suspense>
          ),
        },
      ],
    },
  ]);
};

export default MainRouters;
