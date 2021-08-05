import React, { Component } from 'react';
import ApplicationsServices from '../Services/ApplicationsServices';



class CreateApplicationComponent extends Component{

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            filePhotos:'',
            Android_app:'',
            Ios_app:'',
            info:'',
            Icon:'',
            android_store_link:'',
            ios_store_link:'',
            supported_versions:'',
            demo_account_credentials:'',
            app_id:'',
            android_signing_key:'',
            android_password:'',
            android_alias:'',
            android_alias_password:'',
            android_pek:'',
            repository_link:'',
            jira_link:'',
            store_email:'',
            store_password:'',
            firebase_email:'',
            firebase_password:'',
            server_links:'',
        
        }
        this.changephotosHandler = this.changephotosHandler.bind(this)
        this.changeandroid_appHandler = this.changeandroid_appHandler.bind(this);
        this.changeios_appHandler = this.changeios_appHandler.bind(this);
        this.changeinfoHandler = this.changeinfoHandler.bind(this);
        this.changeiconHandler = this.changeiconHandler.bind(this);
        this.changeandroid_store_linkHandler = this.changeandroid_store_linkHandler.bind(this);
        this.changeios_store_linkHandler = this.changeios_store_linkHandler.bind(this);
        this.changesupported_versionsHandler = this.changesupported_versionsHandler.bind(this);
        this.changedemo_account_credentialsHandler = this.changedemo_account_credentialsHandler.bind(this);
        this.changeapp_idHandler = this.changeapp_idHandler.bind(this);
        this.changeandroid_signing_keyHandler = this.changeandroid_signing_keyHandler.bind(this);
        this.changeandroid_passwordHandler = this.changeandroid_passwordHandler.bind(this);
        this.changeandroid_aliasHandler = this.changeandroid_aliasHandler.bind(this);
        this.changeandroid_alias_passwordHandler = this.changeandroid_alias_passwordHandler.bind(this);
        this.changeandroid_pekHandler = this.changeandroid_pekHandler.bind(this);
        this.changerepository_linkHandler = this.changerepository_linkHandler.bind(this);
        this.changejira_linkHandler = this.changejira_linkHandler.bind(this);
        this.changestore_emailHandler = this.changestore_emailHandler.bind(this);
        this.changestore_passwordHandler = this.changestore_passwordHandler.bind(this);
        this.changefirebase_emailHandler = this.changefirebase_emailHandler.bind(this);
        this.changefirebase_passwordHandler = this.changefirebase_passwordHandler.bind(this);
        this.changeserver_linksHandler = this.changeserver_linksHandler.bind(this);
        this.saveOrUpdateApplication = this.saveOrUpdateApplication.bind(this);
    }
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            ApplicationsServices.getApplicationById(this.state.id).then( (res)=>{
                let application = res.data.data;

                this.setState({
                    filePhotos :application.filePhotos,
                    Android_app: application.Android_app,
                    Ios_app: application.Ios_app,
                    info: application.info,
                    Icon: application.Icon,
                    android_store_link: application.android_store_link,
                    ios_store_link: application.ios_store_link,
                    supported_versions: application.supported_versions,
                    demo_account_credentials: application.demo_account_credentials,
                    app_id: application.app_id,
                    android_signing_key: application.android_signing_key,
                    android_password: application.android_password,
                    android_alias: application.android_alias,
                    android_alias_password: application.android_alias_password,
                    android_pek: application.android_pek,
                    repository_link: application.repository_link,
                    jira_link: application.jira_link,
                    store_email: application.store_email,
                    store_password: application.store_password,
                    firebase_email: application.firebase_email,
                    firebase_password: application.firebase_password,
                    server_links: application.server_links

                });
            });

        }
    }
    saveOrUpdateApplication = (e) =>{
        e.preventDefault();
        let application = {
        filePhotos: this.state.filePhotos,
        Android_app:this.state.Android_app,
        Ios_app:this.state.Ios_app,
        info:this.state.info,
        Icon:this.state.Icon,
        android_store_link:this.state.android_store_link,
        ios_store_link:this.state.ios_store_link,
        supported_versions:this.state.supported_versions,
        demo_account_credentials:this.state.demo_account_credentials,
        app_id:this.state.app_id,
        android_signing_key:this.state.android_signing_key,
        android_password:this.state.android_password,
        android_alias:this.state.android_alias,
        android_alias_password:this.state.android_alias_password,
        android_pek:this.state.android_pek,
        repository_link:this.state.repository_link,
        jira_link:this.state.jira_link,
        store_email:this.state.store_email,
        store_password:this.state.store_password,
        firebase_email:this.state.firebase_email,
        firebase_password:this.state.firebase_password,
        server_links:this.state.server_links}
        

        if(this.state.id === '_add'){
            ApplicationsServices.creactApplication(application).then(res =>{
                this.props.history.push('/mod')
            });
    }
    else{
        ApplicationsServices.updateApplication(this.state.id,application).then(res =>{
            this.props.history.push('/mod')
        });
        }
    }
    changephotosHandler = (event)=>{
        this.setState(function(nextProps,nxtState) {
            return {
                filePhotos: event.target.files
            }
        });}
    changeandroid_appHandler = (event)=>{

        this.setState(function(nextProps,nxtState) {
            return {
                Android_app: event.target.files[0]
            }
        });}
    changeios_appHandler = (event)=>{
        this.setState(function(nextProps,nxtState) {
            return { 
            Ios_app: event.target.files[0],
            }

        });}
    changeinfoHandler = (event)=>{
        this.setState({info: event.target.value});
    }
    changeiconHandler = (event)=> {
        this.setState(function(nextProps,nxtState) {
            return {
                Icon: event.target.files[0],
            }
        });}
    changeandroid_store_linkHandler = (event)=>{
        this.setState({android_store_link: event.target.value});
    }
    changeios_store_linkHandler = (event)=>{
        this.setState({ios_store_link: event.target.value});
    }
    changesupported_versionsHandler = (event)=>{
        this.setState({supported_versions: event.target.value});
    }
    changedemo_account_credentialsHandler = (event)=>{
        this.setState({demo_account_credentials: event.target.value});
    }
    changeapp_idHandler = (event)=>{
        this.setState({app_id: event.target.value});
    }
    changeandroid_signing_keyHandler = (event)=>{
        this.setState({android_signing_key: event.target.value});
    }
    changeandroid_passwordHandler = (event)=>{
        this.setState({android_password: event.target.value});
    }
    changeandroid_aliasHandler = (event)=>{
        this.setState({android_alias: event.target.value});
    }
    changeandroid_alias_passwordHandler = (event)=>{
        this.setState({android_alias_password: event.target.value});
    }
    changeandroid_pekHandler = (event)=>{
        this.setState({android_pek: event.target.value});
    }
    changerepository_linkHandler = (event)=>{
        this.setState({repository_link: event.target.value});
    }
    changejira_linkHandler = (event)=>{
        this.setState({jira_link: event.target.value});
    }
    changestore_emailHandler = (event)=>{
        this.setState({store_email: event.target.value});
    }
    changestore_passwordHandler = (event)=>{
        this.setState({store_password: event.target.value});
    }
    changefirebase_emailHandler = (event)=>{
        this.setState({firebase_email: event.target.value});
    }
    changefirebase_passwordHandler = (event)=>{
        this.setState({firebase_password: event.target.value});
    }
    changeserver_linksHandler = (event)=>{
        this.setState({server_links: event.target.value});
    }
    cancel(){
        this.props.history.push('/mod');
    }
    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Application</h3>
        }else{
            return <h3 className="text-center">Update Application</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                        
                                            <lable>app_id:</lable>
                                            <input   type= "text" placeholder = "app_id" name = "app_id" className = "form-control"
                                                value ={this.state.app_id} onChange={this.changeapp_idHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> photos: </label>
                                            <input  type="file" multiple placeholder="filePhotos" name="filePhotos" className="form-control" 
                                                 onChange={this.changephotosHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <lable>android_app:</lable>
                                            <input type="file" placeholder = "android_app" name = "android_app" className = "form-control"
                                                 onChange={this.changeandroid_appHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>Ios_app:</lable>
                                            <input type="file" placeholder = "Ios_app" name = "Ios_app" className = "form-control"
                                                 onChange={this.changeios_appHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Android Alias: </label>
                                            <input  placeholder="Android Alias" name="android_alias" className="form-control" 
                                                value={this.state.android_alias} onChange={this.changeandroid_aliasHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>info:</lable>
                                            <input placeholder = "info" name = "info" className = "form-control"
                                                value ={this.state.info} onChange={this.changeinfoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>Icon:</lable>
                                            <input type="file" placeholder = "Icon" name = "Icon" className = "form-control"
                                                 onChange={this.changeiconHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>android_store_link:</lable>
                                            <input placeholder = "android_store_link" name = "android_store_link" className = "form-control"
                                                value ={this.state.android_store_link} onChange={this.changeandroid_store_linkHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>ios_store_link:</lable>
                                            <input placeholder = "ios_store_link" name = "ios_store_link" className = "form-control"
                                                value ={this.state.ios_store_link} onChange={this.changeios_store_linkHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>supported_versions:</lable>
                                            <input placeholder = "supported_versions" name = "supported_versions" className = "form-control"
                                                value ={this.state.supported_versions} onChange={this.changesupported_versionsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>demo_account_credentials:</lable>
                                            <input placeholder = "demo_account_credentials" name = "demo_account_credentials" className = "form-control"
                                                value ={this.state.demo_account_credentials} onChange={this.changedemo_account_credentialsHandler}/>
                                        </div>
                                       
                                        <div className = "form-group">
                                            <lable>android_signing_key:</lable>
                                            <input placeholder = "android_signing_key" name = "android_signing_key" className = "form-control"
                                                value ={this.state.android_signing_key} onChange={this.changeandroid_signing_keyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>android_password:</lable>
                                            <input placeholder = "android_password" name = "android_password" className = "form-control"
                                                value ={this.state.android_password} onChange={this.changeandroid_passwordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>android_alias:</lable>
                                            <input placeholder = "android_alias" name = "android_alias" className = "form-control"
                                                value ={this.state.android_alias} onChange={this.changeandroid_aliasHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>android_alias_password:</lable>
                                            <input placeholder = "android_alias_password" name = "android_alias_password" className = "form-control"
                                                value ={this.state.android_alias_password} onChange={this.changeandroid_alias_passwordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>android_pek:</lable>
                                            <input placeholder = "android_pek" name = "android_pek" className = "form-control"
                                                value ={this.state.android_pek} onChange={this.changeandroid_pekHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>repository_link:</lable>
                                            <input placeholder = "repository_link" name = "repository_link" className = "form-control"
                                                value ={this.state.repository_link} onChange={this.changerepository_linkHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>jira_link:</lable>
                                            <input placeholder = "jira_link" name = "jira_link" className = "form-control"
                                                value ={this.state.jira_link} onChange={this.changejira_linkHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>store_email:</lable>
                                            <input placeholder = "store_email" name = "store_email" className = "form-control"
                                                value ={this.state.store_email} onChange={this.changestore_emailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>store_password:</lable>
                                            <input placeholder = "store_password" name = "store_password" className = "form-control"
                                                value ={this.state.store_password} onChange={this.changestore_passwordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>firebase_email:</lable>
                                            <input placeholder = "firebase_email" name = "firebase_email" className = "form-control"
                                                value ={this.state.firebase_email} onChange={this.changefirebase_emailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>firebase_password:</lable>
                                            <input placeholder = "firebase_password" name = "firebase_password" className = "form-control"
                                                value ={this.state.firebase_password} onChange={this.changefirebase_passwordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <lable>server_links:</lable>
                                            <input placeholder = "server_links" name = "server_links" className = "form-control"
                                                value ={this.state.server_links} onChange={this.changeserver_linksHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateApplication}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
export default CreateApplicationComponent
