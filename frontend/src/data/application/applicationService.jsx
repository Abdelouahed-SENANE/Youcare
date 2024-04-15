import authenticatedInstance from "../../services/api/authenticatedApi.js";


export const fetchApplicationsOfOrganizer = async () => {
    try{
        const response = await authenticatedInstance.get('requestListing');
        return response
    }
    catch (error){
        console.log("Error fetching listings:", error)
        throw error
    }
}

export const approveApplication = async (application) => {
    console.log(application)
    try{
        const response = await authenticatedInstance.put('approve',application);
        return response
    }
    catch (error){
        console.log("Error fetching listings:", error)
        throw error
    }
}
export const declineApplication = async (application) => {
    try{
        const response = await authenticatedInstance.put('decline',application);
        return response
    }
    catch (error){
        console.log("Error fetching listings:", error)
        throw error
    }
}

export const createApplication = async (payload) => {
    try{
        const response = await authenticatedInstance.post('apply', payload);
        return response
    }
    catch (error){
        throw error
    }
}