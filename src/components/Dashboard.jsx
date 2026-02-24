function Dashboard() {
  return (
    <div className="card">
      <h2>Dashboard</h2>

      <div className="stats">
        <div className="stat-box">
          <h3>120</h3>
          <p>Total Applications</p>
        </div>
        <div className="stat-box">
          <h3>60</h3>
          <p>Approved</p>
        </div>
        <div className="stat-box">
          <h3>20</h3>
          <p>Pending</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;