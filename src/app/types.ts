import { CreateUpdateBlogData } from 'entities/blog/types.ts';
import { ConfirmationDialogData, DialogState, DialogTypes } from 'shared/ui/dialog';

export type Dialogs = {
  [DialogTypes.CreateUpdateBlog]: DialogState<CreateUpdateBlogData>;
  [DialogTypes.CommonLoading]: DialogState<void>;
  [DialogTypes.CommonConfirmation]: DialogState<ConfirmationDialogData>;
};
