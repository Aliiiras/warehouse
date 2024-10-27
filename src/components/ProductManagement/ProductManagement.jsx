import Table from "../Table/Table"
import './ProductManagement.css'
import NewProduct from "../Modals/New/NewProduct"
import { useState } from "react";


function productManagement() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const saveChanges = () => {
      // عمل ذخیره‌سازی
      closeModal();
    };
  return (
    <>
    <div className="searchbar">
        <div className="search">
            <input type="search" placeholder="Search product"/>
            <i className="search-icon"></i>
        </div>
        <div className="roleInfo">
            <div className="avatar">
                <img src="../../../icon/avatar.png" alt="" />
            </div>
            <div className="role">
                <h5>Ali Rasouli</h5>
                <span>Admin</span>
            </div>
            
        </div>
    </div>
    <div className="action">
        
        <div className="action-info">
            <img src="../icon/setting-3.png" alt="" />
            <h4>Product Management</h4>
        </div>
        <div className="action-btn">
            <button
             onClick={openModal}
            >New Product</button>
        </div>
    </div>
    <div className="productlist">
        <Table/>
        <NewProduct 
            isOpen={isModalOpen}
            onClose={closeModal}
            onCreate={saveChanges}
            />
    </div>
    </>
    
  )
}

export default productManagement