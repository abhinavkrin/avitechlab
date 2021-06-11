export const getAllBlogs = async () => {
    const markdownFiles = require.context('../_posts/blogs', false, /\.md$/)
        .keys()
        .map(relativePath => {
            return relativePath.substring(2)
        });
   return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../_posts/blogs/${path}`);
      console.log(markdown);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
}