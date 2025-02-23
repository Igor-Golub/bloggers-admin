import { UpdateBlogData } from 'entities/blog/types.ts';
import { ConfirmationDialogData, DialogState, DialogTypes } from 'shared/ui/dialog';

export type Dialogs = {
  [DialogTypes.CreateBlog]: DialogState<void>;
  [DialogTypes.UpdateBlog]: DialogState<UpdateBlogData>;
  [DialogTypes.CommonLoading]: DialogState<void>;
  [DialogTypes.CommonConfirmation]: DialogState<ConfirmationDialogData>;
};
