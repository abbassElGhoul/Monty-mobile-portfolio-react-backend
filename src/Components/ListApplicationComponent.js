import React, { Component } from 'react';
import ApplicationsServices from '../Services/ApplicationsServices';
import axios from 'axios';
import authHeader from './loginauth/components/services/auth-header';




class ListApplicationComponent extends Component{
    constructor(props){
        super(props)
    
    this.state = {
        applications :[]
    }
    this.addApplication = this.addApplication.bind(this)
    this.deleteApplication = this.deleteApplication.bind(this);
    this.editApplication = this.editApplication.bind(this);
    this.cancel = this.cancel.bind(this);
    this.DeleteAlert = this.DeleteAlert.bind(this);
    this.login = this.login.bind(this);
    }

    viewApplication(id){
        this.props.history.push(`view-application/${id}`);
    }
    viewApplicationDev(id){
        this.props.history.push(`view-application-dev/${id}`);
    }
    login(){
        this.props.history.push(`logIn`)
    }

    deleteApplication(id){

        ApplicationsServices.deleteApplication(id).then( res=>{
            this.setState({applications : this.state.applications.filter(application => application.id !== id)});
        });
        this.props.history.push('/mod');
    }
    editApplication(id){
        this.props.history.push(`update-application/${id}`);
    }


    componentDidMount(){
        const self = this
        ApplicationsServices.getApplications().then((res)=> { 
            self.setState({applications :res.data.data});
        });
    }

    addApplication(){

        this.props.history.push('add-application/_add');
    }
    cancel(){
        this.props.history.push('/mod');
    }
     DeleteAlert(application) {
        var r = window.confirm("Are syou ure do you want to delete this application?");
        if (r == true) {
            this.deleteApplication(application.id)
        } else {
            this.cancel()
        }
    }


    render() {
        return (
            <div>
                {}
                 <h2 className="text-center">Applications List</h2>
                 <div className = "row">
                    <div>
                        {/* <button className="btn btn-info" style = {{width: 200, marginLeft: 1000}} onClick={this.login}> Log In</button> */}
                    </div>
                    <button className="btn btn-primary" onClick={this.addApplication} > Add Application</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>

                                    <th>icon</th>
                                    
                                    <th> Application name</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.applications.map(
                                        application => 
                                        <tr key = {application.id}>

                                             <td> 
                                                 <img
                                                    alt="..."
                                                  height={34} 
                                               src={application.icon}
                                                //   src={MediaServices.getIcon(application.icon)}
                                                // src = {this.geticon()}
                                                ></img>

                                             </td>
                                             <td> {application.app_id}</td>
                                             <td>
                                                 <button onClick={ () => this.editApplication(application.id)} className="btn btn-info">Update </button>
                                                  <button style={{marginLeft: "10px"}} onClick={ () =>  this.DeleteAlert(application)}/*this.deleteApplication(application.id)*/ className="btn btn-danger">Delete </button> 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewApplication(application.id)} className="btn btn-info">View </button>
                                                  <button style={{marginLeft: "10px"}} onClick={ () => this.viewApplicationDev(application.id)} className="btn btn-info">View for dev</button> 
                                             </td>
                                         </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )  
  }
  }
export default ListApplicationComponent