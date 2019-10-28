// step 2 Then, we define our reducer and our new function dispatch

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

// step 1 We declare our state to equal an object {count: 0}
let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

changeState(state, action)


 
/*
step 3. 
  Each time dispatch is called, the current version of state is passed into changeState, 
  and then state is assigned a new value based on what changeState returns.
*/

function dispatch(action){
  state = changeState(state, action)
  // call the render function everytime so the html page updates when the state changes
  render()
}
 
dispatch({type: 'INCREASE_COUNT'})
  // => 1
dispatch({type: 'INCREASE_COUNT'})
  // => 2
dispatch({type: 'INCREASE_COUNT'})
  // => 3


  // rendering our new state

  function render(){
    document.body.textContent = state.count
  }

  // call the render function
render()


// benefits of dispatch First, it persisted changes to our state.
// Second, it ensured that each time our state updates, our HTML updates to reflect these changes. It does this by simply calling the render function. 
//Each time we call dispatch it's as if we are then calling render.