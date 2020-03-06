import React, { Component } from 'react'
import ProfessionalData from './data/professional.json'
import ScrollAnimation from 'react-animate-on-scroll'

import './css/Project.css'

export class Project extends Component{
    constructor(props){
        super(props);
        this.createProject = this.createProject.bind(this);
    }

    createProject(data, index){       
        let state = this.state;
        let key = state.contentType + '-' + index;

        let overview = []
        Object.keys(data['Details']).forEach(function( header, index ){
            overview.push(
                <p key={state.contentType + '-' + 'details' + index}>
                    <span className="project-span">{ header + ':    ' }</span>
                    {data['Details'][header]}
                </p>
            )
        });

        return(
            <ScrollAnimation key={key} animateOnce={true} animateIn="fadeIn">
                <div className="row portfolio-panel-content">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <p className="divider">{ state.divider }<br/></p>
                        <h2 className="project-title">{ data.Title }</h2>
                        <div className="col-sm-6 project-overview"> { overview }</div>
                        <div className="col-sm-6 project-image-div" >
                            <img className="project-image" src={process.env.PUBLIC_URL + data['Project Image Path']} alt={state.contentType + '-' + 'image'}></img>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <p className="project-text"><b>Project Description: </b>{data['Project Description']}</p>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <p className="project-text"><b>My Involvement: </b>{data['My Involvement']}</p>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </ScrollAnimation>
        );
    }

    render(){
        return(
            <div className="row portfolio-panel-content all">
                <div className="col-sm-1"> </div>
                <div className="col-sm-10">
                    <p className="project-header">ALL PROJECTS</p>
                    <p className="divider"> ALL <br/></p>
                </div>
            </div>
        );
    }
}

export class Professional extends Project{
    constructor(props){
        super(props);
        this.state = { 
            contentType: 'professional',
            component: [],
            divider: 'PROFESSIONAL',
            header: 'PROFESSIONAL PROJECTS',
        };
    }

    render(){
        let state = this.state;
        let createProject = this.createProject;
        state.component.push(<p key={'header'} className="project-header">{ state.header }</p>  )
        Object.keys(ProfessionalData).forEach(function(key, index) {
            state.component.push( createProject(ProfessionalData[key], index ) );
        })
        return state.component;
    }
}

export class Personal extends Project{
    constructor(props){
        super(props);
        this.state = { 
            contentType: 'personal',
            header: 'PERSONAL PROJECTS',
            divider: 'PERSONAL',
        };
    }
    render(){
        return(
            <div className="row portfolio-panel-content personal">
                <div className="col-sm-1"> </div>
                <div className="col-sm-10">
                    <p className="project-header">PERSONAL PROJECTS</p>
                    <p className="divider"> PERSONAL <br/></p>
                </div>
            </div>
        );
    }
}
