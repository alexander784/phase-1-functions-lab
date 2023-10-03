// Code your solution in this file!

function distanceFromHqInBlocks(pickuplocation){

    const Hqlocation = 42;

  return Math.abs(pickuplocation - Hqlocation);

  }
  function distanceFromHqInFeet(blocks){
    const hq = 42;
    const hqFeet = 264;
    return Math.abs(hq - blocks)*hqFeet;
  }

  function distanceTravelledInFeet(Start,destination){
    const hqFeet = 264;
    return Math.abs(destination-Start)*hqFeet
}
function calculatesFarePrice(start,destination){
    const hqFeet = 264 ;
    const freeDistance = 400;
    const distance = Math.abs(destination - start)*hqFeet;
    if (distance<= 400){
        return 0;
    }else if (distance>freeDistance && distance<2000){
    const distanceBeyondFree = distance - freeDistance;
    const fare = (distanceBeyondFree ) * 0.02;
    return fare;
    }else if (distance > 2000 && distance <= 2500) {
        return 25; 
    }else {
        return 'cannot travel that far';
    }
}