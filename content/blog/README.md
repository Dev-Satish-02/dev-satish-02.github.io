# Blog posts

Nothing is published yet, so the site shows no writing. To add a post, create
`content/blog/<category>/<slug>.mdx`, for example `content/blog/product/my-first-post.mdx`:

```mdx
export const frontmatter = {
  title: 'My first post',
  date: '2026-12-01',
  summary: 'One sentence on what the post covers.',
  tags: ['product'],
}

Write the post here, in Markdown.
```

Once the first post exists, a Writing group appears in Notes (and on the phone and in Finder)
automatically. Delete the file and it disappears again.
