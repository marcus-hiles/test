(function(){
  console.log('hi')
})()

function fakeLoad(){
  setTimeout(() => {
    return {
      response: true,
      status: 200
    }
  }, 3000)
}


(function(){
  async function loadSomething(){
    let load = await fakeLoad()
    
    if(load.status === 200){
      return status.response 
    }else{
     return false 
    }
  }
})()
