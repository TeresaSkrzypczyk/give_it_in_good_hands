import React, {Component} from "react";
import { Link } from 'react-scroll';

export default class Header extends Component {
    render() {
        return [
            <ul key='ktos'>
                <li><Link to="contact">Kontakt</Link></li>
                <li>lista2</li>
            </ul>,
            <div key='cos' style={{
                weight: '100px',
                height: '1200px',
                backgroundColor: 'red'
            }}>
                <p>TEST (source: header.js)</p>
            </div>

        ];
    }
}

