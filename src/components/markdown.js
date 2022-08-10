import { useMarkdown } from '../context/markdownContext';
import {Container, Row, Col, FloatingLabel, Form, Badge } from 'react-bootstrap';
import { marked } from "marked";

function Markdown() {
    const {text, setText}=useMarkdown();
    const handleChange=(e)=>{
        setText(e.target.value)
    }

  return (
    <Container>
            
       <Row className='d-flex justify-content-center' >
            <Col xs={12} sm={5} >
                <Badge variant="dark" className='badge'>Markdown Input</Badge>
                <FloatingLabel controlId="floatingTextarea"  label="Markdown Text Field" >
                    <Form.Control as="textarea"  defaultValue={text}  onChange={handleChange} className='textarea' />
                </FloatingLabel>
            </Col>
            <Col  xs={12} sm={5} >
                <Badge bg="danger" className='badge'>Previewer</Badge>
                <div className='previewer'
                dangerouslySetInnerHTML={{
                    __html: marked(text),
                }}
                >

                </div>
            </Col>
       </Row>
    </Container>
  )
}

export default Markdown;
