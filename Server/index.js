import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";
import userRoutes from "./routes/user.js";
import eventRoutes from "./routes/event.js";
import eventdetailRoutes from "./routes/eventdetail.js";
import pembayaranRoutes from "./routes/metode_pembarayan.js";
import riwayatRoutes from "./routes/riwayat_donasi.js";
import donasiBarangRoutes from "./routes/donasi_barang.js";
import donasiRoutes from "./routes/donasi.js";
import donasi_uangRoutes from "./routes/donasi_uang.js";
import detaildonasiRoutes from "./routes/detaildonasi.js";
import pelacakan_donasiRoutes from "./routes/pelacakan_donasi.js";
import transparansi_benefisiariRoutes from "./routes/transparansi_benefisiari.js";
import blogRoutes from "./routes/blog.js";
import blogdetailRoutes from "./routes/blogdetail.js";
import dashboard_donaturRoutes from "./routes/dashboard_donatur.js";
import kampanyeRoutes from "./routes/kampanye.js";
import brandpeduliRoutes from "./routes/brandpeduli.js";

const App = express();
dotenv.config();
App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(express.static("public"));

const port = process.env.PORT || 5000;

App.get("/", (req, res) => {
  // res.json({message: "Hello World"});
  res.sendFile(__dirname + "/public/index.html");
});

// tambahin disini gaes + tambahin file js di folder routes
App.use("/users", userRoutes);
App.use("/event", eventRoutes);
App.use("/eventdetail", eventdetailRoutes);
App.use("/metode_pembayaran", pembayaranRoutes);
App.use("/riwayat_donasi", riwayatRoutes);

App.use("/donasi", donasiRoutes);
App.use("/donasi_barang", donasiBarangRoutes);
App.use("/donasi_uang", donasi_uangRoutes);
App.use("/detaildonasi", detaildonasiRoutes);
App.use("/pelacakan_donasi", pelacakan_donasiRoutes);
App.use("/transparansi_benefisiari", transparansi_benefisiariRoutes);
App.use("/blog", blogRoutes);
App.use("/blogdetail", blogdetailRoutes);
App.use("/dashboard_donatur", dashboard_donaturRoutes);
App.use("/kampanye", kampanyeRoutes);
App.use("/brandpeduli", brandpeduliRoutes);

App.get("/hello", (req, res) => {
  res.json({ message: "Hello World from Server" });
});

App.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
