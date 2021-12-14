// Code your solution in this file!
const hqLocation = 42
let feet=264


function distanceFromHqInBlocks(someValue){
    distanceFromHqInBlocks=Math.abs(someValue-hqLocation);
    return distanceFromHqInBlocks;
}

function distanceFromHqInFeet(someValue){
    distanceFromHqInFeet=feet*Math.abs(someValue-hqLocation);
    return (distanceFromHqInFeet);
}

function distanceTravelledInFeet(start, destination){
    distanceTravelledInFeet = feet*Math.abs(start-destination);
    return distanceTravelledInFeet;
}

function calculatesFarePrice(start, destination){
     let distance = feet*Math.abs(start - destination);
    

    if (distance <= 400 ){
        var farePrice = 0;
        return (farePrice);
        
    }
    if (distance >= 2500){
        return ("cannot travel that far");
    }

    if (distance >=400 && distance <=2000){
        var farePrice = 0.02 * (distance-400);
        return (farePrice);
    }
    else if (distance >= 2000 && distance <2500) {
            var farePrice = 25;

            return (farePrice);
        }
    }
