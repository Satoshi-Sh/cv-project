
import './App.css';
import React, { Component } from "react"
import General from './components/General'
import Education from './components/Education'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEdit:false,
      eduId:2,
      general: {
        "name":"Satoshi S.",
        "phone":"980-1234-5678",
        "email":"example@email.com",
        "website":"https://satoshi40.pythonanywhere.com/"},
        educations:[
          {'school':'Havard University',
           'major':'Computer Science',
          'year':'2022',
          'isComplete':true,
          'id':0},
          {'school':'Osaka University',
           'major':'Economics',
           'year':'2010-2014',
           'isComplete':true,
          'id':1},
        ]
      
      };
  this.genEdit = this.genEdit.bind(this);
  this.genChange= this.genChange.bind(this)
  this.addEducation=this.addEducation.bind(this)
  this.addEducation2 = this.addEducation2.bind(this)
  this.eduChange = this.eduChange.bind(this)
  this.removeEducation = this.removeEducation.bind(this)
}
  genEdit(){
    this.setState(prevState=>({
    isEdit:!prevState.isEdit
    }))
  }
  genChange(e){
    let newGeneral = this.state.general
    newGeneral[e.target.className]=e.target.value
    this.setState({
      general:newGeneral
    })

  }

  eduChange(e){
    let newEdu = []
    this.state.educations.forEach(edu=>
      {
        if(edu.id===parseInt(e.target.id)){
        const key = e.target.className.split('-')[0]
        edu[key]=e.target.value
        }
        
        newEdu.push(edu)
      })
      this.setState({
        educations:newEdu
      })
  }
  addEducation(){
    let newArray = [...this.state.educations,{'id':this.state.eduId,'isComplete':false}]
    this.setState({
      educations:newArray,
      eduId: this.state.eduId+1
    })
  }

  addEducation2(e){
    let newEdu = []
    this.state.educations.forEach(edu=>
      {
        if(edu.id===parseInt(e.target.id)){
        edu['isComplete']=true
        }
        
        newEdu.push(edu)
      })
      this.setState({
        educations:newEdu
      })
  
  }

  removeEducation(e){
    let newArray = []
    this.state.educations.forEach(edu=>{
      if(edu.id!=parseInt(e.target.id)){
         newArray.push(edu)
      }
    })
    this.setState({
      educations:newArray,
    })

  }
  

  render(){
    return <div>
             <General 
              gen={this.state.general}
              isEdit={this.state.isEdit}
              genEdit = {this.genEdit}
              genChange= {this.genChange}
               />
              <hr />
              <Education
               educations ={this.state.educations}
               addEducation={this.addEducation}
               addEducation2= {this.addEducation2}
               eduChange= {this.eduChange}
               removeEducation= {this.removeEducation}
              />
              <hr />
           </div>
  }
}

export default App;
