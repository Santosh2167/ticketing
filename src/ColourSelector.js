import React, {Component} from "react";

class ColourSelector extends Component {

    onColourSelectorChange(event){
        console.log(event.target.value);
    }

    render() {
        const {hex="#00ffff"} = this.props;

        return(
            <div>
                <input 
                type="color"
                defaultValue={hex}
                onChange={this.onColourSelectorChange}
                ></input>
            </div>
        )
    }
}

ColourSelector.defaultProps = {
    hex: "#00ffff"
}

export default ColourSelector;