import { Button, Stack, TextField } from '@mui/material';
import { CommonDialogLayout, DialogTypes } from 'shared/ui/dialog';

export function CreateUpdateBlogDialog() {
  return (
    <CommonDialogLayout
      title={data => <>{data?.id ? 'Update Blog' : 'Create Blog'}</>}
      type={DialogTypes.CreateUpdateBlog}
      content={() => (
        <Stack gap="1rem">
          <TextField label="Name" size="small" />
          <TextField label="Description" size="small" />
          <TextField label="Website Url" size="small" />
        </Stack>
      )}
      actions={() => (
        <Stack>
          <Button size="small" color="inherit" variant="outlined">
            Create
          </Button>
        </Stack>
      )}
    />
  );
}
