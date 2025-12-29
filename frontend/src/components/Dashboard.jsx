import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./street_water_usage.json";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfessionalFooter from "./footer";
import ProfessionalNavbar1 from "./navbar2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { householdId } = useParams();
  const [householdData, setHouseholdData] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [timePeriod, setTimePeriod] = useState("weekly"); // 'weekly', 'monthly', 'yearly'
  const [todayData, setTodayData] = useState(null);
  const [view, setView] = useState("analytics"); // 'analytics' or 'complaints'
  const [feedback, setFeedback] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [excessCost, setExcessCost] = useState(0); // New state for cost

  useEffect(() => {
    const household = data.households.find(
      (house) => house.household_id === parseInt(householdId)
    );
    setHouseholdData(household);

    if (household) {
      const threshold = household.num_members * 110;

      // Simulate today as a random day
      const todayIndex = household.daily_usage.length - 1;
      const todayUsage = household.daily_usage[todayIndex];
      setTodayData(todayUsage);

      // Check if today's usage exceeds the threshold
      if (todayUsage.total_usage_liters > threshold) {
        const exceededBy = todayUsage.total_usage_liters - threshold;
        const cost =
          exceededBy <= 50 ? exceededBy * 10 : exceededBy * 20;

        setAlertMessage(
          `Alert: Today's water usage exceeded the threshold by ${exceededBy} liters.`
        );
        setExcessCost(cost); // Set the calculated cost
      }
    }
  }, [householdId]);

  const handleSubmitFeedback = () => {
    setFeedbackSubmitted(true);
    setTimeout(() => setFeedbackSubmitted(false), 3000); // Hide message after 3 seconds
    setFeedback("");
  };

  if (!householdData) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div className="text-center">
          <div
            className="spinner-border text-primary mb-3"
            role="status"
          ></div>
          <p className="h5 text-muted">Loading data for Household ID {householdId}...</p>
        </div>
      </div>
    );
  }

  const dailyUsage = householdData.daily_usage;
  const numMembers = householdData.num_members;
  const warningThreshold = numMembers * 110;

  const getWeeklyData = () => dailyUsage.slice(-7);
  const getMonthlyData = () => dailyUsage.slice(-30);

  const getYearlyData = () => {
    const months = Array.from({ length: 12 }, (_, i) => ({
      month: new Date(2022, i).toLocaleString("default", { month: "long" }),
      total_usage_liters: Math.floor(Math.random() * 3000 + 1000),
    }));
    return months;
  };

  const getChartData = () => {
    const chartData =
      timePeriod === "weekly"
        ? getWeeklyData()
        : timePeriod === "monthly"
        ? getMonthlyData()
        : getYearlyData();

    const labels =
      timePeriod === "yearly"
        ? chartData.map((monthData) => monthData.month)
        : chartData.map((day) => day.date);

    const datasets = [
      {
        label: "Usage Below Threshold",
        data: chartData.map((day) =>
          Math.min(day.total_usage_liters, warningThreshold)
        ),
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderRadius: 8,
      },
      {
        label: "Exceeded Usage",
        data: chartData.map((day) =>
          day.total_usage_liters > warningThreshold
            ? day.total_usage_liters - warningThreshold
            : 0
        ),
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        borderRadius: 8,
      },
    ];

    return { labels, datasets };
  };

  return (
    <div>
      {/* Navbar */}
      <ProfessionalNavbar1 />

      <div className="container py-5">
        {/* View Toggle Buttons */}
        <div className="text-center mb-5">
          <button
            className={`btn btn-${
              view === "analytics" ? "primary" : "outline-primary"
            } mx-2`}
            onClick={() => setView("analytics")}
          >
            Analytics
          </button>
          <button
            className={`btn btn-${
              view === "complaints" ? "primary" : "outline-primary"
            } mx-2`}
            onClick={() => setView("complaints")}
          >
            Complaints
          </button>
        </div>

        {view === "analytics" ? (
          <>
            {/* Alert Section */}
            {alertMessage && (
              <>
                <div className="alert alert-danger text-center" role="alert">
                  {alertMessage}
                </div>
                {/* Cost Box */}
                <div className="card shadow-sm p-4 mb-4">
                  <h5 className="card-title text-center text-danger">
                    Estimated Excess Cost
                  </h5>
                  <p className="card-text text-center display-6 text-danger">
                    ₹{excessCost}
                  </p>
                </div>
              </>
            )}

            {/* Analytics Content */}
            <div className="text-center mb-5">
              <h1 className="display-4 text-primary fw-bold">
                Hi, Household ID: {householdId}
              </h1>
              <p className="lead text-muted">Welcome to your water usage dashboard.</p>
            </div>

            {/* Summary Cards */}
            <div className="row g-4 mb-5">
              <InfoCard title="Household Members" value={numMembers} color="info" />
              <InfoCard
                title="Monthly Total Usage"
                value={`${householdData.monthly_total_liters}L`}
                color="primary"
              />
              <InfoCard
                title="Today’s Usage"
                value={`${todayData?.total_usage_liters || 0}L`}
                color="warning"
              />
              <InfoCard
                title="Threshold Frequency"
                value={`${warningThreshold}L`}
                color="danger"
              />
            </div>

            {/* Time Period Selector */}
            <div className="text-center mb-4">
              <button
                className={`btn btn-${
                  timePeriod === "weekly" ? "primary" : "outline-primary"
                } mx-2`}
                onClick={() => setTimePeriod("weekly")}
              >
                Weekly
              </button>
              <button
                className={`btn btn-${
                  timePeriod === "monthly" ? "primary" : "outline-primary"
                } mx-2`}
                onClick={() => setTimePeriod("monthly")}
              >
                Monthly
              </button>
              <button
                className={`btn btn-${
                  timePeriod === "yearly" ? "primary" : "outline-primary"
                } mx-2`}
                onClick={() => setTimePeriod("yearly")}
              >
                Yearly
              </button>
            </div>

            {/* Bar Chart */}
            <div className="row g-4">
              <div className="col-12">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {timePeriod === "weekly"
                        ? "Last 7 Days Water Usage"
                        : timePeriod === "monthly"
                        ? "Last 30 Days Water Usage"
                        : "Yearly Water Usage"}
                    </h5>
                    <div
                      className="chart-container"
                      style={{ height: "400px" }}
                    >
                      <Bar
                        data={getChartData()}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { display: true },
                          },
                          scales: {
                            x: {
                              ticks: { color: "#6c757d", font: { size: 12 } },
                            },
                            y: {
                              beginAtZero: true,
                              ticks: {
                                stepSize: 50,
                                color: "#6c757d",
                                font: { size: 12 },
                              },
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Complaints View
          <div className="card shadow p-4">
            <h3 className="text-center text-primary fw-bold mb-4">Submit Your Feedback</h3>
            <textarea
              className="form-control mb-3"
              rows="5"
              placeholder="Enter your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <div className="text-center">
              <button
                className="btn btn-success"
                onClick={handleSubmitFeedback}
              >
                Submit
              </button>
            </div>
            {feedbackSubmitted && (
              <div className="alert alert-success mt-3 text-center">
                Feedback submitted successfully!
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <ProfessionalFooter />
    </div>
  );
};

// Info Card Component
const InfoCard = ({ title, value, color }) => (
  <div className="col-md-4">
    <div
      className={`card border-${color} text-${color} h-100 shadow-sm`}
      style={{ minHeight: "150px" }}
    >
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="display-6 fw-bold">{value}</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
