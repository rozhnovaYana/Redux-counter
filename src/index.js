import {createStore} from 'redux'
const reducer=(state=24, action)=>{
  switch(action.type){
    case "dec":return state-1
    case "inc": return state+1
    case "reload": return 24
    default: return state
  }
}
const store=createStore(reducer)
const inc=()=>({type:'inc'})
const dec=()=>({type:'dec'})
const reload=()=>({type:'reload'})
store.subscribe(()=>{
  document.querySelector("#count").textContent=store.getState()
})
document.querySelector("#inc").addEventListener('click', ()=>{
  store.dispatch(inc())
})
document.querySelector("#dec").addEventListener('click', ()=>{
  store.dispatch(dec())
})
document.querySelector("#reload").addEventListener('click', ()=>{
  store.dispatch(reload())
})