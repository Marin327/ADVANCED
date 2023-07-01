function walk(steps, stepLength, speed) {

    let distanceInMeters = steps * stepLength;
    let speedInMeteresPerSecond = speed / 3.6;
    let rest = Math.floor(distanceInMeters / 500) * 60;
    let time = distanceInMeters / speedInMeteresPerSecond + rest;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);

    console.log(`${hours < 10 ? "0": ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);


}
walk(4000, 0.60, 5)