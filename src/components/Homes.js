import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

export default function Homes() {
    return (
        <div className="main">
            <div className="tone1">
                <div className="product_info">
                    <h1>Nike AirMax 2020</h1>
                    <p>New and Improved</p>
                    <h2>$350</h2>
                    <div className="info_btns">
                        <Link className="click discover_btn" to="/launch">Discover</Link>
                        <Link className="click cart_btn" to="/">Add to Cart</Link>
                    </div>
                </div>
            </div>
            <div className="tone2">
                <img src="/images/ban.png" alt="shoe" />
            </div>
        </div>
    )
}
