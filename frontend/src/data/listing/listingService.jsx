import authenticatedInstance from "../../services/api/authenticatedApi.js";
export const fetchListings = async (query, page) => {

    try {
        const response = await authenticatedInstance.get(`/listings?query=${query}&page=${page}`)
        console.log(response)
        return response
    } catch (error) {
        console.log("Error fetching listings:", error)
        throw error
    }
}
export const createListing = async (listingObject) => {
    try {
        const response = await authenticatedInstance.post('listings' , listingObject)
        return response
    } catch (error) {
        console.log("Error fetching listings:", error)
        throw error
    }
}

export const fetchAuthenticatedUserListings = async () => {
    try{
        const response = await authenticatedInstance.get('organizer/listings');
        return response
    }
    catch (error) {
        console.log("Error fetching listings:", error)
        throw error
    }
}
export const fetchSpecificListing = async (id) => {
    try{
        const response = await authenticatedInstance.get(`listings/${id}`);
        return response
    }
    catch (error) {
        console.log("Error fetching listings:", error)
        throw error
    }
}

export const updateListing = async (listing) => {
    try {
        const response = await authenticatedInstance.put(`listings/${listing.id}` , listing);
        return response
    }
    catch (error) {
        console.log("Error fetching listings:", error)
        throw error
    }
}

export const deleteListing = async (listing) => {
    console.log(listing)
    try{
        const response = await authenticatedInstance.delete(`listings/${listing.id}` , listing);
        return response
    }
    catch (error) {
        console.log("Error fetching listings:", error)
        throw error
    }
}