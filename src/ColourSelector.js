import React, {Component} from "react";

class ColourSelector extends Component {
    state = {hex: this.props.hex}
    onColourSelectorChange(event){
        console.log(event.target.value);
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        const {hex="#00ffff"} = this.state;

        return(
            <div>
                <input 
                type="color"
                value={hex}
                onChange={(event)=> this.setState({hex: event.target.value})}
                ></input>
            </div>
        )
    }
}

ColourSelector.defaultProps = {
    hex: "#00ffff"
}

export default ColourSelector;