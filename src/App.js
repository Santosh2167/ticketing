import React, {Component} from "react";
import Canvas from "./Canvas";


class App extends Component {

    render() {
        return(
            <div>
                <h1>Welcome to your painting pad</h1>
                {/* <ColourSelector
                  hex="#FF0000"/>
                  <ColourSelector/>
                  <ColourSelector
                  hex="#0000FF"/> */}

                  <Canvas/>
            </div>
        )
    }
}

export default App;