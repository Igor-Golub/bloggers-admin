import { Box, Card, CardContent, CardHeader, Chip, Link, Typography } from '@mui/material';
import { blogApi } from 'entities/blog';

interface Props {
  id: string;
}

export function BlogDetails({ id }: Props) {
  const { data: blog } = blogApi.useByIdQuery(id);

  if (!blog) return <Typography>Blog not found</Typography>;

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card sx={{ maxWidth: 600, p: 2, boxShadow: 3 }}>
        <CardHeader title={blog.name} subheader={new Date(blog.createdAt).toLocaleDateString()} />

        <CardContent>
          <Typography variant="body1" gutterBottom>
            {blog.description}
          </Typography>

          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <Typography variant="body2">Website:</Typography>

            <Link href={blog.websiteUrl} target="_blank" rel="noopener">
              {blog.websiteUrl}
            </Link>
          </Box>

          <Chip
            label={blog.isMembership ? 'Membership Required' : 'Open Access'}
            color={blog.isMembership ? 'error' : 'success'}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
