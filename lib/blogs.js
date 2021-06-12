const blogCache = [];
export const getAllBlogs = async () => {
    if(blogCache.length !== 0)
        return blogCache;
    const markdownFiles = require.context('../_posts/blogs', false, /\.md$/)
        .keys()
        .map(relativePath => {
            return relativePath.substring(2);
        });
   await Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../_posts/blogs/${path}`);
      const filename = path.replace(/\d{4}-\d{2}-\d{2}-\d{6}-/,'');
      const id = filename.substring(0,filename.length-3);
      const blog = { ...markdown.attributes, slug: id, id, html: markdown.html, link: '/blogs/'+id };
      blogCache.push(blog);
    })
   );
   blogCache.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime() )
   return blogCache;
}

export const getBlog =  async (id) => {
    const markdown = await import(`../_posts/blogs/${id}.md`);
    return { ...markdown.attributes, slug: id, id, html: markdown.html };
}

export const getBlogsByPage = async (page = 1, limit = 10) => {
    let blogs = await  getAllBlogs();
    if(blogs.length > (page-1)*limit){
        return blogs.slice((page-1)*limit, page*limit);
    } else {
        return [];
    }
}

export const getAllBlogsId = async () => {
    const blogs = (await getAllBlogs()).map(B => B.id);
    return blogs;
}

const getNextIndex = (blogs = [], blog) => {
    let l = 0, r = blogs.length-1, mid,next;
    while(l<=r){
        mid = parseInt(((l+r)/2).toFixed(0),10);
        if(blogs[mid].id === blog.id){
            next = mid+1;
            break;
        } else if( new Date(blogs[mid].date).getTime() > new Date(blog.date).getTime()){
            l = mid + 1; 
        } else {
            r = mid - 1;
        }
    }
    //assumed that the blog being searched is present in the list
    if(next < blogs.length){
        return next;
    } else {
        return -1;
    }
}
export const getNextBlogMeta = async (blog) => {
    const allBlogs = await getAllBlogs();
    const i = getNextIndex(allBlogs,blog);
    console.log(blog.title,i);
    if(i === -1){
        return null;
    } else {
        return allBlogs[i];
    }
}