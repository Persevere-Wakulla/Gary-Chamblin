function PurchasedItems(list, amount){
    let cart = []
    for (const [key,value] of Object.entries(list)){
        // console.log([key,value])
        if (Number(value.slice(1)) < Number(amount.slice(1))){
            cart.push(key)
        }
        if(!cart.length){
            return "Nothing"
        }
    }
    return cart.sort()
}                                                                        

    console.log(PurchasedItems({
    Water: "$1",
    Bread: "$3",
    TV: "$1000",
    Fertilizer: "$20"
}, "$300"));