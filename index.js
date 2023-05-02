function scuberGreetingForFeet(numberOfFeet){
  let reply;
  if (numberOfFeet  <= 400) {
    reply = "This one is on me!"
  } else if (numberOfFeet > 2000 && numberOfFeet < 2500) {
    reply = "I will gladly take your thirty bucks."
  } else if (numberOfFeet > 400  && numberOfFeet < 2500) {
    reply = "That will be twenty bucks."
  } else if (numberOfFeet > 2500) {
    reply = "No can do."
  }
  return reply
}
function ternaryCheckCity(city){
  switch (city) {
    case 'NYC':
       return 'Ok, sounds good.'
      break;
      default:
     return 'No go.'
      break
  }
}
function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
       return 'Thank you so much.'
      break;
    case 'not as generous':
     return 'Thank you.'
      break;
    default:
     return 'Bye.'
      break
  }
}