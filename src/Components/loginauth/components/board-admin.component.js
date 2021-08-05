import React, { Component } from 'react';
import ApplicationsServices from '../../../Services/ApplicationsServices';




class BoardAdmin extends Component{
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
    this.manageDevs = this.manageDevs.bind(this);
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
    manageDevs(){
        this.props.history.push('register')
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
                    <div>
                        <button   className="btn btn-info"  onClick={ this.manageDevs}style = {{width: 200, marginBottom: 20}} > Manage developpers</button>
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

                                    {/* <th>Actions</th> */}
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
                                                ></img>

                                             </td>
                                             <td> {application.app_id}</td>
                                             <td>
                                                 <button onClick={ () => this.editApplication(application.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () =>  this.DeleteAlert(application)/*this.deleteApplication(application.id)*/} className="btn btn-danger">Delete </button>
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
      //   <>

      //   <Container fluid>
      //     <Row>
      //       <Col md="12">
      //         <Card>
      //           <Card.Body>
      //             <ReactTable
  
      //               data={data}
      //               columns={[ 
      //                 {
      //                   Header: "Name",
      //                   accessor: "Name",
      //               },
      //                 {
      //                   Header:"Icon",
      //                   accessor:"Icon",
      //                   disableSortBy: true,
      //                   disableFilters:true,
      //                   Cell: (row) => {
      //                     return <div style={{textAlign:"left"}}>            
      //                       <img 
      //                       onClick={() => window.open("http://localhost:3000/admin/extended-tables", "_blank")}
      //                       alt="..."
      //                     height={34} 
      //                     src={require("/home/user/Desktop/Projects/Monty-portfolio-react-master/src/f_logo_RGB-Hex-Blue_512.png").default}
      //                   ></img>
      //                   </div>
      //                   },
      //                 },       
                      
      //                 {
      //                   Header:"Android",
      //                   accessor: "Android",
      //                   disableFilters:true,
  
      //                 },
      //                 {
      //                   Header: "Ios",
      //                   accessor: "Ios",
      //                   disableFilters:true,
  
      //                 }, 
                      
                     
      //                 {id: 'empty'}, 
                        
      //               ]}
  
      //               className="-striped -highlight info-pagination,"
      //             />
      //           </Card.Body>
      //         </Card>
      //       </Col>
      //     </Row>
      //   </Container>
      // </>
        )  
  }
  }
export default BoardAdmin;