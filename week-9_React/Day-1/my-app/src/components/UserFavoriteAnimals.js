import React from "react";

class UserFavoriteAnimals extends React.Component {
    render() {
        return (
                 <li>{this.props.animal}</li>
        )
    }
};

export default UserFavoriteAnimals;