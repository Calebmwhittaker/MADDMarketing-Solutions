import BlogCards from "../components/BlogCards";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
      <main>
        <section className="blog-page">
          <BlogCards />
        </section>
        <hr className="w-75 m-auto my-5"></hr>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
