// Code your solution in this file!

function distanceFromHqInBlocks(n) {
    return Math.abs(n - 42)
};

function distanceFromHqInFeet(m) {
    return (distanceFromHqInBlocks(m)*264)
}

function distanceTravelledInFeet(a, b) {
    return (Math.abs(a-b) * 264)
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs(start-destination) * 264;
    if(distance <= 400 ){
        return 0
    } else {
        if(distance < 2001){
            return (distance - 400) * 0.02
        } else{
            if(distance < 2501){
                return 25
            } else {
                return 'cannot travel that far'
            }
        }
    }
}
/*
        if(Math.abs(a-b) < 2001 ) {
                return (Math.abs(a-b) * 264) * 0.02
            }
            else {
                if(Math.abs(a-b) < 2500) {
                    return 25
                }
                else {
                    return 'cannot travel that far'
                }
            }

        
    }
}
*/