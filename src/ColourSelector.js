import React,{Component} from "react";

class ColourSelector extends Component{
   
   onInputChange=(event)=>{
       const {onColourSelectorChange} = this.props;
       onColourSelectorChange(event.target.value);
   }
    componentDidUpdate() {
        console.log("Component Updated")
    }
    
    render(){
        const {hex} = this.props;

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