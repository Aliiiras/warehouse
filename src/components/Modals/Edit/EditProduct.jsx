import "./EditProduct.css"

function EditProduct({ isOpen, onClose, onSave }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Edit Details</h2>
          <form>
            <label>Product Name</label>
            <input type="text" />
  
            <label>Available</label>
            <input type="number"/>
  
            <label>Price</label>
            <input type="text"/>
  
            <div className="modal-actions">
              <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
              <button type="submit" className="save-btn" onClick={onSave}>Apply</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  export default EditProduct;