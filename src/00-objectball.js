function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {Number: 0, Shoe: 16, Points: 22, Rebounds: 12, Assists: 12, Steals: 3, Blocks: 1, slamDunks: 1},
                "Reggie Evans": {Number: 30, Shoe: 14, Points: 12, Rebounds: 12, Assists: 12, Steals: 12, Blocks: 12, slamDunks: 7},
                "Brook Lopez": {Number: 11, Shoe: 17, Points: 17, Rebounds: 19, Assists: 10, Steals: 3, Blocks: 1, slamDunks: 15},
                "Mason Plumlee": {Number: 1, Shoe: 19, Points: 26, Rebounds: 12, Assists: 6, Steals: 3, Blocks: 8, slamDunks: 5},
                "Jason Terry": {Number: 31, Shoe: 15, Points: 19, Rebounds: 2, Assists: 2, Steals: 4, Blocks: 11, slamDunks: 1}
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {Number: 4, Shoe: 18, Points: 10, Rebounds: 1, Assists: 1, Steals: 2, Blocks: 7, slamDunks: 2},
                "Bismack Biyombo": {Number: 0, Shoe: 16, Points: 12, Rebounds: 4, Assists: 7, Steals: 7, Blocks: 15, slamDunks: 10},
                "DeSagna Diop": {Number: 2, Shoe: 14, Points: 24, Rebounds: 12, Assists: 12, Steals: 4, Blocks: 5, slamDunks: 5},
                "Ben Gordon": {Number: 8, Shoe: 15, Points: 33, Rebounds: 3, Assists: 2, Steals: 1, Blocks: 1, slamDunks: 0},
                "Brendan Haywood": {Number: 33, Shoe: 15, Points: 6, Rebounds: 12, Assists: 12, Steals: 22, Blocks: 5, slamDunks: 12}
            }
        }
    };
}

console.log(gameObject());

debugger;

function numPointsScored(nameOfPlayer) {
    let game = gameObject()
    if (game.home.players[nameOfPlayer]) {
        return game.home.players[nameOfPlayer].points;
    }
    else if (game.away.players[nameOfPlayer]) {
        return game.away.players[nameOfPlayer].points;
    }
    else {
        return null;
    }
}

console.log(numPointsScored("Reggie Evans"));

function shoeSize(playerName) {
    let sizeOfShoe = gameObject()
    if (sizeOfShoe.home.players[playerName]) {
        return sizeOfShoe.home.players[playerName].shoe;
    }
    else if (sizeOfShoe.away.players[playerName]) {
        return sizeOfShoe.away.players[playerName].shoe;
    }
    else {
        return null;
    }
}

console.log(shoeSize("Mason Plumlee"));

function teamColors(nameOfTeam) {
    let nameTeam = gameObject()
    if (nameTeam.home.teamName[nameOfTeam]) {
        return nameTeam.home.teamName[nameOfTeam].colors;
    }
    else if (nameTeam.away.teamName[nameOfTeam]) {
        return nameTeam.away.teamName[nameOfTeam].colors;
    }
    else {
        return null;
    }
}

console.log(teamColors("Brooklyn Nets"));

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

console.log(teamNames());

function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return Object.values(game[team].players).map(player => player.number);
        }
    }
    return null;
}

console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
    return null;
}

console.log(playerStats("Bismack Biyombo"));

function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
    
    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].shoe > largestShoeSize) {
                largestShoeSize = game[team].players[player].shoe;
                rebounds = game[team].players[player].rebounds;
            }
        }
    }
    return rebounds;
}

console.log(bigShoeRebounds());

function mostPointsScored() {
    const game = gameObject();
    let topPlayer = "";
    let maxPoints = 0;
    
    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].points > maxPoints) {
                maxPoints = game[team].players[player].points;
                topPlayer = player;
            }
        }
    }
    return topPlayer;
}

console.log(mostPointsScored());

function winningTeam() {
    const game = gameObject();
    let homePoints = Object.values(game.home.players).reduce((sum, player) => sum + player.points, 0);
    let awayPoints = Object.values(game.away.players).reduce((sum, player) => sum + player.points, 0);
    
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

console.log(winningTeam());

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    
    for (let team in game) {
        for (let player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
}

console.log(playerWithLongestName());

function doesLongNameStealATon() {
    const game = gameObject();
    let longestName = playerWithLongestName();
    let maxSteals = 0;
    let playerWithMostSteals = "";
    
    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].steals > maxSteals) {
                maxSteals = game[team].players[player].steals;
                playerWithMostSteals = player;
            }
        }
    }
    return longestName === playerWithMostSteals;
}

console.log(doesLongNameStealATon());