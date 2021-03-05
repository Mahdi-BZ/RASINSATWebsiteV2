import React, { useEffect } from "react";
import { useState } from "react";
import $ from "jquery";
import * as emailjs from "emailjs-com"

const ShopModal = () => {

    const [ fullname, setFullName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ size, setSize ] = useState("s");
    const [ quantity, setQuantity ] = useState(1);
    const [ price, setPrice ] = useState(0);
    const [ name, setName ] = useState("");
    const [formStatus, setFormStatus ] = useState("");

    useEffect(() => {
        const button = $("#shopModalButton");
        setName(button.data('name'));
        setPrice(button.data('price'));
    }, [])
  

    const reset = () => {
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setSize("s");
        setQuantity(1);
    };
        
    const handleSubmit = async (e) => {

        e.preventDefault();

        let templateParams = {
            from_name: fullname,
            sender_email: email,
            subject: "Buying item "+name,
            phone_number: phoneNumber,
            size: size,
            quantity: quantity
        };
    
        const response = await emailjs.send(
            "service_u5jt4ss",
            "template_qf67mir",
            templateParams,
            "user_q8e4FXE0st9dPWaw6e4l3"
        )
    
        if(response.status === 200)
        {
            setFormStatus("success");
        }else {
            setFormStatus("failed");
        }
    
        reset();
          
    }

    return (
        <div className="modal fade" id="shopModal" tabIndex="-1" role="dialog" aria-labelledby="shopModalTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="shopModal" style={{fontWeight: "bold"}}>{name}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name:</label>
                                <input type="text" name="fullName" className="form-control" value={fullname} onChange={(e) => setFullName(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number:</label>
                                <input type="text" name="phone" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="size">Size:</label>
                                <select name="size" className="form-control" value={size} onChange={(e) => setSize(e.target.value)}>
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                    <option value="xl">XL</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">Quantity:</label>
                                <input type="number" name="quantity" className="form-control" value={quantity} onChange={(e) => {  setQuantity(e.target.value)}} onBlur={() => {if(quantity <= 0 ) setQuantity(1)}} />
                            </div>
                        
                    </div>
                    <div className="modal-footer">
                        {formStatus !== "" ? (formStatus === "success" ? <label style={{marginRight:"auto", color:"green", width:"60%", fontWeight: "500"}}>You have successfully ordered this item we will contact you as soon as possible</label>: <label style={{marginRight:"auto", color:"red", fontWeight: "500"}}>something went wrong</label>): ""}
                        <h6 style={{marginRight: "20px"}}>Total :  {quantity > 0 ? quantity*price : 0}DT</h6>
                        <button type="submit" className="btn btn-primary btn-lg">Buy</button>
                    </div>
                </form>
                </div>
                </div>
        </div>
    );
    };

export default ShopModal;
