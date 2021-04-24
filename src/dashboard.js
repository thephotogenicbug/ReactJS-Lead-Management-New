import React, {Component} from 'react';
class Dashboard  extends Component{
    constructor(){
        super();
        this.state={
         customer:0,
         interested:0,
         followup:0   
        }
    }
    getData=()=>{
        fetch("http://firstenquiry.com/api/react/dashboard.php")
        .then(response=>response.json())
        .then(result=>this.setState({
            customer:result.customer,
            interested:result.interested,
            followup:result.followup
        }))
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="text-primary">Dashboard</h2>
                    </div>
                </div>
                <div className="row mt-3 text-center">
                <div className="col-lg-3 form-group">
                    <i className="fa fa-headset fa-5x text-success"></i>
                    <h4>Today's Follow Up <br/> {this.state.followup} </h4>
                    </div>
                    <div className="col-lg-3 form-group">
                    <i className="fa fa-user-plus fa-5x text-secondary"></i>
                    <h4>New Customers</h4>
                    </div>
                    <div className="col-lg-3 form-group">
                    <i className="fa fa-check fa-5x text-warning"></i>
                    <h4> Intrested Customers <br/> {this.state.interested}</h4>
                    </div>
                    <div className="col-lg-3 form-group">
                    <i className="fa fa-users fa-5x text-primary"></i>
                    <h4>Total Customers <br/> {this.state.customer}</h4>
                    </div>                 
                </div>
            </div>
        )
    }
}
export default Dashboard;