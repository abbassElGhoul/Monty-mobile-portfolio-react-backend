import axios from 'axios';
// import FormData from 'form-data';
import authHeader from '../Components/loginauth/components/services/auth-header';
const PHOTO_API_BASE_URL = "http://localhost:8080/api/v1/file"



class PhotosServices{

// get all photos
    getPhotos(){
        return axios.get(PHOTO_API_BASE_URL ,{ headers: authHeader() });
    }

// getPhotosById
    getPhotoByAppID(AppId){
        return axios.get(PHOTO_API_BASE_URL + '/getAll/' +AppId,{ headers: authHeader() });
    }

// createphoto

    creactPhoto({photo, id}){
        let formData = new FormData();
        let config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        formData.append("photo", photo)
        formData.append("id",id)

        return axios.post(PHOTO_API_BASE_URL, formData, config ,{ headers: authHeader() });

        }



}

export default new PhotosServices