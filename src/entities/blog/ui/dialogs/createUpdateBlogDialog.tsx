import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'shared/hooks';
import { CommonFromDialog, DialogTypes, useDialog } from 'shared/ui/dialog';
import { CreateBlogBody, createBlog, createBlogSchema } from '../../model';

export function CreateUpdateBlogDialog() {
  const { data, onClose } = useDialog(DialogTypes.CreateUpdateBlog);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBlogBody>({
    resolver: zodResolver(createBlogSchema),
    defaultValues: { name: '', websiteUrl: '', description: '' },
  });

  const onSubmit = async (formData: CreateBlogBody) => {
    console.log(errors);
    dispatch(createBlog(formData));
    onClose();
  };

  return (
    <CommonFromDialog
      onSubmit={handleSubmit(onSubmit)}
      title={data?.id ? 'Update Blog' : 'Create Blog'}
      type={DialogTypes.CreateUpdateBlog}
      content={
        <Stack gap="1rem">
          <TextField
            required
            size="small"
            label="Name"
            placeholder="Enter name..."
            error={Boolean(errors['name'])}
            helperText={Boolean(errors['name']) && errors['name']?.message}
            {...register('name')}
          />

          <TextField
            required
            size="small"
            label="Description"
            placeholder="Enter description..."
            error={Boolean(errors['description'])}
            helperText={Boolean(errors['description']) && errors['description']?.message}
            {...register('description')}
          />

          <TextField
            required
            size="small"
            label="Website Url"
            placeholder="Enter website url..."
            error={Boolean(errors['websiteUrl'])}
            helperText={Boolean(errors['websiteUrl']) && errors['websiteUrl']?.message}
            {...register('websiteUrl')}
          />
        </Stack>
      }
      actions={
        <Stack>
          <Button type="submit">Create</Button>
        </Stack>
      }
    />
  );
}
