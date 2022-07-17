import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{
                firstName : "First Name",
                lastName: "Last Name",
                dob:"01/01/0000",
                designation:"Designation",
                photo:"Image link",
                experience:0,
            },
            listCount : 0,    
            editActive: false       
        }
    }

    addEmployee = () =>{
        this.setState({listCount: this.state.listCount +1})
    }

    deleteEmployee = () => {
        this.setState({listCount: this.state.listCount -1})
    }

    editEmployee = () =>{
        this.setState({editActive : !this.state.editActive})
    }

    onHandleChange = (value) =>{
        this.setState({
            data: {
                firstName: value,                
                lastName: value,
                dob: value,
                designation: value,
                photo:"Image link",
                experience:0,
            }
        })
    }
     
    render() {
        return ( 
            <>               
                 <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">First name </th>
                        <th scope="col">Last Name </th>
                        <th scope="col"> DOB </th>
                        <th scope="col"> Designation </th>
                        <th scope="col">  Profile Photo Link  </th>
                        <th scope="col">  Experience  </th>      
                        <th scope="col"> Edit/Delete</th>
                        <th scope="col"> <u> <span onClick={this.addEmployee}>Add Employee </span></u> </th>
                       
                       
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(this.state.listCount)].map(()=>{
                            return(                                <tr>
                        <td scope="col">
                        {this.state.editActive ? 
                            <input type="text" name='First Name' value={this.state.data.firstName} onChange={(e)=>this.onHandleChange()} /> :
                            this.state.data.firstName
                            } </td>
                        <td scope="col">
                       { this.state.editActive ? <input type="text" name='Last Name' value={this.state.data.lastName} /> : this.state.data.lastName}
                             </td>
                        <td scope="col"> 
                        { this.state.editActive ? <input type="text" name='Date of Birth' value={this.state.data.dob} /> : this.state.data.dob}
                         </td>
                        <td scope="col"> 
                        { this.state.editActive ? <input type="text" name='Designation' value={this.state.data.designation} />  : this.state.data.designation}

                       </td>
                        <td scope="col"> 
                        { this.state.editActive ?  <input type="text" name='Profile Photo' value={this.state.data.photo} />  : this.state.data.photo}
                          </td>
                        <td scope="col">  
                        { this.state.editActive ?   <input type="text" name='Experience' value={this.state.data.experience}  />  : this.state.data.experience}
                          </td>
                        <td scope="col"> <span onClick={this.editEmployee}><u>Edit</u></span> / <span onClick={this.deleteEmployee} ><u>Delete</u></span> </td>
                        <td scope="col">   </td>     
                                         
                        </tr>
                            )

                        })}
                        
                        
                    </tbody>
                    </table>
                
        </>
        );
    }

}

export default Home;