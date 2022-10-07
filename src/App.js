
import './App.css';
import React, { Component } from "react"
import General from './components/General'
import Education from './components/Education'
import Work from './components/Work'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEdit:false,
      eduId:2,
      workId:2,
      general: {
        "name":"Satoshi S.",
        "phone":"980-1234-5678",
        "email":"example@email.com",
        "website":"https://satoshi40.pythonanywhere.com/"},
      educations:[
        {'school':'Hv University',
          'major':'Computer Science',
        'year':'2022',
        'isComplete':true,
        'isEdit':false,
        'id':0},
        {'school':'Os University',
          'major':'Economics',
          'year':'2010-2014',
          'isComplete':true,
          'isEdit':false,
        'id':1},
      ],
      works:[
        {'company':'Xyz Co.',
         'position':'Software Developper',
         'task':'Developping internal database software',
         'year':'2014-2020',
         'isComplete':true,
         'isEdit':false,
         'id':0},
         {'company':'Abc Co.',
         'position':'Product Marketer',
         'task':'Make sales strategy for game products',
         'year':'2010-2014',
         'isComplete':true,
         'isEdit':false,
         'id':1},
      ]

      
      };
  this.genEdit = this.genEdit.bind(this);
  this.genChange= this.genChange.bind(this)
  this.addEducation=this.addEducation.bind(this)
  this.addEducation2 = this.addEducation2.bind(this)
  this.eduChange = this.eduChange.bind(this)
  this.removeEducation = this.removeEducation.bind(this)
  this.eduEdit = this.eduEdit.bind(this)

  this.addWork = this.addWork.bind(this)
  this.addWork2 =this.addWork2.bind(this)
  this.workChange = this.workChange.bind(this)
  this.removeWork = this.removeWork.bind(this)
  this.workEdit = this.workEdit.bind(this)
}
  genEdit(){
    this.setState(prevState=>({
    isEdit:!prevState.isEdit
    }))
  }
  eduEdit(e){
     let newEdu = []
     this.state.educations.forEach(edu=>{
      if (edu.id==parseInt(e.target.id)){
         edu['isEdit']=true
      }
      newEdu.push(edu)
      })
     this.setState({
      educations:newEdu
     })
     }
     workEdit(e){
      let newWork = []
      this.state.works.forEach(work=>{
       if (work.id==parseInt(e.target.id)){
          work['isEdit']=true
       }
       newWork.push(work)
       })
      this.setState({
       works:newWork
      })
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
  workChange(e){
    let newWork = []
    this.state.works.forEach(work=>
      {
        if(work.id===parseInt(e.target.id)){
        const key = e.target.className.split('-')[0]
        work[key]=e.target.value
        }
        
        newWork.push(work)
      })
      this.setState({
        works:newWork
      })
  }



  addEducation(){
    let newArray = [...this.state.educations,{'id':this.state.eduId,'isComplete':false}]
    this.setState({
      educations:newArray,
      eduId: this.state.eduId+1
    })
  }
  addWork(){
    let newArray = [...this.state.works,{'id':this.state.workId,'isComplete':false}]
    this.setState({
      works:newArray,
      workId: this.state.eduId+1
    })
  }

  

  addEducation2(e){
    let newEdu = []
    this.state.educations.forEach(edu=>
      {
        if(edu.id===parseInt(e.target.id)){
        edu['isComplete']=true
        edu['isEdit']=false
        }
        
        newEdu.push(edu)
      })
      this.setState({
        educations:newEdu
      })
  
  }
  addWork2(e){
    let newWork = []
    this.state.works.forEach(work=>
      {
        if(work.id===parseInt(e.target.id)){
        work['isComplete']=true
        work['isEdit']=false
        }
        
        newWork.push(work)
      })
      this.setState({
        works:newWork
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
  removeWork(e){
    let newArray = []
    console.log('test')
    this.state.works.forEach(work=>{
      if(work.id!=parseInt(e.target.id)){
         newArray.push(work)
      }
    })
    this.setState({
      works:newArray,
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
               eduEdit = {this.eduEdit}
              />
              <hr />
              <Work 
               works = {this.state.works}
               addWork = {this.addWork}
               addWork2={this.addWork2}
               workChange={this.workChange}
               removeWork = {this.removeWork}
               workEdit = {this.workEdit}
              />
           </div>
  }
}

export default App;
