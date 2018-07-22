import React, { Component } from 'react';
import { Map, Marker,Markers } from 'react-amap';

class Nivigation extends Component{
    constructor(props){
        super(props);
        const _this = this;
        this.mapEvents = {
            created(map){
            window.AMap.service(["AMap.Walking"], function() {
                var MWalk = new window.AMap.Walking({
                  map: map,
                  panel: "panel"
                }); 
                console.log(MWalk);
                MWalk.search([
                  {keyword: props.start },
                  {keyword: props.end }
                ], function(status, result) {
                    console.log(result.routes[0]);
                    props.updatePrice(result.routes[0])
                });
            });
            },
        };
        this.state = {
            position: {longitude: 120, latitude: 30},
        }
    }

    render(){
        return(
            <div>
            <div id="container">
                <Map events={this.mapEvents}>
                  <Marker/>
                </Map>
            </div>
            <div id="panel"></div>
            </div>
        )
    }
}

export default Nivigation