import React from 'react';

export class Circle extends React.Component {
  constructor(props){
    super(props);
    const {x, y, r, color} = props;
    this.state = {
      x: x,
      y: y,
      r: r,
      color: color,
    }
  }
  render(){
    return(
      <div className="circleboye"
        style={{
          left: this.state.x,
          top: this.state.y,
          width: this.state.r,
          height: this.state.r,
          background: this.state.color,
        }}>
      </div>
    );
  }
}