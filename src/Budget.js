// import React, { useState } from 'react';
// import Sidebar from './Sidebar';

// const categories = [
//   { category: 'Accommodation', percentage: 40, spent: 0, description: 'Hotel stays and lodging', date: '2025-06-01' },
//   { category: 'Transportation', percentage: 25, spent: 0, description: 'Flights, taxis, and car rentals', date: '2025-06-05' },
//   { category: 'Food', percentage: 20, spent: 0, description: 'Meals and dining', date: '2025-06-10' },
//   { category: 'Activities', percentage: 15, spent: 0, description: 'Tours and excursions', date: '2025-06-15' },
// ];

// const BudgetOverview = () => {
//   const [totalBudget, setTotalBudget] = useState(0);
//   const [budgetData, setBudgetData] = useState(categories);
//   const [inputValues, setInputValues] = useState({});

//   const allocatedData = budgetData.map(item => ({
//     ...item,
//     amount: (totalBudget * item.percentage) / 100,
//   }));

//   const totalSpent = allocatedData.reduce((sum, item) => sum + item.spent, 0);
//   const totalRemaining = totalBudget - totalSpent;

//   const handleInputChange = (index, value) => {
//     setInputValues({
//       ...inputValues,
//       [index]: value,
//     });
//   };

//   const handleSpend = (index) => {
//     const value = parseFloat(inputValues[index] || 0);
//     if (isNaN(value) || value <= 0) {
//       alert("Please enter a valid amount.");
//       return;
//     }

//     const updatedData = [...budgetData];
//     const newSpent = updatedData[index].spent + value;
//     if (newSpent <= (totalBudget * updatedData[index].percentage) / 100) {
//       updatedData[index].spent = newSpent;
//       setBudgetData(updatedData);
//       setInputValues({ ...inputValues, [index]: "" }); 
//     } else {
//       alert("You can't spend more than the allocated budget.");
//     }
//   };

//   return (
//     <div className="budget-section">
//       <Sidebar />
//       <div className="section-header">
//         <h2>Budget Overview</h2>
//       </div>

//       {/* Total budget input */}
//       <div className="total-budget-input">
//         <label>Enter Total Budget: </label>
//         <input
//           type="number"
//           value={totalBudget}
//           onChange={(e) => setTotalBudget(Number(e.target.value))}
//           placeholder="Enter total budget"
//         />
//       </div>

//       <div className="budget-summary">
//         <div className="budget-item">
//           <span>Total Budget</span>
//           <span className="budget-amount">${totalBudget}</span>
//         </div>
//         <div className="budget-item">
//           <span>Spent</span>
//           <span className="budget-amount">${totalSpent}</span>
//         </div>
//         <div className="budget-item">
//           <span>Remaining</span>
//           <span className="budget-amount">${totalRemaining}</span>
//         </div>
//       </div>

//       <div className="budget-categories">
//         {allocatedData.map((category, index) => (
//           <div className="budget-category" key={index}>
//             <div className="category-info">
//               <span>{category.category}</span>
//               <span>${category.spent} / ${category.amount}</span>
//             </div>
//             <div className="category-description">
//               <span>Description: {category.description}</span>
//               <span>Date: {category.date}</span>
//             </div>
//             <div className="progress-bar">
//               <div 
//                 className="progress" 
//                 style={{ width: `${(category.spent / category.amount) * 100}%` }}
//               ></div>
//             </div>
//             <div className="spend-controls">
//               <input
//                 type="number"
//                 placeholder="Enter amount"
//                 value={inputValues[index] || ""}
//                 onChange={(e) => handleInputChange(index, e.target.value)}
//               />
//               <button onClick={() => handleSpend(index)}>Spend</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <style>{`
//         .budget-section {
//           background: #fff;
//           padding: 1.5rem;
//           border-radius: 12px;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//           margin: 40px auto;
//           max-width: 800px;
//           font-family: sans-serif;
//           margin-left: 320px;
//         }

//         .section-header h2 {
//           margin-bottom: 1rem;
//            text-align: center;
//         }

//         .total-budget-input {
//           margin-bottom: 1.5rem;
//         }

//         .total-budget-input input {
//           padding: 0.5rem;
//           font-size: 1rem;
//           border-radius: 6px;
//           border: 1px solid #ccc;
//           margin-left: 10px;
//         }

//         .budget-summary {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 1.5rem;
//         }

//         .budget-item {
//           text-align: center;
//           flex: 1;
//         }

//         .budget-amount {
//           font-weight: bold;
//           font-size: 1.2rem;
//           display: block;
//           margin-top: 0.3rem;
//         }

//         .budget-categories {
//           display: flex;
//           flex-direction: column;
//           gap: 1.2rem;
//         }

//         .budget-category {
//           background: #f9f9f9;
//           padding: 1rem;
//           border-radius: 8px;
//         }

//         .category-info {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 0.5rem;
//         }

//         .category-description {
//           margin-bottom: 0.5rem;
//           font-size: 0.9rem;
//           color: #555;
//         }

//         .progress-bar {
//           height: 8px;
//           background: #ddd;
//           border-radius: 4px;
//           overflow: hidden;
//         }

//         .progress {
//           height: 100%;
//           background: #4caf50;
//         }

//         .spend-controls {
//           margin-top: 0.7rem;
//           display: flex;
//           gap: 0.5rem;
//         }

//         .spend-controls input {
//           flex: 1;
//           padding: 0.4rem;
//           border: 1px solid #ccc;
//           border-radius: 6px;
//           font-size: 0.9rem;
//         }

//         .spend-controls button {
//           padding: 0.4rem 0.8rem;
//           font-size: 0.9rem;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//           background-color: #3f51b5;
//           color: white;
//           transition: background 0.3s;
//         }

