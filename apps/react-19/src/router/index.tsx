import { ErrorBoundary } from "@/components/error-boundary";
import { HomePage } from "@/features/home";
import { BaseLayout } from "@/layouts/base";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const routeElements = createRoutesFromElements(
  <Route path="/" element={<BaseLayout />}>
    <Route element={<HomePage />} ErrorBoundary={ErrorBoundary} index />
    <Route
      path="use-example-01"
      lazy={async () => {
        const { ExampleUse01 } = await import("@/features/use/");
        return {
          Component: ExampleUse01,
        };
      }}
    />
    <Route
      path="use-example-02"
      lazy={async () => {
        const { ExampleUse02 } = await import("@/features/use/");
        return {
          Component: ExampleUse02,
        };
      }}
    />
    <Route
      path="use-example-03"
      lazy={async () => {
        const { ExampleUse03 } = await import("@/features/use/");
        return {
          Component: ExampleUse03,
        };
      }}
    />
    <Route
      path="optimistic-01"
      lazy={async () => {
        const { UseOptimisticExample } = await import("@/features/use-optimistic");
        return {
          Component: UseOptimisticExample,
        };
      }}
    />
    <Route
      path="optimistic-02"
      lazy={async () => {
        const { UseOptimisticExample02 } = await import("@/features/use-optimistic");
        return {
          Component: UseOptimisticExample02,
        };
      }}
      errorElement={<div>Failed to load</div>}
    />
    <Route
      path="use-form-status"
      lazy={async () => {
        const { UseFormStatusExample } = await import("@/features/use-form-status");
        return {
          Component: UseFormStatusExample,
        };
      }}
      errorElement={<div>Failed to load</div>}
    />
    <Route path="*" element={<div>404</div>} />
  </Route>,
);

export const router = createBrowserRouter(routeElements);
