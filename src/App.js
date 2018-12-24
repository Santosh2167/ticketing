import React, {Component} from "react";
import ColourSelector from "./ColourSelector";

class App extends Component {
    render(){

        return(
            <div>
                <h1>Welcome to your colour Pad</h1>
                <ColourSelector
                hex="#ff0000"
                />
                <ColourSelector/>
            </div>
        )
    }
}

export default App;
