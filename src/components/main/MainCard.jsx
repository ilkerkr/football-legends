import React, { useState } from 'react'
import Card from "react-bootstrap/Card";
import { Col } from 'react-bootstrap';

const MainCard = (props) => {
    const [show, setShow] = useState(false);
    const { legends } = props;
  return (
    <div>
         <Col>
              <Card className='player-card' onClick={()=> setShow(!show)}>
                {!show ? (
                  <Card.Img variant="top" src={legends.img} />
                ) : (
                  <>
                    <Card.Header>
                      <Card.Title>{legends.name}</Card.Title>
                    </Card.Header>
                    <ul className="m-auto">
                      {legends.statistics.map((item) => (
                        <li className="list-unstyled text-start h5">
                          ⚽ {item}
                        </li>
                      ))}
                    </ul> 
                    <span>{legends.official_career}</span>
                  </>
                )}
              </Card>
            </Col>
    </div>
  )
}

export default MainCard