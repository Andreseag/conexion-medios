import Link from "next/link";
import React from "react";

const categoriesData = [
  {
    name: "Inicio",
    url: "/",
  },
  {
    name: "Política",
    url: "/",
  },
  {
    name: "Actualidad",
    url: "/",
  },
  {
    name: "Regional",
    url: "/",
  },
  {
    name: "Nacional",
    url: "/",
  },
  {
    name: "Judicial",
    url: "/",
  },
];

const NavPrincipalCategories = () => {
  return (
    <div className="nav-principal-categories w-full hidden md:flex justify-center mb-2 border-b border-slate-300 py-2">
      <div className="nav-principal-categories__container">
        <nav>
          <ul className="flex gap-3">
            {categoriesData.map((category, i) => (
              <li key={i}>
                <Link
                  href={category.url}
                  className="text-red-500 hover:text-red-800 hover:underline text-xs uppercase font-semibold"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavPrincipalCategories;
