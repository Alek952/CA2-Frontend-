import { useState } from "react";
import Nav from 'react-bootstrap/Nav';

export default function Menu() {

    const [menuActive, setMenuActive] = useState("");
    const memes = "MEMES";

    function changeMenu(evt) {
        evt.preventDefault();
        switch(evt.target.getAttribute("value")) {
            case "memes": 
                setMenuActive(memes);
                break;
            default: 
                break;
        }
    }

    return (
        <div>
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Nav.Link>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={changeMenu} value='memes'>Memes</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                {menuActive}
            </div>
        </div>
    )
}