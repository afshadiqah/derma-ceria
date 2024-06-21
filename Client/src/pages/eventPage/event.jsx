import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./event.module.css";
import CardEvent from "../../components/CardEvent/CardEvent";
import LandingPageComponent from "../../components/Landingpage/LandingPageComponent";

import useAxios from "axios";
import useSwr from "swr";

const Event = () => {
  //Sambung BE
  const fetcher = (url) => useAxios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSwr("http://localhost:5000/event", fetcher);
  console.log(data);
  if (isLoading) {
    return <div>Please Wait...</div>;
  }

  return (
    <>
      <div className={styles["body-event"]}>
        <div className={styles["landing-donasi-page"]}>
          <LandingPageComponent />
        </div>

        <div className={styles.eventCard}>
          <Container>
            <Row className="gap-6 max-md:flex-col max-md:gap-0">
              {data?.map((event) => (
                <Col key={event.id_event}>
                  <CardEvent title={event.event_title} imageSrc={event.event_pic} startDate={event.start_date} LinkButton={`/eventdetail/${event.id_event}`} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Event;
