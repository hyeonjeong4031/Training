import React, { useState, useEffect  } from "react";
import CertiCard from "./CertiCard";
import CertiEditForm from "./CertiEditForm"
import * as Api from "../../api"

function Certi({portfolioOwnerId, isEditable}){
    const [isEditing, setIsEditing] = useState(false);
}