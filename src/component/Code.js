import React, { useState } from 'react';
import '../App.css';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Code = () => {
  const [code, setCode] = useState(''); // 입력된 코드 상태
  const [analysis, setAnalysis] = useState(null); // 분석 결과 상태
  const [loading, setLoading] = useState(false); // 로딩 상태

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAnalysis(null);

    // 더미 데이터로 UI 확인
    setTimeout(() => {
      setAnalysis({
        readability: 'Good',
        timeComplexity: 'O(n)',
        comments: '3 comments in 10 lines',
      });
      setLoading(false);
    }, 1000); // 로딩 효과를 보기 위한 딜레이
  };

  // 새로고침 함수
  const handleReset = () => {
    window.location.reload(); // 페이지 새로고침
  };

  return (
    <div>
      <Container className="mt-4">
        <div className="cr-container">
          <h3 className="cr">CODE REVIEW</h3>
        </div>
        <Card className="p-3">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Enter your code:</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste your code here..."
              />
            </Form.Group>
            <Button type="submit" className="mt-3" disabled={loading}>
              {loading ? (
                <div className="dots-spinner">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              ) : (
                'Analyze Code'
              )}
            </Button>
          </Form>
          {analysis && (
            <div className="mt-4">
              {analysis.error ? (
                <p className="text-danger">{analysis.error}</p>
              ) : (
                <Card>
                  <Card.Body>
                    <h5>Analysis Result:</h5>
                    <p><strong>Readability:</strong> {analysis.readability}</p>
                    <p><strong>Time Complexity:</strong> {analysis.timeComplexity}</p>
                    <p><strong>Comments:</strong> {analysis.comments}</p>
                  </Card.Body>
                </Card>
              )}
              {/* 기록하기 & 다시하기 버튼 */}
              <div className="mt-3 d-flex justify-content-around">
                <Button className="btn-save" style={{ backgroundColor: 'blue', color: 'white' }}>
                  기록하기
                </Button>
                <Button
                  className="btn-reset"
                  style={{ backgroundColor: '#add8e6', color: 'black' }}
                  onClick={handleReset}
                >
                  다시하기
                </Button>
              </div>
            </div>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default Code;
