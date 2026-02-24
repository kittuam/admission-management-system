function SeatAllocation() {
  return (
    <div className="card">
      <h2>Seat Allocation</h2>

      <select>
        <option>Select Department</option>
        <option>Computer Science</option>
        <option>Commerce</option>
        <option>Science</option>
      </select>

      <select>
        <option>Select Seat Type</option>
        <option>Merit</option>
        <option>Management</option>
      </select>

      <button>Allocate Seat</button>
    </div>
  );
}

export default SeatAllocation;