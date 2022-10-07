import React, { Component } from "react";


class General extends Component {
    constructor(){
        super()
    }



render(){
    
    const {name, phone,email,website} = this.props.gen;

    let content; 
    
    if (this.props.isEdit){
        content = 
        <div className="general-div">
            <div className="name-div">
              <input className="name"  placeholder='Name' value={name} onChange={e=>this.props.genChange(e)}/>
            </div>
            <div className="info">
                <input className="phone" placeholder='Phone' value={phone} onChange={e=>this.props.genChange(e)}/>
                <input className="email" placeholder='email' value={email} onChange={e=>this.props.genChange(e)}/>
                <input className="website" placeholder='website' value={website} onChange={e=>this.props.genChange(e)}/>
            </div>
            <div className='button-div'>
                <button className='update' onClick={this.props.genEdit}>Update</button>
            </div>
         
        </div>
    }
    else {
        content =
        <div className="general-div">
            <div className="name-div">
              <h1 className="name">{name}</h1>
            </div>
            <div className="info">
                <h3 className="phone">{"Phone: " +phone}</h3>
                <h3 className="email">{"Email: " +email}</h3>
                <h3 className="website">{"Website: " +website}</h3>
                
            </div>
            <div className='button-div'>
                <button className='general-edit' onClick={this.props.genEdit}>Edit</button>
            </div>
         
        </div>
    }  
        
    return (
        content
    )
}
}


export default General