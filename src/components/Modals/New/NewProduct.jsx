import "./NewProduct.css"

function NewProduct({ isOpen, onClose, onSave }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Create New Product</h2>
          <form>
            <label>New Product Name</label>
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
  export default NewProduct;