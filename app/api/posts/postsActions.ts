const ApiBaseUrl = "http://localhost:1337/api";
const postsUrl = `${ApiBaseUrl}/noticas`;

export enum PostsCategories {
  Actividades = "actividades",
  Booktrailer = "booktrailer",
  Entrevistas = "entrevistas",
  Noticias = "noticias",
  Recomendados = "recomendados",
  Reportajes = "reportajes",
  Resenas = "resenas",
  RutasLiterarias = "rutas-literarias",
  SinCategoria = "sin-categoria",
  Taller = "taller",
  VerParaLeer = "ver-para-leer",
  Articulo = "articulo",
}

export type ApiPostsFilters = {
  populate: string;
  categories: Array<string>;
};

export const defaultPostsFilters: ApiPostsFilters = {
  populate: "*",
  categories: [
    PostsCategories.Actividades,
    PostsCategories.Booktrailer,
    PostsCategories.Entrevistas,
    PostsCategories.Noticias,
    PostsCategories.Recomendados,
    PostsCategories.Reportajes,
    PostsCategories.Resenas,
    PostsCategories.RutasLiterarias,
    PostsCategories.SinCategoria,
    PostsCategories.Taller,
    PostsCategories.Articulo,
  ],
};

export const defaultBlogPostFilters = {
  slug: "",
};

export const getApiAllPosts = async (
  filters: ApiPostsFilters = defaultPostsFilters
) => {
  const postsData = await fetch(
    postsUrl +
      "?" +
      new URLSearchParams({
        populate: `${filters.populate}`,
      }),
    {
      next: {
        revalidate: 3600,
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log("postsData", postsData);

  return postsData;
};

export const getApiPost = async (
  slug: string = defaultBlogPostFilters.slug
) => {
  const postData = await fetch(postsUrl + "/" + slug, {
    next: {
      revalidate: 3600,
    },
  }).then((res) => res.json());
  return postData;
};
