export interface Posts {
  data: Post[];
  meta: Meta;
}

interface Meta {
  pagination: Pagination;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Post {
  id: number;
  attributes: PostAttributes;
}

interface PostAttributes {
  title: string;
  description: string;
  date: string;
  author: string;
  body: string;
  discharges?: any;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
  categories: Categories;
}

interface Categories {
  data: CategoriesData[];
}

interface CategoriesData {
  id: number;
  attributes: CategoriesAttributes;
}

interface CategoriesAttributes {
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Image {
  data: ImageData[];
}

interface ImageData {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  url: string;
}
