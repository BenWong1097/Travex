import React from 'react';

import { ComponentFilterList } from './ComponentFilterList.js';

export class ComponentFilterListContainer extends React.Component{
  constructor(props){
    super(props);

    const { active } = props;
    this.state = {
      active: active
    }
  }

  handleClick(i){
    this.setState({active: i});
  }

  render(){
    let scarlet = '';
    if (this.props.list){
      scarlet = this.props.list.map((v, i) => {
        if(v.filter !== this.state.active)
          return null;
        return (<div className="flex itinerary-li no-padding">
          <div>
            <p className="grey">{v.title}</p>
            <p>{v.subtitle}</p>
          </div>
          <div>
            <p className="txt-sm">{v.time}</p>
            <p className="green">${v.price}</p>
          </div>
        </div>);
      })
    }
    return (
      <div>
        <ComponentFilterList
          list={this.props.filterList} active={this.state.active}
          onClick={i => this.handleClick(i)}
          title={this.props.title}/>
        
          <div className="itinerary-list space-top-sm">
          {scarlet}
        </div>
      </div>
    );
  }
}