import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'shared/hooks';
import { CommonFromDialog, DialogTypes, useDialog } from 'shared/ui/dialog';
import { UpdateBlogBody, blogApi, updateBlog, updateBlogSchema } from '../../model';

export function UpdateBlogDialog() {
  const { data, onClose } = useDialog(DialogTypes.UpdateBlog);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateBlogBody>({
    resolver: zodResolver(updateBlogSchema),
    defaultValues: async () => {
      const { data: blog } = await dispatch(blogApi.endpoints.byId.initiate(data?.id ?? ''));

      return {
        id: data?.id ?? '',
        name: blog?.name ?? '',
        websiteUrl: blog?.websiteUrl ?? '',
        description: blog?.description ?? '',
      };
    },
  });

  const onSubmit = async (formData: UpdateBlogBody) => {
    dispatch(updateBlog(formData));
    onClose();
  };

  return (
    <CommonFromDialog
      onSubmit={handleSubmit(onSubmit)}
      title="Update Blog"
      type={DialogTypes.UpdateBlog}
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
      actions={<Button type="submit">Update</Button>}
    />
  );
}
