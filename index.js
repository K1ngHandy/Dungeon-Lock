const dungeonLockCharacter = {
    newRoom: function (roomType) {
        return `You have now entered the ${roomType} room.`;
    }
}

const currentRoom = dungeonLockCharacter.newRoom('dungeon'); // dungeon entered as parameter
console.log(currentRoom);
