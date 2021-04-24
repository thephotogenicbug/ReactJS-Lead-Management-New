import React, {useState, useEffect} from 'react';

const Followup =()=>{
    const[user, updateUser]=useState([]);
    const getUser=()=>{
        fetch("http://firstenquiry.com/api/react/todaycall.php")
        .then(response=>response.json())
        .then(result=>updateUser(result))
    }
    useEffect(()=>{
        getUser();
    },[])

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="text-primary">Today Followup Customers </h2>
                    <table className="table table-bordered table-sm">
                        <thead>
                                <tr className="bg-secondary text-white">
                                <td>Name</td>
                                <td>Mobile No</td>
                                <td>E-Mail</td>
                                <td>Service</td>
                                <td>FeedBack</td>
                                <td>Remarks</td>
                                </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((xuser,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{xuser.name}</td>
                                            <td>{xuser.mobile}</td>
                                            <td>{xuser.email}</td>
                                            <td>{xuser.service}</td>
                                            <td>{xuser.feedback}</td>
                                            <td>{xuser.remarks}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Followup;