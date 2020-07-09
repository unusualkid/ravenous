import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business"

function business(business) {
    return <Business business={business}/>;
}

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map(business)}
            </div>
        );
    }
}

export default BusinessList;