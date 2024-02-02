import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Component() {
  const data = [{
                 icon:"fa-solid fa-house",
                 title:"Full Course",
                 subtitle:"24 Hours Support"
                },
                {
                  icon:"fa-solid fa-user",
                  title:"Front End",
                  subtitle:"24 Hours Support"
                },
                {
                  icon:"fa-solid fa-house",
                 title:"React JS",
                 subtitle:"24 Hours Support"
                },
                {
                  icon:"fa-solid fa-house",
                  title:"JAVA Full Stack",
                  subtitle:"24 Hours Support"
                },
                {
                  icon:"fa-solid fa-house",
                 title:"Python",
                 subtitle:"With ML & AI"
                }];

  const Column =({data}) =>{
    return(
      <>
       <Col className="text-center p-5 shadow border my-3 mx-2 rounded">
              <div className="icon-box py-5 px-3 rounded-circle border border-dark">
                <i className={data.icon}></i>
                </div>
                <h1>{data.title}</h1>
                <p>{data.subtitle}</p>

            </Col>
      </>
    );
    
  }
  return (
    <Container>
      <Row>
        {data.map((item, index) => {
          return <Column  data={item} key={index}/>      
          
        })}
      </Row>
    </Container>
  );
}

export default Component;
