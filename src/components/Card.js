import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div>
                <img
                    src={this.props.img}
                    width={this.props.img_w}
                    height={this.props.img_h}
                    alt={this.props.img_alt}
                ></img>
                <a 
                    className={this.props.link_class}
                    rel="noreferrer"
                    target="_blank"
                    href={this.props.link_href}
                >
                    {this.props.link_title}
                </a>
                <p>
                    {this.props.title}
                    <br></br>
                    <h4>{this.props.description}</h4>
                </p>
            </div>
        );
    }
}

export default Card;