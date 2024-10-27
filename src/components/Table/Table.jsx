import DeleteProduct from "../Modals/Delete/DeleteProduct"
import EditProduct from "../Modals/Edit/EditProduct";
import "./Table.css"
import { useState,useEffect } from "react";
import axios from "axios";


function Table(
    // {data}
) {
    const [isDelModalOpen, setIsDelModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/products?page=1&limit=10');
            setData(response.data);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
        // if (loading) return <div>Loading...</div>;
        // if (error) return <div>Error: {error}</div>;
    
      const handleDelete = (item) => {
        console.log(item);
        setItemToDelete(item);
        setIsDelModalOpen(true);
          };
    
      const handleConfirmDelete = () => {
        // اینجا می‌تونی عملیات حذف واقعی رو انجام بدی
        console.log("آیتم حذف شد:", itemToDelete);
        setIsDelModalOpen(false);
      };
    
      const handleCloseModal = () => {
        setIsDelModalOpen(false);
      };


      const [isEditModalOpen, setEditModalOpen] = useState(false);

  const openModal = () => setEditModalOpen(true);
  const closeModal = () => setEditModalOpen(false);
  const saveChanges = () => {
    // عمل ذخیره‌سازی
    closeModal();
  };


  return (
    <div>
    {loading && <div>Loading...</div>}
    {error && <div>Error: {error}</div>}
    {!loading && !error && (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>ID</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {data.map((item)=>(
                <tr 
                key={item.id}
                >
                    <td>
                        {item.name}
                        </td>
                    <td>
                        {item.quantity} 
                        </td>
                    <td>
                        {item.price} 

                    </td>
                    <td>
                        {item.id}
                        </td>
                    <td>
                        <button onClick={openModal}><img src="../../../icon/edit.png" alt="" /></button>
                        <button onClick={() => handleDelete(item)}><img src="../../../icon/trash.svg" alt="" /></button>
                    </td>
                    
                </tr>
             ))} 
            
            </tbody>
        </table>  
        )}
        <DeleteProduct 
            isOpen={isDelModalOpen}
            onClose={handleCloseModal}
            onConfirm={handleConfirmDelete}
            />
        <EditProduct
             isOpen={isEditModalOpen}
             onClose={closeModal}
             onSave={saveChanges} />
    </div>
    
    
  )
}

export default Table