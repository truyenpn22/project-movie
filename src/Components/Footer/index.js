import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>© Top phim mới thịnh hành, 2022 . PS16701 Phan Ngọc Truyền<a href="https://www.facebook.com/truyen.pn/" target="_blank" rel="noreferrer"> (P.N.T)</a>.</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;