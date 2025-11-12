import { useEffect, useState } from "react";
import axios from "axios";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";

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

  const { getToken } = useAuth(); // ✅ Grab Clerk auth token

  // ✅ Fetch donations from backend
  const fetchDonations = async () => {
    try {
      setError("");

      // Include token if signed in
      let token;
      try {
        token = await getToken();
      } catch {}

      const res = await axios.get("/api/donations", {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

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

      const token = await getToken(); // ✅ Authenticate
      await axios.post(
        "/api/donations",
        {
          name: form.name,
          amount: Number(form.amount),
          message: form.message,
          location: form.location,
          contact: form.contact,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
      {/* ✅ Header Auth Controls */}
      <header className="flex justify-end mb-6">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <h1 className="text-3xl font-bold text-center mb-6">
        FoodAid Donation Portal
      </h1>

      {/* ✅ Show form only when signed in */}
      <SignedIn>
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
      </SignedIn>

      <SignedOut>
        <p className="text-center text-lg text-gray-700 mt-6">
          Please <SignInButton /> to submit donations.
        </p>
      </SignedOut>

      {/* ✅ Donation List */}
      <div className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Recent Donations</h2>
        {donations.length > 0 ? (
          <ul className="grid gap-4">
            {donations.map((d) => (
              <li key={d._id} className="bg-white p-4 rounded shadow">
                <p>
                  <strong>{d.foodType || d.message}</strong> –{" "}
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
