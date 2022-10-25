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
function BusinessOwner () {
    useEffect(() => {
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
        document.getElementById('authenticationTab').childNodes[0].innerText = 'Business Owner';
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
                        className="font-oswald section-header">Manage Products</span>
                    <div className="table-container">
                        <table id="order-table" className="material-table">
                            <tbody>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Product Owner</th>
                                    <th>Product Description</th>
                                    <th>Product Price</th>
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
                        className="font-oswald section-header">Manage Advertisements</span>
                    <div className="table-container">
                        <table id="equipment-table" className="material-table">
                        <tbody>
                            <tr>
                                <th>Advertisement Id</th>
                                <th>Advertisement Name</th>
                                <th>Advertisement Details</th>
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
                        className="font-oswald section-header">Manage Orders</span>
                    <div className="table-container">
                        <table id="tasks-table" className="material-table">
                        <tbody>
                            <tr>
                                <th>Order ID</th>
                                <th>Ordered By</th>
                                <th>Order Type</th>
                                <th>Ordered Date</th>
                                <th>Ordered From</th>
                                <th>Payment</th>
                                <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                        onClick={addTasks} src={add} height="13px"
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
export default BusinessOwner;