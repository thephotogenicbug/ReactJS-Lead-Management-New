import React, {useState, useEffect} from 'react';

const Allcustomer =()=>{
    const[user, updateUser]=useState([]);
    const getUser=()=>{
        fetch("http://firstenquiry.com/api/react/customerlist.php")
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
                    <h2 className="text-primary">Customer List </h2>
                    <table className="table table-bordered table-sm">
                        <thead>
                                <tr className="bg-secondary text-white">
                                <td>Name</td>
                                <td>Mobile No</td>
                                <td>E-Mail</td>
                                <td>City</td>
                                <td>Address</td>
                                <td>Service</td>
                                <td>FeedBack</td>
                                <td>Remarks</td>
                                <td>Next Call</td>
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
                                            <td>{xuser.city}</td>
                                            <td>{xuser.address}</td>
                                            <td>{xuser.service}</td>
                                            <td>{xuser.feedback}</td>
                                            <td>{xuser.remarks}</td>
                                            <td>{xuser.nextcall}</td>

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
export default Allcustomer;