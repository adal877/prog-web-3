import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <a rel="noreferrer" target="_blank" href="https://github.com/adal877" className="button-link">
                    <h4>{this.props.title}</h4>
                </a>
            </div>
        );
    }
}

export default Footer;