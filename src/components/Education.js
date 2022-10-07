import React, { Component } from "react";


class Education extends Component {
    constructor(){
        super()
    }



render(){
    
    

    const listItems = this.props.educations.map((obj)=>{
        if (!obj.isComplete)
        {
            return (
                <ul key={obj.id}>
            <input key={'s'+obj.id} id= {obj.id} value={obj.school} placeholder='school' onChange={(e)=>this.props.eduChange(e)} className="school-input"></input>
            <input key={'m' +obj.id} id= {obj.id} value={obj.major} placeholder='major' onChange={(e)=>this.props.eduChange(e)} className="major-input"></input>
            <input key={'y' +obj.id} id= {obj.id} value={obj.year} placeholder='year' onChange={(e)=>this.props.eduChange(e)} className="year-input"></input>
            <button id= {obj.id} onClick={(e)=>this.props.addEducation2(e)}>Add</button>
        </ul>)
            
        }
        return (
        <ul key={obj.id}>
            <li key={'s'+obj.id} className="school">{obj.school}</li>
            <li key={'m'+obj.id} className="major">{obj.major}</li>
            <li key={'y'+obj.id} className="year">{obj.year}</li>
            <button id={obj.id} className='delete' onClick={(e)=>this.props.removeEducation(e)}>Delete</button>
        </ul>)
    }
    );
        
    return (
        <div>
        <h1>Education</h1>
        {listItems}
        <div className='add-div'>
          <button className="add" onClick={this.props.addEducation}>+</button>
        </div>
        </div>
    )
}
}


export default Education