import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions"
const counter=({counter, dec, inc, reload})=>{
    return(
        <div className="counter-wrapper">
        <div id="count">{counter}</div>
        <div className="buttons">
          <div id="inc" className="button">
            <div className="symbol" onClick={inc}>
              &#10010;	
            </div>
          </div>
          <div id="dec" className="button">
            <div className="symbol" onClick={dec}>
              &ndash;	
            </div>
          </div>
          <div id="reload" className="button">
            <div className="symbol" onClick={reload}>
              &#8635;	
            </div>	
          </div>
        </div>
      </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        counter:state
    }
}
// const mapDispatchToProps=(dispatch)=>{
//     const {inc, dec, reload}=bindActionCreators(actions, dispatch)
//     return{
//         inc, dec, reload
//     }
// }
export default connect(mapStateToProps, actions)(counter);