import React from "react";
import MyNavbar from "../../components/Navbar/MyNavbar";
import Footer from "../../components/Footer/Footer";
import { Container } from "react-bootstrap";

const About = () => {
    return (
        <div className="d-flex min-vh-100 flex-column">
            <MyNavbar />

            <Container className="flex-fill">
            <h1>About PeTIK Blog</h1>
            <p>
                "Bahagia bukan karena punya banyak, tapi merasa cukup" dan 
            </p>
             <p>
                "Jadikan hidupmu lebih bermakna dengan bekerja secara konsisten"
            </p>
            </Container>

            <Footer />
        </div>
    )
}

export default About;