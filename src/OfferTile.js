import React from "react";

function CardImage(props) {
    const isImageURL = props.imageUrl;
    // If an image was passed:
    if (isImageURL) {
        return (
            <div className="styleImage">
                <img
                    style={{ width: props.width + "px", marginTop: "-8%" }}
                    src={props.imageUrl}
                    alt={props.name}
                />
            </div>
        );
    }
    return null;
}

function CardContent(props) {
    return (
        <div className="styleCardContent">
            <p className="styleCardTitle">{props.name}</p>
            <p className="styleDescription">{props.description}</p>
            <p className="styleLocationLabel">{props.price}</p>
            <p className="styleLocationLabel">{props.visitedCount}</p>
        </div>
    );
}

export default class OfferTile extends React.Component {
    render() {
        return (
            <div style={{ width: this.props.width + "px" }}>
                <div className="styleCard">
                    <CardImage imageUrl={this.props.imageUrl} width={this.props.width} />
                    <CardContent
                        name={this.props.name}
                        price={this.props.price}
                        visitedCount={this.props.visitedCount}
                        description={this.props.description}
                    />
                </div>
            </div>
        );
    }
}

// 2. Defaults /////////////////////////////////////////////
OfferTile.defaultProps = {
    width: 350
};
