import "./DeleteProduct.css"

function DeleteProduct({isOpen,onClose,onConfirm}) {
    if(!isOpen) return null;
  return (
    <div>
    <div className="modal-backdrop" onClick={onClose}></div>
    <div className="modal">
      <div className="modal-content">
        <img src="../../../../icon/Close.png" alt="" />
        <h2>Are you sure?</h2>
        <p>You are removing an item permanently</p>
        <div>
            <button className="go" onClick={onConfirm}>Go</button>
            <button className="no" onClick={onClose}>No!</button>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default DeleteProduct