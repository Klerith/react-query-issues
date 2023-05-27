import { createBrowserRouter, Navigate } from "react-router-dom";
import { GitApp } from "../GitApp";

import { ListView, IssueView } from "../issues/views";

export const router = createBrowserRouter([
  {
    path: "/issues",
    element: <GitApp />,
    children: [
      { path: "list", element: <ListView /> },
      { path: "issue/:id", element: <IssueView /> },
      { path: "*", element: <Navigate to="list" /> },
    ],
  },
  {
    path: "/",
    element: <Navigate to="issues/list" />,
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);
