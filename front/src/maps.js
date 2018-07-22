import React, { Component } from 'react';
import { Map, Marker,Markers } from 'react-amap';
import Navigation from "./navigation"

class Maps extends Component{
    constructor(props){
        super(props);
        const _this = this;
        this.state={
            start:"",
            end:"",
            position: {longitude: 120, latitude: 30},
            route:true,
            time:"",
            distance:""
        }
        this.updateRoute=this.updateRoute.bind(this);
    }

    updateRoute(){
        this.setState({
            route:false
        })
    }

    onChangeStart(evt){
        this.setState({
            start:evt.target.value
        })
    }

    onChangeEnd(evt){
        this.setState({
            end:evt.target.value
        })
    }

    updatePrice(route){
        this.setState({
            time:route.time,
            distance:route.distance
        })
    }


    render(){
        return(
            <div >
                {this.state.route?
                <div id="container">
                    <Map amapkey={"f713e7630f3a64da5c674244f24247c7"} center={this.state.position} events={this.mapEvents}>
                      <Marker position={this.state.position} />
                    </Map>
                    <div id="route">
                        <div>
                            <span id="round1"></span><input id="txt1" type="text" onChange={this.onChangeStart.bind(this)} />
                        </div>
                        <hr id="txt-hr"/>
                        <div>
                            <span id="round2"></span><input id="txt2" type="text" onChange={this.onChangeEnd.bind(this)} />
                        </div>
                    </div>
                    <div id="status">
                        <p id="now" onClick={this.updateRoute}>现在</p>
                        <hr id="txt-hr2" />
                        <p id="book">预约</p>
                    </div>
                </div>
                :
                <div>
                    <Navigation start={this.state.start} end={this.state.end} updatePrice={(route)=>this.updatePrice(route)} />
                    <div id="route">
                        <div>
                            <p id="txt1">距离{this.state.distance}米</p>
                        </div>
                        <hr id="txt-hr"/>
                        <div>
                            <p id="txt2">预计需要{(this.state.time/60).toFixed(1)}分钟</p>
                        </div>
                    </div>
                    <div id="status">
                        <p id="now">¥{(this.state.distance/500).toFixed(1)}</p>
                        <hr id="txt-hr2" />
                        <p id="book">呼叫</p>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default Maps;