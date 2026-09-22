import { itemsBoughtArr } from "./ItemsBoughtArr.js";
                                            // default parameter
function calculateTotalCost(itemsBoughtArr, discount = 10){
    const total = itemsBoughtArr.reduce((total, currentItem) => 
        total + currentItem.priceUSD, 0
    )
    return total - discount
}

console.log(calculateTotalCost(itemsBoughtArr))

// default parameter can cause the overwrite so should be used whent the value is default