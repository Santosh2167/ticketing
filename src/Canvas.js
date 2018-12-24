import React,{Component} from "react";
import ColourSelector from "./ColourSelector";

class Canvas extends Component {

    state = {hex: "#00B200",width:400, height:400}

    constructor (props){
        super(props);
        this.canvasRef = React.createRef();
    }

    onColourSelectorChange=(hex)=>{
        this.setState({hex});
    }

    componentDidUpdate() {
        console.log(this.state);
    }
    render(){
        const {hex,width, height} = this.state;
        return (
            <div> 
                <ColourSelector
                value = {hex}
                onColourSelectorChange = {this.onColourSelectorChange}
                 />
                 <canvas 
                 ref = {this.canvasRef}
                 width= {width}
                 height= {height}
                 style = {{border: "2px solid black"}}
                 
                 />

            </div>
        )
    }
}

export default Canvas;
