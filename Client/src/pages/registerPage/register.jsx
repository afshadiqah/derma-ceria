import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import Logo from "../../assets/logos/logoHorizontal.png";
import "../../index.css";
import "./register.css";
import { auth, provider } from '../../pages/loginPage/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); 
  const navigate = useNavigate();
  
  // const auth = getAuth();
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && loggedIn) { 
        navigate("/donasi");
      }
    });
    return unsubscribe;
  }, [loggedIn, navigate]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User Info:", user);
        setLoggedIn(true); 
      })
      .catch((error) => {
        console.error("Error during sign up with email and password:", error);
      });
  };

  const handleGoogleRegister = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("User Info:", user);
        setLoggedIn(true); 
      })
      .catch((error) => {
        console.error("Error during sign in with Google:", error);
      });
  };
  

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center overlay-text">
      <Row className="w-100 justify-content-center">
        <Col md={6} className="d-none d-md-block p-0">
          <div className="h-100 w-100"></div>
          <div className="copyright-text">
            <h4>Derma Ceria</h4>
            <p>Satukan hati, berbagi kebaikan</p>
            <p>melalui donasi online!</p>
          </div>
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
          <div className="register-form" style={{ maxWidth: "500px", width: "100%", height: "624px"}}>
            <div className="text-center mb-1">
              <div className="logo-container">
                <Link to="/">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="logo"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                </Link>
              </div>
            </div>
            <h3 className="mb-3">Buat Akun Baru!</h3>
            <p>Isi formulir di bawah untuk membuat akun baru.</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName" className="mb-3">
                <Form.Control type="text" placeholder="Masukkan Nama" value={name} onChange={handleNameChange} className="form-control-custom" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Control type="email" placeholder="Masukkan Email" value={email} onChange={handleEmailChange} className="form-control-custom" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Control type="password" placeholder="Masukkan Kata Sandi" value={password} onChange={handlePasswordChange} className="form-control-custom" />
              </Form.Group>
              <Form.Group controlId="formRole" className="mb-3">
                <Form.Select value={role} onChange={handleRoleChange} className="form-control-custom">
                  <option>Pilih Role</option>
                  <option value="1">Donatur</option>
                  <option value="2">Penggalang Dana</option>
                </Form.Select>
              </Form.Group>
              <Button variant="warning" type="submit" className="w-100 mb-3">
                Daftar
              </Button>
              <p className="text-center">Atau</p>
              <Button variant="warning" type="button" className="w-100 mb-3" onClick={handleGoogleRegister}>
                <AiOutlineGoogle style={{ color: "black", marginRight: "8px" }} />
                Daftar dengan Google
              </Button>
            </Form>
            <div className="text-center">
              <p>
                Sudah punya akun? <Link to="/login">Masuk</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
