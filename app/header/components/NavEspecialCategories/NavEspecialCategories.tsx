import Link from "next/link";

const categoriesData = [
  {
    name: "Deportes",
    url: "/",
  },
  {
    name: "Entretenimiento",
    url: "/",
  },
  {
    name: "Salud",
    url: "/",
  },
  {
    name: "Opinión",
    url: "/",
  },
  {
    name: "Economía",
    url: "/",
  },
  {
    name: "Judicial",
    url: "/",
  },
  {
    name: "Programas",
    url: "/",
  },
  {
    name: "Ciencia y Tecnología",
    url: "/",
  },
];

const NavEspecialCategories = () => {
  return (
    <div className="nav-especial-categories w-full flex justify-center bg-red-600">
      <div className="nav-especial-categories__container flex items-center w-11/12 xl:w-10/12">
        <span className="mr-4 text-white bg-slate-800 py-2 px-4 uppercase font-medium">
          Villanueva
        </span>
        <nav>
          <ul className="flex gap-4">
            {categoriesData.map((category, i) => (
              <li key={i}>
                <Link
                  href={category.url}
                  className="text-white hover:underline text-sm py-2"
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

export default NavEspecialCategories;
