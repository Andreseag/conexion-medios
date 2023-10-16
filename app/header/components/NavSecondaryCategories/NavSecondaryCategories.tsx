import Link from "next/link";

const categoriesData = [
  {
    name: "Salud",
    url: "/",
  },
  {
    name: "Deportes",
    url: "/",
  },
  {
    name: "Emprendimiento",
    url: "/",
  },
  {
    name: "Cronicas",
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
    name: "Deportes",
    url: "/",
  },
  {
    name: "Especiales",
    url: "/",
  },
];

const NavSecondaryCategories = () => {
  return (
    <div className="nav-secondaries-categories hidden md:flex justify-center mb-2">
      <div className="nav-secondaries-categories__container">
        <nav>
          <ul className="flex gap-4">
            {categoriesData.map((category, i) => (
              <li key={i}>
                <Link
                  href={category.url}
                  className="text-slate-600 hover:text-slate-800 hover:underline py-2 text-sm font-medium"
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

export default NavSecondaryCategories;
