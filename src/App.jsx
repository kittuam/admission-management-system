import ApplicantForm from "./components/ApplicantForm";
import SeatAllocation from "./components/SeatAllocation";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="background">
      <div className="app">
        <h1 className="title">Admission Management System</h1>

        <ApplicantForm />
        <SeatAllocation />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;