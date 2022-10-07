import React, { Component } from "react";


class Work extends Component {

    constructor(){
        super()
    }
    render(){
    const listItems = this.props.works.map((obj)=>{
        if (!obj.isComplete|obj.isEdit)
        {
            return (
                <ul key={obj.id}>
            <input key={'c'+obj.id} id= {obj.id} value={obj.company} placeholder='Company' onChange={(e)=>this.props.workChange(e)} className="company-input"></input>
            <input key={'p' +obj.id} id= {obj.id} value={obj.position} placeholder='position' onChange={(e)=>this.props.workChange(e)} className="position-input"></input>
            <input key={'t' +obj.id} id= {obj.id} value={obj.task} placeholder='task' onChange={(e)=>this.props.workChange(e)} className="task-input"></input>
            <input key={'y' +obj.id} id= {obj.id} value={obj.year} placeholder='year' onChange={(e)=>this.props.workChange(e)} className="year-input"></input>
            <button id= {obj.id} onClick={(e)=>this.props.addWork2(e)}>Update</button>
        </ul>)
            
        }
        return (
        <ul key={obj.id}>
            <li key={'c'+obj.id} className="company">{obj.company}</li>
            <li key={'p'+obj.id} className="position">{obj.position}</li>
            <li key={'t'+obj.id} className="task">{obj.task}</li>
            <li key={'y'+obj.id} className="year">{obj.year}</li>
            <div>
            <button id={obj.id} className='edit' onClick={(e)=>this.props.workEdit(e)}>Edit</button>
            <button id={obj.id} className='delete' onClick={(e)=>this.props.removeWork(e)}>Delete</button>
            </div>
        </ul>)
    }
    );

    return <div>
              <h1>Work</h1>
              {listItems}
              <div className='add-div'>
          <button className="add" onClick={this.props.addWork}>+</button>
        </div>
           </div>
}
}


export default Work