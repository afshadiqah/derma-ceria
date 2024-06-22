import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./blog.module.css";
import Blogdetail from "../../assets/images/blogdetail.jpg";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";
import axios from "axios";
import useSwr from "swr";
import { useParams } from "react-router-dom"; // Import useParams to get URL parameters

const BlogDetail = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL

  // Function to fetch data from backend
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSwr(`http://localhost:5000/blogdetail/${id}`, fetcher); // Use template literal to inject 'id' into URL

  if (isLoading) {
    return <div>Please Wait...</div>;
  }

  if (error) {
    return <div>Error loading blog details</div>;
  }

  if (!data || data.length === 0) {
    return <div>No blog details available</div>;
  }

  const blog = data[0]; // Assuming data is an array and taking the first element

  // Format start date and time
  const startDate = new Date(blog.start_date);
  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(startDate);
  const formattedTime = `${startDate.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  })} - Selesai`;

  return (
    <div className="bg-white">
      <div className="detail-blog-landing" style={{ position: "relative", minHeight: "100vh" }}>
        {/* Landing Page Component */}
        <LandingPageComponent />
      </div>
      <div className={styles["content-container"]}>
        <Row key={blog.id_blog}>
          <h2 className={styles["title"]}>{blog.blog_title}</h2>
          <p className={styles["date-category"]}>
            DermaCeria | Derma Ceria | {formattedDate}
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
      </div>
    </div>
  );
};

export default BlogDetail;
