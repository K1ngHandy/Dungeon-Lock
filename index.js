// Building objects with functionality
// const dungeonLockCharacter = {
//     newRoom: function (roomType) {
//         return `You have now entered the ${roomType} room.`;
//     }
// }

// const currentRoom = dungeonLockCharacter.newRoom('dungeon'); // dungeon entered as parameter
// console.log(currentRoom);

// Referencing the object using this inside methods
const dungeonLockCharacter = {
    location: 'dungeon',
    changeRoom: function (newRoom) { // method to change location
        this.location = newRoom;
    }
}

dungeonLockCharacter.changeRoom('arsenal');
console.log(dungeonLockCharacter.location); // prints 'arsenal'
