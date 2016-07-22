'use strict'
import React            from 'react';

export default function ItemList(props) {

  return(
    <div className="list-group">
      <h2> Available Items Near You </h2>
      <ul>
        {Object.keys(props.list)
        .map(key=>(
        <li className="list-group-item" key={key}>
          <strong>{props.list[key].item_name}</strong> {props.list[key].item_desc}
          <button className="btn btn-info"
              type="button"
              key={key}
              onClick={props.onSubmitBorrow}
              value={props.list[key].item_id}>
              borrow this!
            </button>
          </li>
        ))
      }
    </ul>
    </div>
  )
}
