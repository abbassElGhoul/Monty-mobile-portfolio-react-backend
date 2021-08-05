import React, { Component } from 'react';
import ApplicationsServices from '../../../Services/ApplicationsServices';




class BoardModerator extends Component{
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
        this.props.history.push('applications');
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
        this.props.history.push('/applications');
    }
     DeleteAlert(application) {
        var r = window.confirm("Are you sure do you want to delete this application?");
        if (r == true) {
            this.deleteApplication(application.id)
        } else {
            this.cancel()
        }
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">applications List</h2>
                 <div className = "row">
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    {/* <th>Application supported_versions</th> */}
                                    {/* <th> Application info</th> */}
                                    {/* <th>firebase Email</th> */}
                                    {/* <th>firebase password</th> */}
                                    <th>icon</th>
                                    
                                    <th> Application name</th>

                                    {/* <th>Actions</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.applications.map(
                                        application => 
                                        <tr key = {application.id}>
                                             {/* <td> { application.supported_versions} </td>    */}
                                             {/* <td> {application.info}</td> */}
                                             {/* <td> {application.firebase_email}</td> */}
                                             {/* <td> {application.firebase_password}</td> */}
                                             <td> 
                                                 <img
                                                    alt="..."
                                                  height={34} 
                                                  src={application.icon}
                                                ></img>

                                             </td>
                                             <td> {application.app_id}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewApplication(application.id)} className="btn btn-info">View </button>
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
export default BoardModerator