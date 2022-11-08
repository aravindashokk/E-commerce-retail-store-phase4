import React, { useEffect, useState } from "react";
import '../administration.css';
import add from '../../assets/images/plus.png';
import { populateTables } from '../administration';
import validateSession from "../../session/session";
import axios from "axios";
import deleteIcon from '../../assets/images/delete.png';
import confirmIcon from '../../assets/images/tick.png';
import discardIcon from '../../assets/images/close.png';
import edit from '../../assets/images/edit.png';
function SchoolAdmin() {
    const [orders, setOrders] = useState([]);
    const [equipments, setEquipments] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        validateSession('SchoolAdmin');
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
       getAllCustomers();
    }, []);

    const getAllCustomers=() => {
        axios.get("http://localhost/wdm_phase3/React/src/api/getcustomers.php")
        .then(res=> {
            console.log(res.data)
            setCustomers(res.data)
        })
    }
    

    return (
        <section className='administration-bg hide-section'>
            {/* Header section title */}
            <div className="container" id="heading-container">
                <div className="font-oswald heading"> School Admin  </div>
            </div>

            {/* School admin section tables structure  */}
            <div className="manage-container d-flex flex-direction-column align-items-around justify-evenly">

                {/* Horizontal row section containing multiple tables  */}
                <div className="d-flex flex-direction-row justify-around section-container">

                    {/* Manage Student table  */}
                    <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Students</span>
                        <div className="table-container">
                        <table id="customer-table" className="material-table">
                                <tbody>
                                    <tr>
                                        
                                        <th>First Nmae</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>User_Type</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => { }} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>
                                    {customers.map(customer => (
                                        <tr>
                                            
                                            <td>{customer.First_Name}</td>
                                            <td>{customer.Last_Name}</td>
                                            <td>{customer.Email}</td>
                                            <td>{customer.Phone}</td>
                                            <td>{customer.User_Type}</td>
                                            <td>{''}</td>
                                           
                                        </tr>))}
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Manage equipment table  */}
                    {/* <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Business Owner's </span>
                        <div className="table-container">
                            <table id="equipment-table" className="material-table">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>Equipment Type</th>
                                        <th>Model No</th>
                                        <th>Brand Name</th>
                                        <th>Load Capacity</th>
                                        <th>Status</th>
                                        <th>Order ID</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => addEquipmentColumn()} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>
                                    {equipments.map(equipment => {
                                        if ((equipment.editEquipment || equipment.addEquipment))
                                            return (<tr>
                                                <td>{equipment.ID}</td>
                                                <td>
                                                    <select name="Equipment_Type" id="equipmentType" className="font-roboto" value={equipment.Equipment_Type} onChange={(event) => handleEqpChange(event, equipment)} required>
                                                        <option value="Washing Machine" >Washing Machine</option>
                                                        <option value="Dryer">Dryer</option>
                                                        <option value="Iron Box">Iron Box</option>
                                                        <option value="Weights">Weights</option>
                                                        <option value="Basket">Basket</option>
                                                    </select>
                                                </td>
                                                <td><input type="text" id="modelNo" name="Model_No" className="font-roboto" placeholder="Model No" value={equipment.Model_No} onChange={(event) => handleEqpChange(event, equipment)} required /></td>
                                                <td><input type="text" id="brandName" name="Brand_Name" className="font-roboto" placeholder="Brand_Name" value={equipment.Brand_Name} onChange={(event) => handleEqpChange(event, equipment)} required /></td>
                                                <td><input type="number" id="loadCapacity" className="font-roboto" name="Load_Capacity" placeholder="Load_Capacity" value={equipment.Load_Capacity} onChange={(event) => handleEqpChange(event, equipment)} required /></td>
                                                <td><select name="Status" id="status" className="font-roboto" value={equipment.Status} onChange={(event) => handleEqpChange(event, equipment)} required>
                                                    <option value="Available" >Available</option>
                                                    <option value="InUse">In Use</option>
                                                </select></td>
                                                <td><input type="number" id="orderid" name="Order_ID" placeholder="Order ID" value={equipment.Order_ID} onChange={(event) => handleEqpChange(event, equipment)} required /></td>
                                                <td>
                                                    <span className="action-icons">
                                                        <img src={confirmIcon} onClick={() => addOrEditEquipment(equipment)} title="Confirm" />
                                                        <img src={discardIcon} onClick={() => equipment.editEquipment = false} title="Cancel" />
                                                    </span></td>
                                            </tr>);
                                        else return (
                                            <tr>
                                                <td>{equipment.ID}</td>
                                                <td>{equipment.Equipment_Type}</td>
                                                <td>{equipment.Model_No}</td>
                                                <td>{equipment.Brand_Name}</td>
                                                <td>{equipment.Load_Capacity}</td>
                                                <td>{equipment.Status}</td>
                                                <td>{equipment.Order_ID}</td>
                                                <td>
                                                    <span className="action-icons">
                                                        <img src={edit} onClick={() => editEquipmentColumn(equipment)} title="edit" />
                                                        <img src={deleteIcon} onClick={() => deleteEqp(equipment.ID)} title="delete" />
                                                    </span>
                                                </td>
                                            </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div> */}
                </div>

                {/* Horizontal row section containing multiple tables  */}
                <div className="d-flex flex-direction-row justify-around section-container" id="manager-actions">

                    {/* Manual Order table  */}
                    {/* <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manual Order</span>
                        <div className="d-flex flex-direction-row order-container">
                            <div className="d-flex flex-direction-column justify-between">
                                <input type="text" placeholder="Customer Name" required="required" />
                                <input type="text" placeholder="Phone Number" required="required" maxLength="10" />
                                <label>Service Type:</label>
                                <select name="services" id="services">
                                    <option value="Washing">Washing</option>
                                    <option value="Drying">Drying</option>
                                    <option value="Ironing">Ironing</option>
                                    <option value="Pickup">Pickup</option>
                                    <option value="Delivery">Delivery</option>
                                </select>
                            </div>
                            <div className="d-flex flex-direction-column justify-between">
                                <input type="text-area" placeholder="Description" />
                                <input type="submit" className="btn submit-order" />
                            </div>
                        </div>
                    </div> */}

                    {/* Manage tasks table  */}
                    {/* <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Tasks</span>
                        <div className="table-container">
                            <table id="tasks-table" className="material-table">
                                <tbody>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Assigned to</th>
                                        <th>Desc</th>
                                        <th>Services</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            src={add} height="13px"
                                            width="13px" alt='add-record' /></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> */}
                </div>

                {/* Horizontal row section containing multiple tables  */}
                <div className="d-flex flex-direction-row justify-around section-container">

                    {/* Manage Customers table  */}
                    {/* <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Customers</span>
                        <div className="table-container">
                            <table id="customer-table" className="material-table">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>First Nmae</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Created Date</th>
                                        <th>User Type</th>
                                        <th>Address</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => { }} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>
                                    {customers.map(customer => (
                                        <tr>
                                            <td>{customer.ID}</td>
                                            <td>{customer.First_Name}</td>
                                            <td>{customer.Last_Name}</td>
                                            <td>{customer.Email}</td>
                                            <td>{customer.Created_Date}</td>
                                            <td>{customer.User_Type}</td>
                                            <td>{''}</td>
                                            <td>
                                                <span className="action-icons">
                                                    <img src={edit} onClick={() => { }} title="edit" />
                                                    <img src={deleteIcon} onClick={() => deleteCustomer(customer.ID)} title="delete" />
                                                </span>
                                            </td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div> */}

                    {/* Manage Pickup/Delivery table  */}
                    {/* <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Pickup / Delivery</span>
                        <div className="table-container">
                            <table id="pickup-table" className="material-table">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>First Nmae</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Subscription</th>
                                        <th>Plan</th>
                                        <th>Day</th>
                                        <th>Address</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => { }} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>
                                    {pickup.map(pickup => (
                                        <tr>
                                            <td>{pickup.ID}</td>
                                            <td>{pickup.First_Name}</td>
                                            <td>{pickup.Last_Name}</td>
                                            <td>{pickup.Email}</td>
                                            <td>{pickup.Phonenumber}</td>
                                            <td>{pickup.subscribe}</td>
                                            <td>{pickup.plan}</td>
                                            <td>{pickup.day}</td>
                                            <td>{pickup.address}</td>
                                            <td>
                                                <span className="action-icons">
                                                    <img src={edit} onClick={() => { }} title="edit" />
                                                    <img src={deleteIcon} onClick={() => deletePickup(pickup.ID)} title="delete" />
                                                </span>
                                            </td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div> */}
                </div>

                {/* Horizontal row section containing Employee table  */}
                {/* <div className="d-flex flex-direction-row justify-around section-container" id='employee-table-container'>
                    <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Employees</span>
                        <div className="table-container">
                            <table id="employee-table" className="material-table">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>First Nmae</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Created Date</th>
                                        <th>User Type</th>
                                        <th>Address</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => { }} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>
                                    {employee.map(emp => (
                                        <tr>
                                            <td>{emp.ID}</td>
                                            <td>{emp.First_Name}</td>
                                            <td>{emp.Last_Name}</td>
                                            <td>{emp.Email}</td>
                                            <td>{emp.Created_Date}</td>
                                            <td>{emp.User_Type}</td>
                                            <td>{''}</td>
                                            <td>
                                                <span className="action-icons">
                                                    <img src={edit} onClick={() => { }} title="edit" />
                                                    <img src={deleteIcon} onClick={() => deleteEmployee(emp.ID)} title="delete" />
                                                </span>
                                            </td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
export default SchoolAdmin;