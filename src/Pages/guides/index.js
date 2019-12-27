import React from 'react'
import { connect } from 'react-redux';

 function Guides(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.match.params.name}</h1>
      {
        props.data && props.data.length &&
        props.data[0].visitingplace.map((item,index) => 
        item.name === props.match.params.name?
        <ul>
          { 
           item.guide.map((name,index) => 
              <li key={index*3}>
                <img alt={name}/>
                <span>{name}</span>
              </li>
            )
          }  
        </ul>:null
        )
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data:state.cityData
  }
}

export default connect(mapStateToProps,null)(Guides);