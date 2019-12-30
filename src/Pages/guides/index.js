import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';

 function Guides(props) {
  console.log("guide",props.match.url);
  return (
    <div className="guides_section">
      <h1>{props.match.params.name}</h1>
      {
        props.data && props.data.length &&
        props.data[0].visitingplace.map((item,index) => 
        item.name === props.match.params.name?
        <ul className="guides">
          { 
           item.guide.map((itemName,index) => 
              <li key={index*3}>
                <Link to={`${props.match.url}/${itemName.name}`}>
                  <img src={`${require('../images/' + itemName.img )}`} alt={itemName.name}/>
                  <span>{itemName.name}</span>
                </Link>
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