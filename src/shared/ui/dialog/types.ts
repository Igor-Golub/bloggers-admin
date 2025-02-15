export enum DialogTypes {
  CreateUpdateBlog = 'createUpdateBlog',
  CreateUpdatePost = 'createUpdatePost',
  CommonLoading = 'commonLoading',
  CommonConfirmation = 'commonConfirmation',
}

export type DialogState<Data> = {
  isOpen: boolean;
  data: Data | null;
};

export interface ConfirmationDialogData {
  confirmationText: string;
  onConfirm: () => Promise<void>;
}
