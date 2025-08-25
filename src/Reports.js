import React from "react";
import Side from './Side';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import "./Reports.css";

// Extended data
const data = [
  { month: "Jan", bookings: 30, users: 10, revenue: 3000, cancellations: 2, conversion: 5, profit: 1500 },
  { month: "Feb", bookings: 50, users: 20, revenue: 5000, cancellations: 5, conversion: 10, profit: 2300 },
  { month: "Mar", bookings: 80, users: 35, revenue: 8000, cancellations: 6, conversion: 12, profit: 4000 },
  { month: "Apr", bookings: 65, users: 25, revenue: 6500, cancellations: 4, conversion: 9, profit: 3100 },
  { month: "May", bookings: 90, users: 40, revenue: 9000, cancellations: 7, conversion: 11, profit: 4800 },
  { month: "Jun", bookings: 120, users: 55, revenue: 12000, cancellations: 10, conversion: 13, profit: 6300 },
  { month: "Jul", bookings: 150, users: 70, revenue: 15000, cancellations: 8, conversion: 14, profit: 7700 },
  { month: "Aug", bookings: 110, users: 45, revenue: 11000, cancellations: 6, conversion: 10, profit: 5600 },
  { month: "Sep", bookings: 95, users: 38, revenue: 9500, cancellations: 5, conversion: 11, profit: 4900 },
  { month: "Oct", bookings: 130, users: 60, revenue: 13000, cancellations: 9, conversion: 12, profit: 6800 },
  { month: "Nov", bookings: 170, users: 80, revenue: 17000, cancellations: 12, conversion: 15, profit: 9100 },
  { month: "Dec", bookings: 200, users: 95, revenue: 20000, cancellations: 15, conversion: 16, profit: 10500 },
];

// Totals
const totalBookings = data.reduce((sum, d) => sum + d.bookings, 0);
const totalUsers = data.reduce((sum, d) => sum + d.users, 0);
const totalRevenue = data.reduce((sum, d) => sum + d.revenue, 0);
const totalCancellations = data.reduce((sum, d) => sum + d.cancellations, 0);
const avgConversion = (data.reduce((sum, d) => sum + d.conversion, 0) / data.length).toFixed(1);
const totalProfit = data.reduce((sum, d) => sum + d.profit, 0);

export default function Reports() {
  return (
    <div className="reports-wrapper">
      <Side />
      <div className="reports-card">
        <h2 className="reports-title">📊 Reports Dashboard</h2>

        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="card bookings-card">
            <h3>Total Bookings</h3>
            <p>{totalBookings}</p>
          </div>
          <div className="card users-card">
            <h3>Total Users</h3>
            <p>{totalUsers}</p>
          </div>
          <div className="card revenue-card">
            <h3>Total Revenue</h3>
            <p>₹{totalRevenue.toLocaleString()}</p>
          </div>
          <div className="card cancel-card">
            <h3>Cancellations</h3>
            <p>{totalCancellations}</p>
          </div>
          <div className="card conversion-card">
            <h3>Avg. Conversion</h3>
            <p>{avgConversion}%</p>
          </div>
          <div className="card profit-card">
            <h3>Total Profit</h3>
            <p>₹{totalProfit.toLocaleString()}</p>
          </div>
        </div>

        {/* Chart */}
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(v) => v.toLocaleString('en-IN')} />
              <Legend />
              <Line type="monotone" dataKey="bookings" stroke="#1976d2" strokeWidth={2} />
              <Line type="monotone" dataKey="users" stroke="#2e7d32" strokeWidth={2} />
              <Line type="monotone" dataKey="revenue" stroke="#ff9800" strokeWidth={2} />
              <Line type="monotone" dataKey="cancellations" stroke="#d32f2f" strokeWidth={2} />
              <Line type="monotone" dataKey="conversion" stroke="#9c27b0" strokeWidth={2} />
              <Line type="monotone" dataKey="profit" stroke="#00acc1" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
