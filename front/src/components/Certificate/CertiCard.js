import { useNavigate } from "react-router-dom";
import { Card, Row, Button, Col } from "react-bootstrap";

function CertiCard({user, certi, setIsEditing, isEditable }){
    // console.log("🐰CertiCard,", isEditable)

const navigate = useNavigate();
console.log("user:",user)
console.log("certi:",certi)
console.log("setIsEditing:",setIsEditing)
console.log("isEditable",isEditable)
// return (
    // <Card className="mb-2 ms-3 mr-5" style={{width: "18 rem"}}>
    //    <Card.Body>
    //        <Card.Title>자격증</Card.Title>
    //        <Card.Text>{certificate?.title}
    //        </Card.Text>
    //        <Card.Text>{certificate?.description}</Card.Text>
    //        <Card.Text>
    //           {/* <input type="text" id="datePicker" class="form-control" value="2019-06-27"/> */}
    //        </Card.Text>
    //        <Card.date>{certificate?.name}</Card.date>


    //     {isEditable &&(//editable은 본인 포트폴리오를 가리키는듯?
    //         <Row>
    //         <Col>
    //             <Row className="mt-3 text-center text-info">
    //                 <Col sm={{span: 20 }}>
    //                     <Button
    //                         variant="outline-info"
    //                         size="sm"
    //                         onClick={()=>setIsEditing(true)}>
    //                         편집
    //                     </Button>
    //                 </Col>
    //             </Row>
    //         </Col>
    //         <Col>
    //         <Row className="mt-3 text-center text-info">
    //             <Col sm={{span: 20 }}>
    //                 <Button
    //                     variant="outline-info"
    //                     size="sm"
    //                     //onClick={()=>setIsEditing(true)}>
    //                     >
    //                     삭제
    //                 </Button>
    //             </Col>
    //         </Row>
    //     </Col>
    //     </Row>
    //     )}


    //    </Card.Body>
    // </Card>
// )
}


export default CertiCard