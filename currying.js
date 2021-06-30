function makeRequest(location){
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`)
    if(location === 'google'){
      resolve('Google says hi')
    }
    else{
      reject('We can only talk to google')
    }
  })
}

function processRequest(response){
  return new Promise((resolve, reject) => {
    console.log('Processing response')
    resolve(`Extra Information + ${response}`)
  })
}

// makeRequest('google').then(response => {
//   console.log('Response Received')
//   return processRequest(response)
// }).then(processedResponse => {
//   console.log(processedResponse)
// }).catch(err =>{
//   console.log(err)
// })


async function doWork(){
  try{
  const response = await makeRequest('google')
  console.log('Response received')
  const processedResponse = await processRequest(response)
  console.log(processedResponse)
  } catch(err){
    console.log(err)
  }
}

doWork()