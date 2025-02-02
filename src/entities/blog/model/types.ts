export interface Blog {
  id: string;
  name: string;
  createdAt: string;
  websiteUrl: string;
  description: string;
  isMembership: boolean;
}

export interface Params {
  id: string;
}

export interface CreateBlogBody {
  name: string;
  websiteUrl: string;
  description: string;
}

export interface UpdateBlogBody {
  name: string;
  description: string;
  websiteUrl: string;
}

export interface CreatePostBody {
  title: string;
  content: string;
  shortDescription: string;
}
