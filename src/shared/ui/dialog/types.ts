import { CreateUpdateBlogData } from 'entities/blog/types.ts';

export enum DialogTypes {
  CreateUpdateBlog = 'createUpdateBlog',
}

type DialogState<Data> = {
  isOpen: boolean;
  data: Data | null;
};

export type Dialogs = {
  [DialogTypes.CreateUpdateBlog]: DialogState<CreateUpdateBlogData>;
};
