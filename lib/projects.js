export const getAllProjects = async () => {
    const markdownFiles = require.context('../_posts/projects', false, /\.md$/)
        .keys()
        .map(relativePath => {
            console.log(relativePath);
            return relativePath.substring(2)
        });
   return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../_posts/projects/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
}