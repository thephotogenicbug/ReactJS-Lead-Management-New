import React, {Component} from 'react';
class Login extends Component{
        constructor(){
            super();
            this.state={
                email:"",
                pass:"",
                message:"",
            }
        }
        processEmail=(obj)=>{
            this.setState({
                email:obj.target.value
            })
        }
        processPass=(obj)=>{
            this.setState({
                pass:obj.target.value
            })
        }
        goLogin=()=>{
            if((this.state.email=="admin@gmail.com")&&(this.state.pass=="123")){
                this.setState({
                    message:"Success: Please wait Redirecting...."
                })
                localStorage.setItem("name", "Naveen");
                localStorage.setItem("userid", "9008006228");
                window.location.reload();
            }else{
                this.setState({
                    message:"Fail: Invalid Email or Password"
                })
            }
        }
        render(){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <p className="text-danger text-center">{this.state.message}</p>
                            <div className="card">
                                <div className="card-header bg-secondary text-white">Login</div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>Email ID</label>
                                        <input type="text" className="form-control"
                                        onChange={this.processEmail}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="text" className="form-control"
                                        onChange={this.processPass}/>
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-primary"onClick={this.goLogin}>Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            )
        }
}
export default Login;
