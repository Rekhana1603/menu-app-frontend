import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"

// get items based on category
export const getMenuItemsAPI = async (category)=>{
    return await commonAPI("GET",`${SERVER_URL}/menu-items/${category}`,{} )
}