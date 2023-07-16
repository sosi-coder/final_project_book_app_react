import axios from "axios";

export const baseURL =
"http://127.0.0.1:5001/books-digital-4815a/us-central1/app"

export const validateUserJWTToken = async (token) => {
    try{
        const res = await axios.get(`${baseURL}/api/users/jwtVerification`, {
            headers:{ Authorization: "Bearer " + token},
        });

        return res.data.data;
    }
   
    catch(err ){
        return null;
    }
};

// add new products
export const addNewProduct = async (data) =>{
    try{
        const res = await axios.post(`${baseURL}/api/products/create`,{...data})
         return res.data.data
    } catch(err){
        return null ;
    }
}

// get all the products

export const getAllProducts = async () =>{
    try{
        const res = await axios.get(`${baseURL}/api/products/all`)
         return res.data.data
    } catch(err){
        return null ;
    }
}

// delete a   product 
export const deleteAProduct = async (productid) =>{
    try{
        const res = await axios.delete(`${baseURL}/api/products/delete/${productid}`)
         return res.data.data
    } catch(err){
        return null ;
    }
}

export const getAllUsers = async () =>{
    try{
        const res = await axios.get(`${baseURL}/api/users/all`)
         return res.data.data
    } catch(err){
        return null ;
    }
};

// add items to the card 

export const addNewItemToCart = async (userId, data) => {
    try {
      const response = await axios.post(`${baseURL}/api/products/addToCart/${userId}`, { ...data });
      return response.data.data;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };
  
// get all the caart items
export const getAllCartItems = async (user_id) =>{
    try{
        const res = await axios.get(`${baseURL}/api/products/getAllCartItems/${user_id}`)
         return res.data.data
    } catch(err){
        return null ;
    }
};