import React from 'react'
import Head from '../../component/head';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';

function Places(props) {
  console.log("places",props);
  return (
    <div className="wrapper">
      <main>
        <section className="places_section">
          <Head/>
          <ul className="places">
            {
              (props.data && props.data.length)?
              props.data[0].visitingplace.map((item,index) => 
                <li key={index}>
                  <Link to={`/places/${item.name}`} className="text-link">
                    <img src={`/images/${item.img}`} alt={item.name} />
                    <span>{item.name}</span>
                    <p>{item.description}</p>
                  </Link>
                </li> 
              ):null
            }
          </ul>
        </section>
      </main>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data:state.cityData
  }
}

export default connect(mapStateToProps,null)(Places);
