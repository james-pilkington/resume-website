import React from "react"
//import small_logo from "../images/logo.png"

const Footer = () => {
    return(
        <footer>
            <section>
            {/* <div>
                <img src={small_logo}  />
            </div> */}
            <div>
                <h3>Contact</h3>
            <ul>
                <li>Phone Number: 978 408 9868</li>
                <li>Email: James.Pilkington2@gmail.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li>LinkedIn</li>
                <li>Github</li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;