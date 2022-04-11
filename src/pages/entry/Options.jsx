import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ScoopOptions from "./ScoopOptions";

export default function Options({ optionType }) {
    const [items, setItems] = useState([]);
    // optionType is 'scoops' or 'toppings
    useEffect(() => {
        axios
            .get(`http://localhost:3030/${optionType}`)
            .then((response) => setItems(response.data))
            .catch((error) => {
                console.log(error);
            });
    }, [optionType]);

    //
    const ItemComponent = optionType === "scoops" ? ScoopOptions : null;

    const optionItems = items.map((item) => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePate}
        />
    ));

    return <Row>{optionItems}</Row>;
}
