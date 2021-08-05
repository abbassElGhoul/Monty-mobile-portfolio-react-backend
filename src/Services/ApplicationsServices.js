import axios from 'axios';
import FormData from 'form-data';
import authHeader from '../Components/loginauth/components/services/auth-header';
const APPLICATION_API_BASE_URL = "http://localhost:8080/api/v1/applications";

class ApplicationsServices{

    // get apps
    getApplications(){
        return axios.get(APPLICATION_API_BASE_URL , { headers: authHeader() });
    }

    
// gey app by id
    getApplicationById(ApplicationId){
        return axios.get(APPLICATION_API_BASE_URL + '/' + ApplicationId ,{ headers: authHeader() });
    }
// create app
    creactApplication({filePhotos, Icon,  Ios_app, Android_app, 
        info,android_store_link,ios_store_link,supported_versions,
        demo_account_credentials,app_id,android_signing_key,android_password,android_alias, 
        android_alias_password, android_pek, repository_link,jira_link, store_email, 
        store_password, firebase_email, firebase_password, server_links}){
        let formData = new FormData();
        for (const key of Object.keys(filePhotos)) {
            formData.append('filePhotos', filePhotos[key])
        }
        formData.append("info", info)
        formData.append("android_store_link",android_store_link)
        formData.append("ios_store_link",ios_store_link)
        formData.append("supported_versions",supported_versions)
        formData.append("demo_account_credentials",demo_account_credentials)
        formData.append("app_id",app_id)
        formData.append("android_signing_key",android_signing_key)
        formData.append("android_password",android_password)
        formData.append("android_alias",android_alias)
        formData.append("android_alias_password",android_alias_password)
        formData.append("android_pek",android_pek)
        formData.append("repository_link",repository_link)
        formData.append("jira_link",jira_link)
        formData.append("store_email",store_email)
        formData.append("store_password",store_password)
        formData.append("firebase_email",firebase_email)
        formData.append("firebase_password",firebase_password)
        formData.append("server_links",server_links)
        formData.append("Icon",  Icon)
        formData.append("Ios_app", Ios_app)
        formData.append("Android_app", Android_app)
        let config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        return axios.post(APPLICATION_API_BASE_URL, formData, config ,{ headers: authHeader() } );
    }

// update app

    async updateApplication(ApplicationId, {photo, Icon,Ios_app,Android_app,info,android_store_link,ios_store_link,supported_versions,
        demo_account_credentials,app_id,android_signing_key,android_password,android_alias, 
        android_alias_password, android_pek, repository_link,jira_link, store_email, 
        store_password, firebase_email, firebase_password, server_links}){
        let formData = new FormData();
       
        await this.UpdatePhoto(ApplicationId, photo)
        formData.append("photo", photo)
        formData.append("info", info)
        formData.append("android_store_link",android_store_link)
        formData.append("ios_store_link",ios_store_link)
        formData.append("supported_versions",supported_versions)
        formData.append("demo_account_credentials",demo_account_credentials)
        formData.append("app_id",app_id)
        formData.append("android_signing_key",android_signing_key)
        formData.append("android_password",android_password)
        formData.append("android_alias",android_alias)
        formData.append("android_alias_password",android_alias_password)
        formData.append("android_pek",android_pek)
        formData.append("repository_link",repository_link)
        formData.append("jira_link",jira_link)
        formData.append("store_email",store_email)
        formData.append("store_password",store_password)
        formData.append("firebase_email",firebase_email)
        formData.append("firebase_password",firebase_password)
        formData.append("server_links",server_links)
        await this.updateIcon(ApplicationId, Icon)
        formData.append("Icon", Icon)
        await this.updateIosApp(ApplicationId, Ios_app)
        formData.append("Ios_app", Ios_app)
        await this.updateAndroidApp(ApplicationId, Android_app)
        formData.append("Android_app", Android_app)
        
        let config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
            return axios.put(APPLICATION_API_BASE_URL+ '/' + ApplicationId,formData,config ,{ headers: authHeader() });
    }
// delete app
    deleteApplication(ApplicationId){
        return axios.delete(APPLICATION_API_BASE_URL + '/'+ ApplicationId ,{ headers: authHeader() });
    }

// Udpate: 
    // Icon
    async updateIcon(ApplicationId, Icon){
        if(null!== Icon && undefined !==  Icon){
            const formData = new FormData();
            formData.append("Icon", Icon)
            let config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
    
        return axios.put(APPLICATION_API_BASE_URL+ '/Icon/' + ApplicationId, formData, config ,{ headers: authHeader() });
    }}
    // ios app
    async updateIosApp(ApplicationId, Ios_app){
        if(null!== Ios_app && undefined !==  Ios_app){
            const formData = new FormData();
            formData.append("Ios_app", Ios_app)
            let config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
    
        return axios.put(APPLICATION_API_BASE_URL+ '/IosApp/' + ApplicationId, formData, config ,{ headers: authHeader() });
    }}
    // Android app
    async updateAndroidApp(ApplicationId, Android_app){
        if(null!== Android_app && undefined !==  Android_app){
            const formData = new FormData();
            formData.append("Android_app", Android_app)
            let config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
    
            return axios.put(APPLICATION_API_BASE_URL+ '/Android_app/' + ApplicationId, formData, config,{ headers: authHeader() });
        }
    }
    async UpdatePhoto(ApplicationId, Photos){
        if(null!== Photos && undefined !==  Photos){
            const formData = new FormData();
            formData.append("photo", Photos)
            let config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        return axios.put(APPLICATION_API_BASE_URL+ '/Photos/' + ApplicationId, formData, config,{ headers: authHeader() })
    }
}
// Delete:
    // icon
    deleteIcon(ApplicationId){
        return axios.delete(APPLICATION_API_BASE_URL + '/Icon/'+ ApplicationId,{ headers: authHeader() });
    }
    // ios app
    deleteIosApp(ApplicationId){
        return axios.delete(APPLICATION_API_BASE_URL + '/IosApp/'+ ApplicationId,{ headers: authHeader() });
    }
    // ios app
    deleteAndroidApp(ApplicationId){
        return axios.delete(APPLICATION_API_BASE_URL + '/Android_app/'+ ApplicationId,{ headers: authHeader() });
    }

        // photo
    deletephoto(ApplicationId){
        return axios.delete(APPLICATION_API_BASE_URL, + '/Photos/'+ ApplicationId,{ headers: authHeader() })
    }
// Get:
    // Ios app
    getIosApp(ApplicationId){
        return axios.get(APPLICATION_API_BASE_URL,+ '/Ios_app/'+ ApplicationId,{ headers: authHeader() })
    }
    // Android app
    getAndroidApp(ApplicationId){
        return axios.get(APPLICATION_API_BASE_URL,+ '/Android_app/'+ ApplicationId,{ headers: authHeader() })
    }


}
export default new ApplicationsServices;