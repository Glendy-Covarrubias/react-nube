import React, { Component } from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";
import MyCloud from "./MyCloud";

class App extends Component {

    constructor(){
        super();
        this.state = {
            items : []
        }
    }

    componentDidMount() {
        //consumiendo Api
        fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=50')
        .then(result=>result.json())
        .then(items=>this.setState({items}));

        //Movimiento
        // setInterval(() => {
        //     this.forceUpdate();
        // }, 3000);
    }

    render() {
        const json = this.state.items.results;
        var itemPokemon;
        if(json !== undefined){
            itemPokemon = json.map((row,key)=>{
                let template;
                if(row.name === 'pikachu'){
                    template = <MyCloud key={key} text={row.name} />;
                }else{
                    template = <div key={key}>{row.name}</div>;   
                }
                return template;
            });
        }else{
            const template = 
                <div key="0">
                    <h1 className="csstitle">Iniciando</h1>
                </div>
            ;

            return itemPokemon = template;
        }

        const template = 
            <div className="app-outer">
                <div className="app-inner">
                    <h1>Encuentra a pikachu</h1>
                    <TagCloud
                        className = "tag-cloud"
                        rotate    = {() => Math.round(Math.random()) * 90}
                        style     = {{
                                        fontFamily: "sans-serif",
                                        fontSize: () => Math.round(Math.random() * 50) + 16,
                                        // fontSize: 30,
                                        color: () =>
                                                    randomColor(),
                                        padding: 5
                        }}
                    >
                    <div
                        style = {{
                                    fontFamily: "serif",
                                    fontSize: 40,
                                    fontStyle: "italic",
                                    fontWeight: "bold",
                                    color: randomColor()
                                }}
                    >
                        POKEMON
                    </div>
                        {itemPokemon}
                    </TagCloud>
                </div>
            </div>
        ;

        return(template);
    }
}

export default App;
