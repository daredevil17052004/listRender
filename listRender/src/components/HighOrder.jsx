import React, { Component } from 'react'
import './HighOrder.css'

export default class HighOrder extends Component {
    constructor(){
        super();
            this.state = {
                userData: [
                    { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                    { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                    { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                    { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                    { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
                ]
            }
    }

    userType(user_type){
        return user_type = 'designer';
    }

    render(){
        let dat = this.state.userData;
        console.log(dat)
        return(
            <div>
                <h2>All Data</h2>
                {
                    dat.map((item) =>{
                        return(
                            <div key={item.id}>
                                
                                    <li className='list'>
                                        <span>Id : {item.id}</span>
                                        <span>Name : {item.name}</span>
                                        <span>User_Type : {item.user_type}</span>
                                        <span>Age : {item.age}</span>
                                        <span>Years : {item.years}</span>
                                    </li>
                            </div>
                        )
                    })
                }

                <h2>Data based on UserType</h2>
                {
                 dat.filter((item)=>{
                    return item.user_type === 'Designer';
                 }).map((item) =>{
                    return(
                        <div>
                            <li className='list'>
                                <span>Id:{item.id}</span>
                                <span>Name : {item.name}</span>
                                <span>User_Type : {item.user_type}</span>
                            </li>
                        </div>
                    )
                 })
                }

                <h2>Names starting with J</h2>
                {
                    dat.filter((item) =>{
                        for(let i = 0; i<item.name.length; i++){
                            return item.name.startsWith('J')
                        } 
                    }).map((item) =>{
                        return(
                            <div>
                                <li>
                                    <span>Id: {item.id}</span>
                                    <span>Name : {item.name}</span>
                                    <span>userType: {item.user_type}</span>
                                </li>
                            </div>
                        )
                    })
                }

                <h2>Filter by age(between 28 and 50)</h2>
                {
                    dat.filter((item) =>{
                        return item.age > 28 && item.age<=50
                    }).map((item)=>{
                        return(
                            <div>
                                <li>
                                    <span>Id: {item.id}</span>
                                    <span>Name : {item.name}</span>
                                    <span>userType: {item.user_type}</span>
                                    <span>Age: {item.age}</span>
                                </li>
                            </div>
                        )
                    })
                }

                <h2>Total years of designers</h2>
                {
                    dat.filter((item)=>{
                        return item.user_type === "Designer";
                    }).map((item) => item.years)
                    .reduce((total,years)=>{
                        return(
                            <div>
                                {total+years}
                            </div>
                        )
                    })
                 }
            </div>
        )
    }
}
