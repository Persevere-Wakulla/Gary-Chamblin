// TODO: Make a program that filters a list of strings and returns a list with only your friends name on it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure they are not. Input strings will only contain letters. NOTE: Keep the original order of the names in the output.

function FriendorFoe(arr) {
        const friends = arr.filter((str) => str.length === 4);
        return friends;
    }
    console.log(FriendorFoe(["Ryan", "Kieran", "Jason", "Yous"]));
  