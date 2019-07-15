import React from 'react';

import { ComponentFilterListItem } from './ComponentFilterListItem.js';

export class ComponentFilterList extends React.Component{
  constructor(props){
    super(props);
    const {list, title} = props;
    this.state = {
      list: list,
      title: title,
    };
  }

  handleClick(i){
    this.setState({active: i});
  }

  shouldComponentUpdate(nextP, nextS){
    return true;
  }

  render(){
    let scarlet = this.state.list.map((o, i) => {
      return (
        <ComponentFilterListItem key={`${i}_cfli`}
            active={(i === this.props.active) ? true : undefined}
            text={o} i={i}
            onClick={i => this.props.onClick(i)}/>
      );
    });
    return(
      <div className="filter-list">
        {this.state.title && 
          <p>{this.state.title}</p>
        }
        {scarlet}
      </div>
    );
  }
}