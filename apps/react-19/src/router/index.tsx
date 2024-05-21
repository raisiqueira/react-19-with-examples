import { HomePage } from "@/features/home";
import { BaseLayout } from "@/layouts/base";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const routeElements = createRoutesFromElements(
  <Route path="/" element={<BaseLayout />}>
    <Route element={<HomePage />} index />
  </Route>,
);

export const router = createBrowserRouter(routeElements);
