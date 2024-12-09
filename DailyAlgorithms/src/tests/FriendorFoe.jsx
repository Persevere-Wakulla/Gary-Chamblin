
export default function FriendorFoe(){

    const Input = ["Ryan", "Kieran", "Jason", "Yous"];

    function Friends(arr){
        const friends = arr.filter(str => str.length === 4)
        return friends
        }
        Friends(Input)
    
    return (
        <>
        <div>
            {Friends(Input).join(" and ")} are friends of yours.
        </div>
        </>
    )
    
    }