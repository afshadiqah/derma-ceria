import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./blog.module.css";
import CardBlog from "../../components/CardBlog/CardBlog";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import CardBlog3 from "../../assets/images/blog1.jpg";
import CardBlog2 from "../../assets/images/blog2.jpg";
import CardBlog1 from "../../assets/images/blog3.jpg";

import useAxios from "axios";
import useSwr from "swr";

const Blog = () => {
  //Sambung BE
  const fetcher = (url) => useAxios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSwr("http://localhost:5000/blog", fetcher);
  console.log(data);
  if (isLoading) {
    return <div>Please Wait...</div>;
  }
  return (
    <div className={styles["body-blog"]}>
      <div className={styles["landing-donasi-page"]}>
        <LandingPageComponent />
      </div>

      <div className={styles.BlogCard}>
        <Container>
          <Row className="gap-6 max-md:flex-col max-md:gap-0">
          {data?.map((blog) => (
            <Col key={blog.id_blog}>
              <CardBlog
                imageSrc={blog.blog_pic}
                startDate={blog.start_date}
                text={blog.blog_desc}
                linkButton={`/blogdetail/${blog.id_blog}`}
              />
            </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
