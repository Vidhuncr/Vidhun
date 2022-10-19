import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Blog() {
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState();

    const sendRequest = async () => {
        const response = await axios
            .get("http://localhost:5000/api/blog/")
            .catch((err) => console.log(err));
        const data = response.data;
        return data;
    };

    useEffect(() => {
        sendRequest().then((data) => {
            setBlogs(data.data);
        });
    }, []);
    console.log(blogs);

    const deleteBlog = (blogId) => {
        console.log("DELETE", blogId)
        sendDeleteRequest(blogId).then(() => window.location.reload(false));
    }

    const sendDeleteRequest = async (blogId) => {
        const response = await axios
            .delete(`http://localhost:5000/api/blog/${blogId}`)
            .catch((err) => console.log(err));
        const data = response.data;
        console.log(data)
        return data;
    };

    return (
        <div className="container">
            <div className="row">
                {blogs && blogs.map((blog, index) => (
                        <div className="col-md-4 blog-container" key={index}>
                            <div className="thumbnail">
                                <a>
                                    <span className="pull-right"><i onClick={() => deleteBlog(blog._id)} class="icon-trash"></i></span>
                                    <img src={blog.image} alt="Lights"/>
                                    <div className="caption">
                                        <p>{blog.title}</p>
                                        {blog.description}
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Blog;