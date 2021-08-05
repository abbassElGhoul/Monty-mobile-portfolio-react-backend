import React, { Component } from 'react';
import ApplicationsServices from '../Services/ApplicationsServices';
import Carousel from "../Components/CarouselNew/Carousel";
import PhotosServices from '../Services/PhotosServices';



class ViewApp extends Component{



    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            application: {},
            photo:[]
        }
    }

    componentDidMount(){
        ApplicationsServices.getApplicationById(this.state.id).then( res => {
            this.setState({application: res.data.data});
        }).then(res => {        
            PhotosServices.getPhotoByAppID(this.state.application.app_id).then( res => {
            this.setState({photo: res.data.data})
        })
    } )
    }
    cancel(){
      this.props.history.push('/view-application/'+ this.state.id);
  }
   DownloadAndroidAlert() {
      var r = window.confirm("Are you sure do you want to download " + this.state.application.app_id+"?");
      if (r === true) {
          window.open( this.state.application.android_app,"_blank")
      } else {
          this.cancel()
      }
  }
  DownloadIosAlert() {
    var r = window.confirm("Are you sure do you want to download " + this.state.application.app_id+"?");
    if (r === true) {
        window.open( this.state.application.ios_app,"_blank")
    } else {
        this.cancel()
    }
}



    renderCarousel() {

        if(this.state.photo.length) {
            return(
                <Carousel show={3}>
                    {this.state.photo.map((elem,index) =>(
                        <div key = {index}>
                    <div>
                    <img alt="..."
                  src={this.state.photo[index].photos}
                  style={{width: '100%', paddingRight: 10, paddingLeft: 10}}>
                  </img>
                    </div>
                </div>
                    ))}

            </Carousel>
            )
        }
    }

    render() {
        return (

              <div style={{backgroundColor: "white" }}>
      <div class="row">

        <div class="col-md-2">
        </div>

        <div class = "col-md-8">
  
          <div class = "row">
            <div class="col-md-2">

              <div>
                <img alt="..."
                  src={this.state.application.icon}
                  width="100px" height="100px">
                  </img>
              </div>

            </div>

            <div class="col-md-10">
                <div style = {{ fontSize: "40px" }}> 
                  { this.state.application.app_id }
                </div>

              <div style={{ fontSize : '30px',fontWeight : 'bold', paddingTop : '100px'}}>
                  Description of the app: 
              </div>

              <div style={{fontSize : '20px', paddingBottom : '0px'}}> 
                { this.state.application.info } </div>
              </div>

              <div class="row" style = {{paddingTop : '0px'}}>
                <div style = {{   float : 'center' ,  Right :'100px',paddingTop:'20px'}}>
                  
                  <h1 style={{backgroundColor: "white" }}>
                    <div style={{ maxWidth: 1200 , paddingTop: '110px'}}>
                      ScreenShots
                      {this.renderCarousel()}
                    </div>
                  </h1>

                </div>
              </div>
          </div>
        </div>
      </div>

      <div >
        <div style={{fontWeight : 'bold'}}> Supported versions:</div>
            <div>{this.state.application.supported_versions}</div>
        <div style={{fontWeight : 'bold'}}> Demo account credentianls:</div>
            <div> {this.state.application.demo_account_credentials}</div>
        </div>
        
        <div style = {{marginLeft : '500px', paddingBottom: 40, paddingTop: 20}}>

          <div  type="btn btn-link"  style ={{fontSize : "50px"}} onClick={() => this.DownloadIosAlert()}>
          <img alt="..." src="https://img.icons8.com/ultraviolet/40/000000/mac-os--v2.png"/>
            <div  style = {{ fontSize : "15px",}} >Ios download Link</div>
          </div>

         

          <div class="btn btn-link" style ={{fontSize : "50px"}} onClick={() => this.DownloadAndroidAlert()}>
          <img alt="..." src="https://img.icons8.com/color/48/000000/android-os.png"/>
            <div style = {{ fontSize : "15px"}}>Android download Link</div>
          </div>
          </div>
      </div>



        )
  }
  }
export default ViewApp;