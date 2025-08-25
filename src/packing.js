// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import './App.css';

// const Packing = () => {
//   const [packingList, setPackingList] = useState([
//     { id: 1, item: 'Passport', packed: true },
//     { id: 2, item: 'Travel Insurance', packed: true },
//     { id: 3, item: 'Swimsuit', packed: false },
//     { id: 4, item: 'Sunscreen', packed: false },
//     { id: 5, item: 'Camera', packed: false },
//   ]);

//   const [newItem, setNewItem] = useState('');

//   const handleTogglePacked = (id) => {
//     const updatedList = packingList.map((item) =>
//       item.id === id ? { ...item, packed: !item.packed } : item
//     );
//     setPackingList(updatedList);
//   };

//   const handleAddItem = () => {
//     if (newItem.trim() === '') return;
//     const newPackingItem = {
//       id: Date.now(),
//       item: newItem,
//       packed: false,
//     };
//     setPackingList([...packingList, newPackingItem]);
//     setNewItem('');
//   };

//   const handleRemoveLastItem = () => {
//     setPackingList(prev => prev.slice(0, -1));
//   };

//   return (
//     <div className="packing-container">
//       <Sidebar />
//       <h2>Packing List</h2>

//       <div className="packing-list">
//         {packingList.map(item => (
//           <div className="packing-item" key={item.id}>
//             <input
//               type="checkbox"
//               checked={item.packed}
//               onChange={() => handleTogglePacked(item.id)}
//               className="checkbox"
//             />
//             <span className={`item-text ${item.packed ? 'packed' : ''}`}>{item.item}</span>
//           </div>
//         ))}

//         <div className="add-item-form">
//           <input
//             type="text"
//             value={newItem}
//             placeholder="Add new item"
//             onChange={(e) => setNewItem(e.target.value)}
//             className="input-item"
//           />
//           <div className="button-group">
//             <button className="btn add" onClick={handleAddItem}>+ Add Item</button>
//             <button className="btn remove" onClick={handleRemoveLastItem}>− Remove Last</button>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Selected (Packed) items shown below */}
//       <div className="selected-items-box">
//         <h3>Selected Items</h3>
//         <ul>
//           {packingList.filter(item => item.packed).map(item => (
//             <li key={item.id}>{item.item}</li>
//           ))}
//         </ul>
//       </div>

//       <style>{`
//         .packing-container {
//           max-width: 600px;
//           margin: 40px auto;
//           padding: 20px;
//           border: 1px solid #ccc;
//           border-radius: 12px;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//           font-family: 'Arial', sans-serif;
//           background-color: #ffffff;
//           transition: box-shadow 0.3s;
//           margin-left:400px;
//         }

//         .packing-container:hover {
//           box-shadow: 0 6px 20px rgba(0,0,0,0.2);
//         }

//         h2 {
//           text-align: center;
//           color: #3f51b5;
//           margin-bottom: 20px;
//         }

//         .packing-list {
//           margin-bottom: 30px;
//         }

//         .packing-item {
//           display: flex;
//           align-items: center;
//           margin-bottom: 10px;
//           padding: 10px;
//           border-radius: 8px;
//           background-color: #f9f9f9;
//           transition: background-color 0.3s;
//         }

//         .packing-item:hover {
//           background-color: #e3f2fd;
//         }

//         .checkbox {
//           margin-right: 10px;
//           cursor: pointer;
//         }

//         .item-text {
//           flex: 1;
//           font-size: 16px;
//           color: #333;
//         }

//         .packed {
//           text-decoration: line-through;
//           color: gray;
//         }

//         .add-item-form {
//           margin-top: 20px;
//         }

//         .input-item {
//           width: 100%;
//           padding: 10px;
//           margin-bottom: 10px;
//           border: 1px solid #ccc;
//           border-radius: 6px;
//           font-size: 14px;
//         }

//         .button-group {
//           display: flex;
//           gap: 10px;
//         }

//         .btn {
//           flex: 1;
//           padding: 10px 0;
//           border: none;
//           border-radius: 6px;
//           font-size: 14px;
//           cursor: pointer;
//           transition: background 0.3s;
//         }

//         .btn.add {
//           background-color: #3f51b5;
//           color: white;
//         }

//         .btn.add:hover {
//           background-color: #303f9f;
//         }

//         .btn.remove {
//           background-color: #f44336;
//           color: white;
//         }

//         .btn.remove:hover {
//           background-color: #d32f2f;
//         }

