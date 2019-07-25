import React from 'react';

export class ComponentListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: false,
    }
  }

  render(){
    return(
      <div className={"flex itinerary-li no-padding li-selectable " + 
            (this.state.active ? 'green-after' : '')}
           onClick={()=>this.setState({active: !this.state.active})}>
        <div>
          <p className="grey">{this.props.title}</p>
          <p>{this.props.subtitle}</p>
        </div>
        <div>
          <p className="txt-sm">{this.props.time}</p>
          <p className="green">${this.props.price}</p>
        </div>
      </div>
    );
  }
}