// 1. feetToMile********************************************************************************


function feetToMile(feet){
    if (feet <= 0){
        return "Distance can't be Negative!";
    } 
    else {
        var mile = feet * 0.000189394;
        return mile;
    }
}


// 2. woodCalculator********************************************************************************


function woodCalculator(chair, table, bed){
    var chairWood= chair*1;
    var tableWood= table*3;
    var bedWood= bed*5;
    var totalWood=chairWood+tableWood+bedWood;
    return totalWood;
}


// 3. brickCalculator********************************************************************************


function brickCalculator(level) {
    if (level <= 10 && level >= 1) {
        var brickNumber = level * 15000;
        return brickNumber;
    }
    else if (level > 10 && level <= 20) {
        var brickNumber = ((level - 10) * 12000) + 150000;
        return brickNumber;
    }
    else if (level > 20) {
        var brickNumber = ((level - 20) * 10000) + 270000;
        return brickNumber;
    }
    else {
        return "Not Valid";
    }
}

// 4. tinyFriend********************************************************************************


function tinyFriend(friends){   
    var oneFriend =friends[0];
    for(var i = 0; i < friends.length; i++){
        var element = friends[i];
        if (element < oneFriend){
            oneFriend = element;
        }
    }
    return oneFriend;
}

// ********************************************************************************
