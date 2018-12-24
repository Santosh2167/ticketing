import React, {Component} from "react";

class ColourSelector extends Component {

    render() {
        const {hex="#00ffff"} = this.props;

        return(
            <div>
                <input 
                type="color"
                defaultValue={hex}
                ></input>
            </div>
        )
    }
}

ColourSelector.defaultProps = {
    hex: "#00ffff"
}

export default ColourSelector;