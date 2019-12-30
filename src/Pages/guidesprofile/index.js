import React,{ useState,useEffect } from 'react'
import { connect } from 'react-redux';
import { getGuideDetail } from '../../store/action';
import './style.scss';

 function GuidesProfile(props) {
 let arr = [];
 const [checkState,setState] = useState(false);
 const [place,setPlace] = useState([]);
 let name = props.match.params.guidename;
  console.log("checkssdfsdf",props.match.params.name);
 

  useEffect(() => {
     props.guideDetail(name)
  },[])
 
  function handelCheck(e,i) {
    console.log(e.target.id);
    if(e.target.checked) {
      props.detail[0].guideofplace.forEach(item => {
        if(item.placename === e.target.id) {
          const tempPlace = [...place];
          tempPlace.push(item.charge);
          setPlace(tempPlace); 
        }
      })
    }
    else {
      props.detail[0].guideofplace.forEach(item => {
        if(item.placename === e.target.id) {
          const tempPlace = [...place];
          tempPlace.pop(item.charge);
          setPlace(tempPlace); 
        }
      })
    }
    
   console.log(place);    
  }

  function Table() {
    return (
    <table>
      <tbody>
        { 
          place.map((item,index) => 
            <tr>
              <td>{index+1}</td>
              <td>{item}</td>
            </tr>
          
          )
        }
        <tr>
          <td>Total</td>
          <td>{place.reduce((acc,item) => acc+item,0)}</td>
        </tr>
      </tbody>
    </table>
    )
  }

  return (
    <section className="profile">
      <h1>Profile</h1>
      { 
        props.detail[0] && props.detail.length && 
          <div className="profileDetail">
            <figure>
              <img src={`${require('../images/' + props.detail[0].img)}`} 
              alt={props.detail.name}/>
            </figure>
            <ul>
              <li><span>Name: </span>{props.detail[0].name}</li>
              <li><span>Exprience: </span>{props.detail[0].exprience}</li>
              <li><span>Charges for an hour: </span>{props.detail[0].anhourcharge}</li>
            </ul>
        </div>
      }
      <form>
        {
          props.detail[0] && props.detail.length && 
          props.detail[0].guideofplace.map((place,i) => 
            place.placename === props.match.params.name?
            <div className="placesName">
              <input type="checkbox"  onChange={(e) => handelCheck(e,i)} id={place.placename} checked={true}/>  
              <label htmlFor={place.placename}>{place.placename}</label>
            </div>:
            <div className="placesName">
              <input id={place.placename}  onChange={(e) => handelCheck(e,i)} type="checkbox"/>
              <label htmlFor={place.placename}>{place.placename}</label> 
            </div>
            )
        }
      </form>
      { place.length? <Table/>:null }
    </section>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    guideDetail: (name) => dispatch(getGuideDetail(name)) 
  }
}

const mapStateToProps = (state) => {
 console.log(state);
  return {
    detail:state.guideDetail
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(GuidesProfile);