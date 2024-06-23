import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import EventImageComponent from "../../components/EventImageBanner/EventImageBanner";
import EventDetailCard from "../../components/EventDetailCard/EventDetailCard";
import styles from "./event.module.css";
import axios from "axios";
import useSwr from "swr";

const EventDetail = () => {
  const { id } = useParams(); // Mendapatkan ID dari URL parameter

  // Fungsi fetcher untuk SWR
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSwr(`http://localhost:5000/eventdetail/${id}`, fetcher);

  if (!data) {
    return <div>Please Wait...</div>;
  }

  if (error) {
    return <div>Error loading event details</div>;
  }

  const eventDetail = data[0]; // Mengambil detail event dari respons API

  // Format tanggal dan waktu
  const startDate = new Date(eventDetail.start_date);
  const endDate = new Date(eventDetail.end_date);
  const eventDate = startDate.toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  const eventTime = `${startDate.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })} - Selesai`;

  return (
    <div className="bg-white">
      <EventImageComponent imageUrl={eventDetail.event_pic} />

      <div className={styles.containerDetail}>
        <Row>
          <Col className={`descriptionContainer ${styles.descriptionContainer}`}>
            <h4>{eventDetail.event_title}</h4>
            
            <p>{eventDetail.event_desc}</p>
          </Col>
          <Col className={styles.detail_event}>
            <EventDetailCard 
            date={eventDate} 
            time={eventTime} 
            location={eventDetail.location} 
            benefit={eventDetail.benefit} 
            imageSrc={eventDetail.benefit_pic} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EventDetail;
