import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Followup = () => {

    const [customer, updateCustomer] = useState([]);

    const getData = () => {
        fetch("http://firstenquiry.com/api/react/todaycall.php")
            .then(response => response.json())
            .then(result => updateCustomer(result))
    }

    useEffect(() => {
        getData();
    }, [true])

   const[remarks, updateRemarks]=useState("");
   const [nextcall, updateNextcall]=useState("");
   const [feedback, updateFeedback]=useState("");
   const [userid, updateUserid]=useState("");
   const [oldfeedback, updateoldFeedback]=useState("");

   const getInfo =(index)=>{
     updateRemarks(customer[index].remarks);
     updateNextcall(customer[index].nextcall);
     updateoldFeedback(customer[index].feedback)
     updateUserid(customer[index].id);
   }
   const updateInfo=()=>{
       
    let allfeedback = oldfeedback + "-----" +feedback;
    let input ={"userid":userid, "calldate":nextcall , "remarks":remarks , "feedback":allfeedback};
    input = JSON.stringify(input);
    let url = "http://firstenquiry.com/api/react/updatecall.php";
    axios.post(url , input).then(response=>{
      alert("Updated Successfully !");
      getData(); //to reload the list
    })
      
   }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="text-primary">Todays Follow Up Customers-{customer.length}</h2>
                    <table className="table table-bordered table-sm">
                        <thead>
                            <tr className="bg-secondary text-white">
                                <td>Name</td>
                                <td>Mobile No</td>
                                <td>Email</td>
                                <td>Service</td>
                                <td>Feedback</td>
                                <td>Remarks</td>
                             
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customer.map((xcustomer, index) => {
                                    return (
                                        <tr key={index}>
                                            <td data-toggle="modal" data-target="#mymodal" className="text-primary text-center" onClick={getInfo.bind(this,index)}>
                                               <u> {xcustomer.name}</u>
                                            </td>
                                            <td>{xcustomer.mobile}</td>
                                            <td>{xcustomer.email}</td>
                                            <td>{xcustomer.service}</td>
                                            <td>{xcustomer.feedback}</td>
                                            <td>{xcustomer.remarks}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="modal fade" id="mymodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-md ">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Follow Up</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                        <div className="form-group">
                            <label>Next Call Date</label>
                            <input type="date" className="form-control" onChange={obj=>updateNextcall(obj.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Remarks</label>
                            <select className="form-control" onChange={obj=>updateRemarks(obj.target.value)}>
                             <option>Interested</option>
                             <option>Purchased</option>
                             <option>Not Intrested</option>
                             </select>
                             <small className="text-danger">{remarks}</small>
                        </div>
                        <div className="form-group">
                        <label> Feedback on discussion </label>
                        <textarea className="form-control" onChange={obj=>updateFeedback(obj.target.value)}></textarea>
                        <small className="text-primary">{oldfeedback}</small>
                         </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary btn-sm" onClick={updateInfo}>Update Now</button>
                            <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Followup;