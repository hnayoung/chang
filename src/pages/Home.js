import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Menu from '../component/Menu';
import Footer from '../component/Footer';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Main from '../component/Main';
import Com from '../component/Com';
import Code from '../component/Code';

const Home = () => {
  const location = useLocation(); // 현재 URL 경로를 가져옴
  const [communityView, setCommunityView] = useState(''); // Community 뷰 상태

  const renderComponent = () => {
    switch (location.pathname) {
      case '/community':
        return <Com view={communityView} />; // 선택된 Community 옵션 전달
      case '/codereview':
        return <Code />;
      default:
        return <Main />;
    }
  };

  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row>
          <Col lg={2}>
            <Menu setCommunityView={setCommunityView} /> {/* Community 뷰 설정 함수 전달 */}
          </Col>
          <Col lg={8}>
            {renderComponent()} {/* 동적으로 컴포넌트 렌더링 */}
            <Footer />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default Home;