//         .spend-controls button:hover {
//           background-color: #2c3e90;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BudgetOverview;










import React, { useState } from 'react';
import Sidebar from './Sidebar';

const categories = [
  { category: 'Accommodation', percentage: 40, spent: 0, description: 'Hotel stays and lodging', date: '2025-06-01' },
  { category: 'Transportation', percentage: 25, spent: 0, description: 'Flights, taxis, and car rentals', date: '2025-06-05' },
  { category: 'Food', percentage: 20, spent: 0, description: 'Meals and dining', date: '2025-06-10' },
  { category: 'Activities', percentage: 15, spent: 0, description: 'Tours and excursions', date: '2025-06-15' },
];

const BudgetOverview = () => {
  const [totalBudget, setTotalBudget] = useState(0);
  const [budgetData, setBudgetData] = useState(categories);
  const [inputValues, setInputValues] = useState({});

  const allocatedData = budgetData.map(item => ({
    ...item,
    amount: (totalBudget * item.percentage) / 100,
  }));

  const totalSpent = allocatedData.reduce((sum, item) => sum + item.spent, 0);
  const totalRemaining = totalBudget - totalSpent;

  const handleInputChange = (index, value) => {
    setInputValues({
      ...inputValues,
      [index]: value,
    });
  };

  const handleSpend = (index) => {
    const value = parseFloat(inputValues[index] || 0);
    if (isNaN(value) || value <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const updatedData = [...budgetData];
    const newSpent = updatedData[index].spent + value;
    if (newSpent <= (totalBudget * updatedData[index].percentage) / 100) {
      updatedData[index].spent = newSpent;
      setBudgetData(updatedData);
      setInputValues({ ...inputValues, [index]: "" }); 
    } else {
      alert("You can't spend more than the allocated budget.");
    }
  };

  return (
    <div className="budget-section">
      <Sidebar />
      <div className="section-header">
        <h2>Budget Overview</h2>
      </div>

      <div className="total-budget-input">
        <label>Enter Total Budget: </label>
        <input
          type="number"
          value={totalBudget}
          onChange={(e) => setTotalBudget(Number(e.target.value))}
          placeholder="Enter total budget"
        />
      </div>

      <div className="budget-summary">
        <div className="budget-item">
          <span>Total Budget</span>
          <span className="budget-amount">${totalBudget}</span>
        </div>
        <div className="budget-item">
          <span>Spent</span>
          <span className="budget-amount">${totalSpent}</span>
        </div>
        <div className="budget-item">
          <span>Remaining</span>
          <span className="budget-amount">${totalRemaining}</span>
        </div>
      </div>

      <div className="budget-categories">
        {allocatedData.map((category, index) => (
          <div className="budget-category" key={index}>
            <div className="category-info">
              <span>{category.category}</span>
              <span>${category.spent} / ${category.amount}</span>
            </div>
            <div className="category-description">
              <span>Description: {category.description}</span>
              <span>Date: {category.date}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${(category.spent / category.amount) * 100}%` }}
              ></div>
            </div>
            <div className="spend-controls">
              <input
                type="number"
                placeholder="Enter amount"
                value={inputValues[index] || ""}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
              <button onClick={() => handleSpend(index)}>Spend</button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .budget-section {
          background: #fff;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin: 40px auto;
          max-width: 800px;
          font-family: sans-serif;
          margin-left: 320px;
        }

        .section-header h2 {
          margin-bottom: 1rem;
          text-align: center;
        }

        .total-budget-input {
          margin-bottom: 1.5rem;
        }

        .total-budget-input input {
          padding: 0.5rem;
          font-size: 1rem;
          border-radius: 6px;
          border: 1px solid #ccc;
          margin-left: 10px;
        }

        .budget-summary {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .budget-item {
          text-align: center;
          flex: 1;
        }

        .budget-amount {
          font-weight: bold;
          font-size: 1.2rem;
          display: block;
          margin-top: 0.3rem;
        }

        .budget-categories {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .budget-category {
          background: #f9f9f9;
          padding: 1rem;
          border-radius: 8px;
        }

        .category-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .category-description {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #555;
        }

        .progress-bar {
          height: 8px;
          background: #ddd;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress {
          height: 100%;
          background: #4caf50;
        }

        .spend-controls {
          margin-top: 0.7rem;
          display: flex;
          gap: 0.5rem;
        }

        .spend-controls input {
          flex: 1;
          padding: 0.4rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 0.9rem;
        }

        .spend-controls button {
          padding: 0.4rem 0.8rem;
          font-size: 0.9rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          background-color: #3f51b5;
          color: white;
          transition: background 0.3s;
        }

        .spend-controls button:hover {
          background-color: #2c3e90;
        }

        /* ---------------- RESPONSIVE STYLES ---------------- */
        @media (max-width: 768px) {
          .budget-section {
            margin-left: auto;
            margin-right: auto;
            width: 90%;
            padding: 1rem;
          }

          .budget-summary {
            flex-direction: column;
            gap: 0.8rem;
          }

          .category-info {
            flex-direction: column;
            align-items: flex-start;
          }

          .spend-controls {
            flex-direction: column;
          }

          .spend-controls button {
            width: 100%;
          }

          .total-budget-input input {
            width: 100%;
            margin-left: 0;
            margin-top: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .budget-section {
            padding: 0.8rem;
          }

          .budget-amount {
            font-size: 1rem;
          }

          .spend-controls input {
            font-size: 0.85rem;
            padding: 0.3rem;
          }

          .spend-controls button {
            font-size: 0.85rem;
            padding: 0.3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BudgetOverview;
