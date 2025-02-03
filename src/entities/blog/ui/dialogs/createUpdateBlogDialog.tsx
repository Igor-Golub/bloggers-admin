import { Button, Stack, TextField } from '@mui/material';
import { CommonDialogLayout, DialogTypes, useDialog } from 'shared/ui/dialog';

export function CreateUpdateBlogDialog() {
  const { data } = useDialog(DialogTypes.CreateUpdateBlog);

  return (
    <CommonDialogLayout
      title={data?.id ? 'Update Blog' : 'Create Blog'}
      type={DialogTypes.CreateUpdateBlog}
      content={
        <Stack gap="1rem">
          <TextField label="Name" size="small" />
          <TextField label="Description" size="small" />
          <TextField label="Website Url" size="small" />
        </Stack>
      }
      actions={
        <Stack>
          <Button>Create</Button>
        </Stack>
      }
    />
  );
}
