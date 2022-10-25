import React, {useEffect} from "react";
import '../administration.css';
import add from '../../assets/images/plus.png';
import { addCustomer } from '../administration';
import { addDeliveries } from '../administration';
import { addEmployee } from '../administration';
import { addOrder } from '../administration';
import { addTasks } from '../administration';
import { addEquipment } from '../administration';
import { populateTables } from "../administration";
function SchoolAdmin () {
    useEffect(() => {
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
        document.getElementById('authenticationTab').childNodes[0].innerText = 'School Admin';
        document.getElementById('cart').style.display='none';
    });
    setTimeout(()=> {
        populateTables();
    },500);
    return (
        <section className='administration-bg'>
         {/* Header section title */}
        <div className="container" id="heading-container">
            <div className="font-oswald heading"> Manage Daily Tasks </div>
        </div>

        {/* Admin and manager section tables structure  */}
        <div className="manage-container d-flex flex-direction-column align-items-around justify-evenly">

             {/* Horizontal row section containing multiple tables  */}
            <div className="d-flex flex-direction-row justify-around section-container">

                 {/* Manage Order table  */}
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Students</span>
                    <div className="table-container">
                        <table id="order-table" className="material-table">
                            <tbody>
                                <tr>
                                    <th>Student ID</th>
                                    <th>Student Name</th>
                                    <th>School Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => addOrder()} src={add} height="13px"
                                            width="13px" alt='add records'/></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                 {/* Manage equipment table  */}
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Clubs</span>
                    <div className="table-container">
                        <table id="equipment-table" className="material-table">
                        <tbody>
                            <tr>
                                <th>Club Id</th>
                                <th>Club Name</th>
                                <th>Phone No</th>
                                <th>Email</th>
                                <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                        onClick={addEquipment} src={add} height="13px"
                                        width="13px" alt='add-record'/></th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

             {/* Horizontal row section containing multiple tables  */}
            <div className="d-flex flex-direction-row justify-around section-container" id="manager-actions">

                 {/* Manage tasks table  */}
                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Businesses</span>
                    <div className="table-container">
                        <table id="tasks-table" className="material-table">
                        <tbody>
                            <tr>
                            <th>Business ID</th>
                                    <th>Business Name</th>
                                    <th>Business Owner</th>
                                    <th>Email</th>
                                    <th>Phone no</th>
                                <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                        onClick={addTasks} src={add} height="13px"
                                        width="13px" alt='add-record'/></th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Posts</span>
                    <div className="table-container">
                        <table id="customer-table" className="material-table">
                            <tbody>
                                <tr>
                                <th>Post ID</th>
                                <th>Post Name</th>
                                <th>Posted By</th>
                                <th>Posted Time</th>
                                <th>Post Description</th>
                                    <th className="text-align-center"><img className="cursor-pointer" onClick={addCustomer}
                                            title="Add Record" src={add} height="13px"
                                            width="13px" alt='add-record'/></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
        </section>
    );
}
export default SchoolAdmin;