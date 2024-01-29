// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    let scuberHq = 42;
    return Math.abs(someValue - scuberHq);
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination){
    let feetTravelled = Math.abs(start - destination) * 264;
    if (feetTravelled <= 400){
        return 0;
    } else if (feetTravelled > 400 && feetTravelled < 2000) {
        return (feetTravelled - 400) * .02
    } else if (feetTravelled > 2000 && feetTravelled < 2500){
        return 25;
    } else if (feetTravelled > 2500){
        return "cannot travel that far"
    }
}


