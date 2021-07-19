import React, { Component, MouseEvent } from "react";
import $ from "jquery";
import PubSub from "pubsub-js";
import "./JqueryDemo.css";

export default class JqueryDemo extends Component{

    public componentWillMount(){
        PubSub.subscribe("ReactButtonClick",(msg:string | symbol, data:string)=>{
            $("h1").toggleClass(data);
        });
    }

    public componentDidMount(){
        $("button").click(()=>{
            $("h1").toggleClass("red");
        });        
    }

    private ButtonClickHandler=(event:MouseEvent):void=>{
        
        PubSub.publish("ReactButtonClick","red");
    }
    

    public render(){
        return (
            <React.Fragment>
                <div>
                    <h1>jquery in React App</h1>
                    <button className="btn btn-primary">Click Me Using Jquery</button>
                    <button className="btn btn-secondary" onClick={this.ButtonClickHandler}>Click me using React</button>
                </div>
            </React.Fragment>
        )
    }

}