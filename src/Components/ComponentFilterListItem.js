import React from 'react';

export function ComponentFilterListItem(props){
  return (
    <div>
      <span className={props.active && "filter-active"} onClick={() => props.onClick(props.i)}>
        {props.text}
      </span>
    </div>
  );
}