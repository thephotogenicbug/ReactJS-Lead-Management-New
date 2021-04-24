import React, { Component } from 'react';
import axios from 'axios';
class Newcustomer extends Component {
    constructor() {
        super();
        this.state={
            fields:{},
            message:""
        }
    }

    processInput=(obj)=>{
        let fields=this.state.fields;
        fields[obj.target.name]=obj.target.value
        this.setState({
            fields
        })
    }
   // let url="http://firstenquiry.com/api/react/customerlist.php"
    save=()=>{
        let input =JSON.stringify(this.state.fields);
        let url="http://firstenquiry.com/api/react/save.php"
        axios.post(url, input).then(response=>{
            this.setState({
                message:response.data.status,
                fields:{}
            })
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-center text-primary"> New Customer </h2>
                        <p className="text-center text-success">{this.state.message}</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    Enter Customer Details
                                </div>
                                <div className="card-body">
                                    <div className="row form-group">
                                        <div className="col-lg-4">
                                            <label>Customer Name</label>
                                            <input type="text" className="form-control" name="fname" onChange={this.processInput}/>
                                        </div>
                                        <div className="col-lg-4">
                                            <label>Mobile No</label>
                                            <input type="number" className="form-control" name="mobile" onChange={this.processInput}/>
                                        </div>
                                        <div className="col-lg-4">
                                            <label>E-Mail Id</label>
                                            <input type="email" className="form-control" name="email" onChange={this.processInput} />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-lg-4">
                                            <label>City</label>
                                            <input type="text" className="form-control"   name="city" onChange={this.processInput} />
                                        </div>
                                        <div className="col-lg-4">
                                            <label>Pincode</label>
                                            <input type="number" className="form-control"  name="pincode" onChange={this.processInput} />
                                        </div>
                                        <div className="col-lg-4">
                                            <label>Address</label>
                                            <input type="text" className="form-control"   name="address" onChange={this.processInput} />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-lg-4">
                                            <label>Service Name</label>
                                            <input type="text" className="form-control"  name="service" onChange={this.processInput} />
                                        </div>
                                        <div className="col-lg-4">
                                            <label>Remarks</label>
                                           <select className="form-control"   name="remarks" onChange={this.processInput}>
                                            <option>Interested</option>
                                            <option>Purchased</option>
                                            <option>Not Intrested</option>
                                           </select>
                                        </div>
                                        <div className="col-lg-4">
                                            <label>Follow Up Date</label>
                                            <input type="date" className="form-control"  name="calldate" onChange={this.processInput} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <label> Feedback on discussion </label>
                                            <textarea className="form-control"  name="feedback" onChange={this.processInput} ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-primary" onClick={this.save}> Save Customer </button>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        )
    }
}

export default Newcustomer;