const Hq = 42;
const Pickup = 50;
function distanceFromHqInBlocks(Blocks){


   Blocks = Pickup - Hq;
    return Blocks;
    

}


function distanceFromHqInFeet(Feet){
    Feet = 264 * 8;
    return Feet;
}

function distanceTravelledInFeet(North, South, Distance){
  if (North){
        Distance = (North - Hq)*264;
    return Distance;} else if (South){

    Distance = (Hq - South)*264;
    return Distance;
    }

}