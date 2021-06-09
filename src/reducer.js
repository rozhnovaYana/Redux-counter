const reducer=(state=24, action)=>{
    switch(action.type){
      case "dec":return state-1
      case "inc": return state+1
      case "reload": return 24
      default: return state
    }
  }
  export default reducer;