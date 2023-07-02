import axios from 'axios'
const Url='http://localhost:8000'
 export const UploadData=async(data)=>{
    try{
    return await  axios.post(`${Url}/add`,data)
    }
    catch(e){
        console.log(e.message)
    }

}