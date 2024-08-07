
// eslint-disable-next-line no-unused-vars
import React,{useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees]=useState([])

    const navigator=useNavigate();

    useEffect(()=>
    {
      getAllEmployees();

    },[])

    function getAllEmployees()
    {
      listEmployees().then((response)=>
        {
            setEmployees(response.data);
        }).catch(error=>
        {
            console.error(error);
        }
        )
    }
   function addNewEmployee(){
    navigator('/add-employee')
   }
   function updateEmployee(id){
    navigator(`/edit-employee/${id}`)
   }

   function removeEmployee(id){
    console.log(id);
    deleteEmployee(id).then(()=>
    {
    getAllEmployees();
    }).catch(error=>{
      console.log(error);
    })
   }

  return (
    <div className='container'>
      <h2 className='text-center'>List Of Employees</h2>
      <button className='btn btn-primary MB-2' onClick={addNewEmployee}>Add Employee</button>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
            <th>Employee Id</th>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee email id</th>
              <th>Actions</th>

            </tr>
        </thead>
        <tbody>
            {
                employees.map(employee =>
                    <tr key={employee.id}>
                     <td>{employee.id}</td>
                     <td>{employee.firstname}</td>
                     <td>{employee.lastname}</td>
                     <td>{employee.email}</td>
                     <td>
                      <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button>
                      <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)}
                        style={{marginLeft:'10px'}}
                        >Delete</button>
                     </td>
                    </tr> )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
