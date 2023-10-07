import { Posts } from "@/app/types/posts.type";

const ApiBaseUrl = process.env.API_URL;
const postsUrl = `${ApiBaseUrl}/noticas`;

export enum PostsCategories {
  Actividades = "actividades",
}

export type ApiPostsFilters = {
  populate: string;
  categories: Array<string>;
};

export const defaultPostsFilters: ApiPostsFilters = {
  populate: "*",
  categories: [PostsCategories.Actividades],
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
      })
  ).then((res) => res.json() as Promise<Posts>);

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
