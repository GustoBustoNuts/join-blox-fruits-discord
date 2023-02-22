const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const fetch = require('node-fetch')

async function main(){
  console.log('\x1b[36m%s\x1b[0m', 'Program started. Notification will be sent here when to join. Make sure to be ready to join the server.');
  while (true){
    try{
      let response = await fetch('https://discord.com/api/v9/invites/bloxfruits?with_counts=true&with_expiration=true')
  response = await response.json();
  if (response['approximate_member_count']<1000000){
    console.log(`JOIN THE SERVER NOW! SERVER COUNT IS ${response['approximate_member_count']}`);
  }
    }catch{console.log("Error. Ratelimited?")}
    
    await delay(1500)
  }
}
main()
