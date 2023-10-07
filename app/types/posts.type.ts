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
  attributes: Attributes;
}

interface Attributes {
  Titulo: string;
  Descripcion: string;
  Fecha: string;
  Autor: string;
  Cuerpo: string;
  Descargo: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Slug: string;
  Imagen: Imagen;
  categories: Categories;
}

interface Categories {
  data: CategoriesData[];
}

interface CategoriesData {
  id: number;
  attributes: CategoryAttributes;
}

interface CategoryAttributes {
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Imagen {
  data: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
  provider_metadata: Providermetadata;
}

interface Providermetadata {
  public_id: string;
  resource_type: string;
}
