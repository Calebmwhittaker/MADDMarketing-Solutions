import BlogCards from "../components/BlogCards";
import Footer from "../parts/footer/Footer";

const Blog = () => {
  return (
    <div className="blog-page-container">
      <main>
        <section className="blog-page">
          <BlogCards />
        </section>
        <hr style={{ width: "75%", margin: "30px auto" }}></hr>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
