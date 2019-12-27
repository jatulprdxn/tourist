import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import { showCity } from '../../store/action';
import './style.scss';

function SearchBox(props) {
const [text,setText] = useState('');

function change(e) {                  // update text in input field
  setText(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  props.displayCity(text);
}

  return (
   <header>
     <h1>Tourist Guide</h1>
     <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form">
          <input type="text" value={ text } placeholder="Search for city" onChange={(e) => change(e) } />
          <button>search</button>
        </div>
     </form>
   </header>
  )
}

const mapStateToProps = (state) => {
  return {
    cityDetail:state.cityData
  }
}

const mapDisptachToProps  = (dispatch) => {
  return {
    displayCity:(input) => dispatch(showCity(input))
  }
}

export default connect(mapStateToProps,mapDisptachToProps)(SearchBox)