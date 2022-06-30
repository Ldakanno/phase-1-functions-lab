function distanceFromHqInBlocks(location) {
    if (location < 42)
        return 42 - location
    else (location > 42) 
        return location - 42
}

function distanceFromHqInFeet(location) {
    if (location < 42)
        return (42 - location) * 264
    else (location > 42)
        return (location - 42) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination)
        return (destination - start) * 264
    else (start > destination) 
        return (start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400)
        return 0;

            if (distanceTravelledInFeet(start, destination) > 2500)
                return "cannot travel that far";

                    if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000)
                        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    
    else (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500)
        return 25;
}
