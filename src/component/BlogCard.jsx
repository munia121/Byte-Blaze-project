/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import placeholderimage from '../assets/404 (1).jpg'
import { MdDeleteForever } from "react-icons/md";



const BlogCard = ({ blog, deletable,handleDelete }) => {
    // eslint-disable-next-line no-unused-vars
    const { cover_image, id, title, description, published_at } = blog;


    


    return (
        <div className="flex relative">
            <Link to={`/blog/${id}`}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 transition border-2 border-primary hover:border-secondary  hover:scale-105 border-opacity-30">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderimage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>

            </Link>
            {deletable && 
            <div onClick={()=> handleDelete(id)} className="absolute -top-5 -right-5 p-3 bg-primary rounded-full ">
                <MdDeleteForever size={20} className="text-secondary "></MdDeleteForever>
            </div>}
        </div>
    );
};

export default BlogCard;