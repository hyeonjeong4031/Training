import { useNavigate } from "react-router-dom";
import { Card, Row, Button, Col } from "react-bootstrap";

function CertiCard({user, certificate, setIsEditing, isEditable }){
const navigate = useNavigate();
return (
    <Card className="mb-2 ms-3 mr-5" style={{width: "18 rem"}}>
       <Card.Body>
           <Card.Title>자격증</Card.Title>
           <Card.Text>{certificate?.name}
           <input type="text" id="datePicker" class="form-control" value="2019-06-27"/>
           
           </Card.Text>
           <Card.date>{certificate?.name}</Card.date>
       </Card.Body>
    </Card>
)
}


export default CertiCard