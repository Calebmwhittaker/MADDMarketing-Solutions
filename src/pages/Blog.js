import BlogCards from "../components/BlogCards";
import Footer from "../components/Footer";

const Blog = () => {
    return (
        <>
            <div className="blog-page">
                <BlogCards />
            </div>
            <hr className="w-75 m-auto my-5"></hr>
            <Footer />
        </>
    );
};

export default Blog;