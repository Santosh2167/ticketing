import React,{Component} from "react";

class ColourSelector extends Component{
    state = {hex: this.props.hex}
    
    onInputChange=(event)=>{
        this.setState({hex: event.target.value});
    }

    componentDidUpdate() {
        console.log(this.state.hex)
    }
    
    render(){
        const {hex} = this.state;

        return(
            <div>
                <input 
                  type="color"
                  defaultValue={hex}
                  onChange={this.onInputChange}
                  />
            </div>
        )
    }
}

ColourSelector.defaultProps = {
    hex: "#00B200"
}

export default ColourSelector;