//         .selected-items-box {
//           background-color: #e3f2fd;
//           padding: 15px;
//           border-radius: 8px;
//           border: 1px solid #ccc;
//         }

//         .selected-items-box h3 {
//           margin-bottom: 10px;
//           color: #3f51b5;
//         }

//         .selected-items-box ul {
//           list-style-type: disc;
//           padding-left: 20px;
//           margin: 0;
//         }

//         .selected-items-box ul li {
//           color: #333;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Packing;





// Packing.js (responsive version, component logic unchanged)
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './App.css';

const Packing = () => {
  const [packingList, setPackingList] = useState([
    { id: 1, item: 'Passport', packed: true },
    { id: 2, item: 'Travel Insurance', packed: true },
    { id: 3, item: 'Swimsuit', packed: false },
    { id: 4, item: 'Sunscreen', packed: false },
    { id: 5, item: 'Camera', packed: false },
  ]);

  const [newItem, setNewItem] = useState('');

  const handleTogglePacked = (id) => {
    const updatedList = packingList.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setPackingList(updatedList);
  };

  const handleAddItem = () => {
    if (newItem.trim() === '') return;
    const newPackingItem = {
      id: Date.now(),
      item: newItem,
      packed: false,
    };
    setPackingList([...packingList, newPackingItem]);
    setNewItem('');
  };

  const handleRemoveLastItem = () => {
    setPackingList(prev => prev.slice(0, -1));
  };

  return (
    <div className="packing-container">
      <Sidebar />
      <h2>Packing List</h2>

      <div className="packing-list">
        {packingList.map(item => (
          <div className="packing-item" key={item.id}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => handleTogglePacked(item.id)}
              className="checkbox"
            />
            <span className={`item-text ${item.packed ? 'packed' : ''}`}>{item.item}</span>
          </div>
        ))}

        <div className="add-item-form">
          <input
            type="text"
            value={newItem}
            placeholder="Add new item"
            onChange={(e) => setNewItem(e.target.value)}
            className="input-item"
          />
          <div className="button-group">
            <button className="btn add" onClick={handleAddItem}>+ Add Item</button>
            <button className="btn remove" onClick={handleRemoveLastItem}>− Remove Last</button>
          </div>
        </div>
      </div>

      <div className="selected-items-box">
        <h3>Selected Items</h3>
        <ul>
          {packingList.filter(item => item.packed).map(item => (
            <li key={item.id}>{item.item}</li>
          ))}
        </ul>
      </div>

      <style>{`
        .packing-container {
          max-width: 600px;
          margin: 40px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          font-family: 'Arial', sans-serif;
          background-color: #ffffff;
          transition: box-shadow 0.3s;
          margin-left: 400px;
        }

        .packing-container:hover {
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }

        h2 {
          text-align: center;
          color: #3f51b5;
          margin-bottom: 20px;
        }

        .packing-list {
          margin-bottom: 30px;
        }

        .packing-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 8px;
          background-color: #f9f9f9;
          transition: background-color 0.3s;
        }

        .packing-item:hover {
          background-color: #e3f2fd;
        }

        .checkbox {
          margin-right: 10px;
          cursor: pointer;
        }

        .item-text {
          flex: 1;
          font-size: 16px;
          color: #333;
        }

        .packed {
          text-decoration: line-through;
          color: gray;
        }

        .add-item-form {
          margin-top: 20px;
        }

        .input-item {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 14px;
        }

        .button-group {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .btn {
          flex: 1;
          padding: 10px 0;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .btn.add {
          background-color: #3f51b5;
          color: white;
        }

        .btn.add:hover {
          background-color: #303f9f;
        }

        .btn.remove {
          background-color: #f44336;
          color: white;
        }

        .btn.remove:hover {
          background-color: #d32f2f;
        }

        .selected-items-box {
          background-color: #e3f2fd;
          padding: 15px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        .selected-items-box h3 {
          margin-bottom: 10px;
          color: #3f51b5;
        }

        .selected-items-box ul {
          list-style-type: disc;
          padding-left: 20px;
          margin: 0;
        }

        .selected-items-box ul li {
          color: #333;
        }

        /* ---------------- RESPONSIVE STYLES ---------------- */
        @media (max-width: 768px) {
          .packing-container {
            margin-left: auto;
            margin-right: auto;
            width: 90%;
            padding: 15px;
          }

          .button-group {
            flex-direction: column;
          }

          .btn {
            flex: none;
            width: 100%;
          }

          .packing-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .checkbox {
            margin-bottom: 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default Packing;
