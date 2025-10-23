import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [donations, setDonations] = useState([]);
  const [form, setForm] = useState({
    name: "",
    amount: "",
    message: "",
    location: "",
    contact: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ Fetch donations from backend
  const fetchDonations = async () => {
    try {
      setError("");
      const res = await axios.get("/api/donations");
      console.log("Fetched donations:", res.data);
      const data = Array.isArray(res.data)
        ? res.data
        : res.data?.donations || [];
      setDonations(data);
    } catch (err) {
      console.error("Error fetching donations:", err);
      setError("Failed to load donations.");
      setDonations([]);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.amount) {
      setError("Name and amount are required.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await axios.post("/api/donations", {
        name: form.name,
        amount: Number(form.amount),
        message: form.message,
        location: form.location,
        contact: form.contact,
      });

      setForm({
        name: "",
        amount: "",
        message: "",
        location: "",
        contact: "",
      });

      await fetchDonations();
      setSuccess("Donation submitted successfully!");
    } catch (err) {
      console.error("Error submitting donation:", err);
      setError("Failed to submit donation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        FoodAid Donation Portal
      </h1>

      {/* ✅ Donation Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-4 rounded shadow"
      >
        {["name", "amount", "message", "location", "contact"].map((field) => (
          <input
            key={field}
            type={field === "amount" ? "number" : "text"}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={(e) =>
              setForm({
                ...form,
                [field]: e.target.value,
              })
            }
            className="w-full mb-3 p-2 border rounded"
            required={["name", "amount"].includes(field)}
          />
        ))}
        <button
          disabled={loading}
          className={`${
            loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
          } text-white px-4 py-2 rounded w-full`}
        >
          {loading ? "Submitting..." : "Donate"}
        </button>

        {error && <p className="text-red-600 mt-2">{error}</p>}
        {success && <p className="text-green-600 mt-2">{success}</p>}
      </form>

      {/* ✅ Donation List */}
      <div className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Recent Donations</h2>
        {donations.length > 0 ? (
          <ul className="grid gap-4">
            {donations.map((d) => (
              <li key={d._id} className="bg-white p-4 rounded shadow">
                <p>
                  <strong>{d.foodType || d.message}</strong> -{" "}
                  {d.amount || d.quantity} units
                </p>
                <p>
                  By: {d.name} | Location: {d.location}
                </p>
                <p>Contact: {d.contact}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No donations available yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;

