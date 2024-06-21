import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./blog.module.css";
import Blogdetail from "../../assets/images/blogdetail.jpg";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";
import axios from "axios";
import useSwr from "swr";

const BlogDetail = () => {
  // Fungsi untuk mengambil data dari backend
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSwr("http://localhost:5000/blogdetail", fetcher);

  if (isLoading) {
    return <div>Please Wait...</div>;
  }

  if (error) {
    return <div>Failed to load</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Invalid date";
    }
    return new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "long", year: "numeric" }).format(date);
  };

  return (
    <div className="bg-white">
      <div className="detail-event-landing" style={{ position: "relative", minHeight: "100vh" }}>
        {/* Komponen Landing Page */}
        <LandingPageComponent />
      </div>
      <div className={styles["content-container"]}>
        {data && data.map((blog) => (
          <Row key={blog.id_blog}>
            <h2 className={styles["title"]}>{blog.blog_title}</h2>
            <p className={styles["date-category"]}>
            DermaCeria | Derma Ceria |{" "}
            {new Intl.DateTimeFormat("id-ID", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }).format(new Date(blog.start_date))}
            </p>
            <Col md={6}>
              <img src={blog.blog_pic || Blogdetail} alt="blog-pic" className={styles["blog-pic"]} />
            </Col>
            <Col md={6}>
              <p className={`${styles["blog-content"]} mb-5`}>
                {blog.blog_text}
              </p>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
