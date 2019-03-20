import React, { Component } from 'react';

export class Image extends Component {

    render() {
        return (
            <div>
              <img src = {this.props.url} width="300px"/>
              <p>{this.props.caption}</p>
            </div>
        )
    }
}