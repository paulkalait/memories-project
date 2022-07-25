
import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, UPDATE, LIKE, DELETE } from "../constants/actionTypes.js";
//will allow  to import everything from api file into to this file
import * as api from "../api/index.js";

//reduc thunk allows an additonal function for async =>   =>

//Action Creators are functions that return an action type and table

export const getPosts = () => async (dispatch) => {
  try {
    //fetch data from api
    const { data } = await api.fetchPosts();
    //call the async dispatch from thunk
    //payload is the data send the api data into the payload
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
  //payload is the data where we store all of our posts
};

export const getPostBySearch = (searchQuery) => async (dispatch) => {
  try {
    //sends data to reducers
    const { data: { data} } = await api.fetchPostBySearch(searchQuery)
  
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
  } catch (error) {
    console.log(error)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    //post api request to our backend server 
    console.log("hello")
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try{

   const { data} = await api.updatePost(id, post)

   console.log('updated')
   dispatch({type: UPDATE, payload: data})
  }catch(error){
  
      console.log(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({type: DELETE, payload: id})

  } catch (error) {
    console.log(error)
    
  }
}


export const likePost = (id) => async (dispatch) => {
  try{
   const { data} = await api.likePost(id)

   dispatch({type: LIKE, payload: data})
  }catch(error){
      console.log(error)
  }
}