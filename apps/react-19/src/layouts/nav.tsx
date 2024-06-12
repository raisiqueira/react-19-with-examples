import { cn } from "@/utils";
import { NavLink } from "react-router-dom";

const ROUTES = [
  { path: "/", label: "Home" },
  { path: "/use-example-01", label: "use() fetch an API" },
  { path: "/use-example-02", label: "use() fetch an API 02" },
  { path: "/use-example-03", label: "use() + Context" },
  { path: "/actions-example-01", label: "Actions" },
  { path: "/actions-example-02", label: "Actions example 02" },
  { path: "/optimistic-01", label: "useOptimistic" },
  { path: "/optimistic-02", label: "useOptimistic with error" },
  { path: "/transition-01", label: "useTransition" },
];

const VerticalNav = () => {
  return (
    <ul className="space-y-1">
      {ROUTES.map((route) => (
        <li key={route.path}>
          <NavLink
            to={route.path}
            className={({ isActive }) =>
              cn(
                "block px-4 py-2 text-md font-medium text-gray-500 hover:bg-blue-500 hover:text-white",
                {
                  "bg-blue-600 text-white": isActive,
                },
              )
            }
          >
            {route.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export { VerticalNav };
