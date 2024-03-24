import { useEffect, useState } from "react";
import BlogCard from "../component/BlogCard";
import { deleteBlog, getBlogs } from "../utils";

const BookMarks = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        const storedBlog = getBlogs()
        setBlogs(storedBlog)
    },[])

    const handleDelete = (id) =>{
        deleteBlog(id)
        const storedBlog = getBlogs()
        setBlogs(storedBlog)
    }


    if(blogs.length < 1){
        return 'data not fount'
    }

    return (
        <div className="grid px-4 py-8 lg:px-16 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {
            blogs.slice(1,19).map((blog)=>
            <BlogCard 
            key={blog.id} 
            blog={blog} 
            deletable={true} 
            handleDelete={handleDelete}>
            </BlogCard>)
        }
        
    </div>
    );
};

export default BookMarks;