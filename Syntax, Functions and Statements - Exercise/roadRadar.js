function radar(speed, area) {

    let limit = 0;
    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }
    const speeding = speed - limit;
    if (speeding <= 0) {
       // console.log(`Driving ${speed} km/h in a ${limit} zone`);
       return `Driving ${speed} km/h in a ${limit} zone`
    }
    let status = '';
    if (speeding <= 20) {
        status = 'speeding';
    } else if (speeding > 20 && speeding <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }
    //console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`);
    return `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`;
}
radar(40, 'city');

//
console.log('---------')
//

function radars(speed, typeofZone) {
    let zones = {'residential':20, 'city':50, 'interstate':90, 'motorway':130};
    let differences;
    let status;
    if(speed<=zones[typeofZone]) {
        console.log(`Driving ${speed} km/h in a ${zones[typeofZone]} zone`);
    } else {
        differences = speed - zones[typeofZone];
        status = 'reckless driving';
        if(differences<=20) {
            status = 'speeding';
        } else {
            if(differences<=40) {
                status = 'excessive speeding';
            }
        }
        console.log(`The speed is ${differences} km/h faster than the allowed speed of ${zones[typeofZone]} - ${status}`)
    }
}
radars(40, 'city');