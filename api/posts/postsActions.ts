import { Posts } from "@/types/posts.type";

const ApiBaseUrl = process.env.API_URL;
const postsUrl = `${ApiBaseUrl}/noticas`;
const mainPostUrl = `${ApiBaseUrl}/main-posts`;

export enum PostsCategories {
  POLITICS = "politica",
  ACTUALITY = "actualidad",
  VIDEO = "video",
}

export type ApiPostsFilters = {
  populateAll: string;
  populateImage: string;
  categories: Array<string>;
};

export const defaultPostsFilters: ApiPostsFilters = {
  populateAll: "*",
  populateImage: "url",
  categories: [PostsCategories.POLITICS],
};

export const defaultBlogPostFilters = {
  slug: "",
};

// Get all posts
export const getApiAllPosts = async (
  filters: ApiPostsFilters = defaultPostsFilters
) => {
  const postsData = await fetch(
    postsUrl +
      "?" +
      new URLSearchParams({
        "populate[image][fields][0]": `${filters.populateImage}`,
        "populate[categories][fields][0]": `${filters.populateAll}`,
      }),
    {
      cache: "no-store",
      // next: {
      //   revalidate: 3600,
      // },
    }
  ).then((res) => res.json() as Promise<Posts>);

  return postsData;
};

// Get posts by category
export const getApiPostsByCategory = async (
  category: string,
  pageSize: number = 12,
  notGetCategory?: string
) => {
  const postsData = await fetch(
    postsUrl +
      "?" +
      new URLSearchParams({
        "populate[image][fields][0]": `${defaultPostsFilters.populateImage}`,
        "populate[categories][fields][0]": `${defaultPostsFilters.populateAll}`,
        "filters[categories][slug][$eq]": `${category}`,
        "filters[categories][slug][$ne]": `${notGetCategory}`,
        "filters[isMain][$null]": "true",
        "pagination[pageSize]": `${pageSize}`,
      }),
    {
      cache: "no-store",
      // next: {
      //   revalidate: 3600,
      // },
    }
  ).then((res) => res.json() as Promise<Posts>);

  return postsData;
};

// Get post by slug
export const getApiPost = async (
  slug: string = defaultBlogPostFilters.slug
) => {
  const postData = await fetch(postsUrl + "/" + slug, {
    cache: "no-store",
    // next: {
    //   revalidate: 3600,
    // },
  }).then((res) => res.json());
  return postData;
};

// Get main post
export const getApiMainPost = async (
  filters: ApiPostsFilters = defaultPostsFilters
) => {
  const postData = await fetch(
    postsUrl +
      "?" +
      new URLSearchParams({
        "populate[image][fields][0]": `${filters.populateImage}`,
        "populate[categories][fields][0]": `${filters.populateAll}`,
        "filters[isMain][$null]": "false",
        "pagination[pageSize]": "1",
      }),
    {
      cache: "no-store",
      // next: {
      // revalidate: 3600,
      // },
    }
  ).then((res) => res.json());
  return postData;
};
