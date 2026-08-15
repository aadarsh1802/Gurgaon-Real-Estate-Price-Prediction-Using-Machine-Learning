import { useState } from "react";
import {Home,Building2,BarChart3,Info,Mail,Rocket,MapPin,Zap,Brain,ShieldCheck,Heart,CheckCircle2,RefreshCw,} from "lucide-react";

const sectors = ['sector 1', 'sector 2', 'new sector 2', 'sector 3', 'sector 4', 'sector 5', 'sector 6', 'sector 7', 'sector 8', 'sector 9a',
   'sector 9', 'sector 10a', 'sector 11', 'sector 12', 'sector 13', 'sector 14', 'sector 15', 'sector 17', 
   'sector 21', 'sector 22', 'sector 23', 'sector 24', 'sector 25', 'sector 26', 'sector 28', 'sector 30',
    'sector 31', 'sector 33', 'sector 36a', 'sector 36', 'sector 37d', 'sector 37c', 'sector 37',
     'sector 38', 'sector 39', 'sector 40', 'sector 41', 'sector 43', 'sector 45', 'sector 46',
      'sector 47', 'sector 48', 'sector 49', 'sector 49 road', 'sector 50', 'sector 51', 'sector 52', 
      'sector 53', 'sector 54', 'sector 55', 'sector 56', 'sector 57', 'sector 58', 'sector 59', 'sector 60',
       'sector 61', 'sector 62', 'sector 63a', 'sector 63', 'sector 65', 'sector 66', 'sector 67a', 'sector 67',
        'sector 68', 'sector 69', 'sector 70a', 'sector 70', 'sector 71', 'sector 72', 'sector 74', 'sector 76', 
        'sector 77', 'sector 78', 'sector 79', 'sector 80', 'sector 81', 'sector 82', 'sector 82a', 'sector 83', 
        'sector 84', 'sector 85', 'sector 86', 'sector 88a', 'sector 89', 'sector 90', 'sector 91', 'sector 92',
         'sector 93', 'sector 95', 'sector 99a', 'sector 99', 'sector 102', 'sector 103', 'sector 104', 'sector 105',
          'sector 106', 'sector 107', 'sector 108', 'sector 109', 'sector 110', 'sector 111', 'sector 112', 'sector 113', 
          'manesar', 'dwarka expressway', 'gwal pahari', 'new'];


function App() {
  const [form, setForm] = useState({
    property_type: "flat",
    sector: "sector 57",
    bedRoom: 3,
    bathroom: 2,
    balcony: "2",
    additionalRoom: "not_available",
    agePossession: "Ready to Move",
    built_up_area: 1800,
    luxury_category: "middle",
    bhk: 3,
    floor_cat: "middle",
  });

  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateForm = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const predictPrice = async () => {
    setLoading(true);
    setError("");

    const payload = {
      property_type: form.property_type,
      sector: form.sector,
      bedRoom: Number(form.bedRoom),
      bathroom: Number(form.bathroom),
      balcony: form.balcony,
      additionalRoom: form.additionalRoom,
      agePossession: form.agePossession,
      built_up_area: Number(form.built_up_area),
      luxury_category: form.luxury_category,
      bhk: Number(form.bhk),
      floor_cat: form.floor_cat,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", { //http://127.0.0.1:8000
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Prediction failed");
      }

      const data = await response.json();

      // Change this according to your FastAPI response
      setPrice(data.predicted_price);
    } catch (err) {
      console.error(err);
      setError("Unable to get prediction. Check FastAPI server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white to-blue-50 text-[#07163f]">

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 flex h-16.5 items-center justify-between border-b border-[#e4eaf4] bg-white/95 px-5 md:px-9 shadow-[0_2px_15px_rgba(20,60,120,0.06)]">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="text-blue-600">
            <Home size={34} />
          </div>

          <div>
            <h2 className="text-2xl font-bold leading-5">
              Gurgaon
            </h2>

            <span className="text-xs font-semibold">
              Real Estate Predictor
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <a className="flex h-16.5 items-center gap-2 border-b-[3px] border-blue-600 text-sm font-semibold text-blue-600">
            <Home size={17} />
            Home
          </a>

          <a className="flex items-center gap-2 text-sm font-semibold">
            <BarChart3 size={17} />
            Price Prediction
          </a>

          <a className="flex items-center gap-2 text-sm font-semibold">
            <BarChart3 size={17} />
            Market Insights
          </a>

          <a className="flex items-center gap-2 text-sm font-semibold">
            <Info size={17} />
            About
          </a>

          <a className="flex items-center gap-2 text-sm font-semibold">
            <Mail size={17} />
            Contact
          </a>
        </nav>

        <button className="flex items-center gap-2 rounded-lg bg-linear-to-r from-blue-600 to-emerald-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg">
          <Rocket size={17} />
          <span className="hidden sm:block">Get Started</span>
        </button>
      </header>

      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-375 px-3 py-5 md:px-9">

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(430px,1.08fr)]">

          {/* ================= LEFT ================= */}

          <div>

            {/* HERO */}

            <section className="relative min-h-[315px] overflow-hidden rounded-[17px] border border-blue-200 bg-linear-to-r from-blue-50 via-blue-100 to-blue-50">

              <div className="relative z-10 w-full p-6 md:w-[65%] md:p-8">

                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-700">
                  <Building2 size={16} />
                  AI Powered Real Estate Valuation
                </div>

                <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                  Gurgaon Real Estate
                  <br />
                  Price{" "}
                  <span className="text-blue-600">
                    Predictor
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-blue-950">
                  Estimate the market price of your dream house,
                  apartment, or plot using Machine Learning.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">

                  <button
                    onClick={() =>
                      document
                        .getElementById("prediction-form")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        })
                    }
                    className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg"
                  >
                    <Home size={18} />
                    Predict Property Price
                  </button>

                  <button className="flex items-center justify-center gap-2 rounded-lg border border-emerald-600 bg-white px-5 py-2.5 text-xs font-bold text-emerald-700">
                    <MapPin size={18} />
                    Explore Properties
                  </button>

                </div>
              </div>

              {/* Simple city illustration */}

              <div className="absolute right-0 top-0 hidden h-full w-1/2 overflow-hidden bg-gradient-to-b from-blue-200 via-blue-50 to-green-200 md:block">

                <div className="absolute bottom-[25%] left-[10%] h-40 w-14 bg-blue-400 shadow-lg" />

                <div className="absolute bottom-[25%] left-[28%] h-52 w-16 bg-blue-500 shadow-lg" />

                <div className="absolute bottom-[25%] left-[47%] h-36 w-20 bg-blue-400 shadow-lg" />

                <div className="absolute bottom-[25%] left-[65%] h-60 w-16 bg-blue-500 shadow-lg" />

                <div className="absolute bottom-[25%] left-[80%] h-44 w-14 bg-blue-400 shadow-lg" />

                <div className="absolute bottom-0 left-0 h-[30%] w-full rounded-t-[50%] bg-green-400/70" />

                <div className="absolute bottom-[12%] left-[8%] text-3xl">
                  🌳 🌳 🌳
                </div>

              </div>
            </section>

            {/* ================= STATS ================= */}

            <section className="my-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

              <StatCard
                icon={<Home />}
                title="Avg. Property Price"
                value="₹ 2.18 Cr"
                color="blue"
              />

              <StatCard
                icon={<Building2 />}
                title="Avg. Price / sq.ft."
                value="₹ 11,450"
                color="green"
              />

              <StatCard
                icon={<BarChart3 />}
                title="Most Expensive Sector"
                value="Sector 66"
                subtitle="₹ 28,500 / sq.ft."
                color="purple"
              />

              <StatCard
                icon={<Home />}
                title="Most Affordable Sector"
                value="Sector 103"
                subtitle="₹ 6,200 / sq.ft."
                color="orange"
              />

            </section>

            {/* ================= MARKET INSIGHTS ================= */}

            <section className="rounded-2xl border border-[#d9e4f2] bg-white p-5">

              <div className="mb-5 flex items-center justify-between">

                <div className="flex items-center gap-2">
                  <BarChart3 className="text-blue-600" />
                  <h2 className="text-xl font-bold">
                    Market Insights
                  </h2>
                </div>

                <button className="text-xs font-semibold text-blue-600">
                  View More Insights →
                </button>

              </div>

              <div className="grid grid-cols-1 gap-3 xl:grid-cols-3">

                <ChartCard title="Price vs Area">
                  <div className="flex h-40 items-end justify-around border-b border-l border-gray-300">

                    {[40, 65, 50, 80, 55, 90, 70, 45].map(
                      (height, index) => (
                        <span
                          key={index}
                          className="w-1.5 rounded-full bg-blue-500"
                          style={{
                            height: `${height}%`,
                          }}
                        />
                      )
                    )}

                  </div>

                  <p className="mt-2 text-center text-xs font-semibold">
                    Area (sq.ft.)
                  </p>
                </ChartCard>

                <ChartCard title="Price vs BHK">

                  <div className="flex h-40 items-end justify-around border-b border-gray-300 px-5">

                    {[30, 50, 65, 80, 95].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex h-full flex-col items-center justify-end"
                        >
                          <div
                            className="w-7 rounded-t-md bg-gradient-to-b from-emerald-400 to-emerald-600"
                            style={{
                              height: `${height}%`,
                            }}
                          />

                          <span className="mt-1 text-xs">
                            {index === 4
                              ? "5+"
                              : index + 1}
                          </span>
                        </div>
                      )
                    )}

                  </div>

                  <p className="mt-2 text-center text-xs font-semibold">
                    BHK
                  </p>

                </ChartCard>

                <ChartCard title="Price vs Sector">

                  {[
                    ["Sector 66", 98],
                    ["Sector 57", 88],
                    ["Sector 65", 76],
                    ["Sector 56", 66],
                    ["Sector 103", 53],
                    ["Sector 49", 39],
                  ].map(([sector, width]) => (
                    <div
                      key={sector}
                      className="my-3 grid grid-cols-[65px_1fr] items-center gap-2"
                    >
                      <span className="text-[10px]">
                        {sector}
                      </span>

                      <div className="h-2.5 rounded bg-blue-50">
                        <div
                          className="h-full rounded bg-linear-to-r from-blue-400 to-blue-600"
                          style={{
                            width: `${width}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}

                  <p className="mt-3 text-center text-xs font-semibold">
                    Price (₹ / sq.ft.)
                  </p>

                </ChartCard>

              </div>
            </section>

            {/* ================= ABOUT MODEL ================= */}

            <section className="mt-5 flex flex-col gap-5 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-5 md:flex-row md:items-center">

              <Brain
                size={45}
                className="text-blue-600"
              />

              <div className="flex-1">

                <h2 className="text-lg font-bold">
                  About the Model
                </h2>

                <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-600">
                  Machine Learning is used for prediction.
                  The model is trained on Gurgaon real-estate
                  property data. Features include location,
                  area, BHK, bathrooms, property type and
                  other property characteristics.
                </p>

              </div>

              <div className="border-t border-blue-200 pt-3 text-xs font-semibold md:border-l md:border-t-0 md:pl-5 md:pt-0">

                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-600"
                  />
                  Real Gurgaon property data
                </div>

                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-600"
                  />
                  ML based prediction
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-600"
                  />
                  Location-based estimation
                </div>

              </div>

            </section>

          </div>

          {/* ================= RIGHT ================= */}

          <aside
            id="prediction-form"
            className="flex flex-col gap-5"
          >

            {/* ================= FORM ================= */}

            <section className="rounded-[17px] border border-blue-200 bg-white p-5 shadow-[0_8px_25px_rgba(40,90,150,0.04)]">

              <div className="mb-4 flex items-center gap-3">

                <Home
                  size={34}
                  className="text-blue-600"
                />

                <div>
                  <h2 className="text-xl font-bold">
                    Predict Property Price
                  </h2>

                  <p className="mt-1 text-xs text-gray-600">
                    Enter property details to get an estimated
                    price
                  </p>
                </div>

              </div>

              {/* Property Information */}

              <FormSection
                title="Property Information"
                icon={<Building2 size={20} />}
              >

                <SelectField
                  label="Property Type"
                  value={form.property_type}
                  options={[
                    "flat",
                    "house",
                  ]}
                  onChange={(v) =>
                    updateForm("property_type", v)
                  }
                />

                <SelectField
                  label="Sector"
                  value={form.sector}
                  options={sectors}
                  onChange={(v) =>
                    updateForm("sector", v)
                  }
                />

                <InputField
                  label="Bedrooms"
                  value={form.bedRoom}
                  onChange={(v) =>
                    updateForm("bedRoom", v)
                  }
                />

                <InputField
                  label="Bathroom"
                  value={form.bathroom}
                  onChange={(v) =>
                    updateForm("bathroom", v)
                  }
                />

                <SelectField
                  label="Balcony"
                  value={form.balcony}
                  options={[
                    "0",
                    "1",
                    "2",
                    "3",
                    "3+",
                  ]}
                  onChange={(v) =>
                    updateForm("balcony", v)
                  }
                />

                <SelectField
                  label="Additional Room"
                  value={form.additionalRoom}
                  options={[
                    "not_available",
                    "servant room",
                    "study room",
                    "pooja room",
                    "store room",
                    "others",
                  ]}
                  onChange={(v) =>
                    updateForm("additionalRoom", v)
                  }
                />

                <SelectField
                  label="Age / Possession"
                  value={form.agePossession}
                  options={['0-1 Years Old', '1-5 Years Old', 'Under Construction', 'Upcoming',
                           'Ready / Possessed', '10+ Years Old', '5-10 Years Old', 'Unknown']}
                  onChange={(v) =>
                    updateForm("agePossession", v)
                  }
                />

                <InputField
                  label="Built-up Area (sq.ft.)"
                  value={form.built_up_area}
                  onChange={(v) =>
                    updateForm("built_up_area", v)
                  }
                />

                <SelectField
                  label="Luxury Category"
                  value={form.luxury_category}
                  options={['Unfurnished', 'Basic', 'Premium', 'Luxury', 'Semi-Luxury']}
                  onChange={(v) =>
                    updateForm("luxury_category", v)
                  }
                />

                <SelectField
                  label="Floor Category"
                  value={form.floor_cat}
                  options={['higher', 'lower', 'middle']}
                  onChange={(v) =>
                    updateForm("floor_cat", v)
                  }
                />

              </FormSection>

              {/* Predict Button */}

              <button
                onClick={predictPrice}
                disabled={loading}
                className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-sm font-extrabold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Zap size={20} />

                {loading
                  ? "Predicting..."
                  : "Predict Price"}
              </button>

              {error && (
                <p className="mt-3 rounded-lg bg-red-50 p-3 text-center text-xs font-semibold text-red-600">
                  {error}
                </p>
              )}

            </section>

            {/* ================= RESULT ================= */}

            {price !== null && (
              <section className="rounded-[17px] border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5">

                <div className="flex items-center gap-3">

                  <Building2 className="text-emerald-700" />

                  <h2 className="text-lg font-bold">
                    Estimated Property Price
                  </h2>

                </div>

                <div className="mt-4">

                  <div className="text-3xl font-extrabold text-emerald-700">
                    ₹ {Number(price).toFixed(2)} Crore
                  </div>

                  <span className="mt-2 inline-block rounded-lg bg-emerald-100 px-3 py-2 text-xs font-bold text-emerald-700">
                    Estimated ML Prediction
                  </span>

                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">

                  <Detail
                    title="Property Type"
                    value={form.property_type}
                  />

                  <Detail
                    title="Built-up Area"
                    value={`${form.built_up_area} sq.ft.`}
                  />

                  <Detail
                    title="BHK"
                    value={form.bhk}
                  />

                  <Detail
                    title="Bedrooms"
                    value={form.bedRoom}
                  />

                  <Detail
                    title="Sector"
                    value={form.sector}
                  />

                  <Detail
                    title="Luxury"
                    value={form.luxury_category}
                  />

                </div>

                <button
                  onClick={predictPrice}
                  className="mt-4 flex h-9 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-xs font-bold text-white"
                >
                  <RefreshCw size={16} />
                  Predict Again
                </button>

              </section>
            )}

          </aside>

        </div>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="mt-5 flex flex-col gap-5 border-t border-gray-200 bg-white px-5 py-5 md:flex-row md:items-center md:justify-between md:px-9">

        <div className="flex flex-wrap gap-5 text-xs font-semibold">

          <span className="flex items-center gap-2">
            <Home size={18} className="text-blue-600" />
            Smart Price Estimation
          </span>

          <span className="flex items-center gap-2">
            <BarChart3 size={18} className="text-blue-600" />
            Data-Driven Insights
          </span>

          <span className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-blue-600" />
            Trusted Predictions
          </span>

          <span className="flex items-center gap-2">
            <Heart size={18} className="text-blue-600" />
            Better Real Estate Decisions
          </span>

        </div>

        <div className="text-xs">
          © 2026 Gurgaon Real Estate Predictor.
          All rights reserved.
        </div>

      </footer>
    </div>
  );
}

/* ================================================= */
/* COMPONENTS */
/* ================================================= */

function FormSection({ title, icon, children }) {
  return (
    <div className="mt-4">

      <div className="flex min-h-8 items-center gap-2 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 px-3 py-1.5 text-xs font-extrabold text-blue-900">
        {icon}
        {title}
      </div>

      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {children}
      </div>

    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}) {
  return (
    <label className="flex flex-col gap-1.5">

      <span className="text-[11px] font-semibold text-[#14224d]">
        {label}
      </span>

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="h-9 rounded-lg border border-[#cbd7e8] bg-white px-2.5 text-xs text-[#111c3f] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

    </label>
  );
}

function InputField({
  label,
  value,
  onChange,
}) {
  return (
    <label className="flex flex-col gap-1.5">

      <span className="text-[11px] font-semibold text-[#14224d]">
        {label}
      </span>

      <input
        type="number"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="h-9 rounded-lg border border-[#cbd7e8] bg-white px-2.5 text-xs text-[#111c3f] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />

    </label>
  );
}

function Detail({ title, value }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white/80 px-3 py-2">

      <span className="block text-[9px] text-gray-500">
        {title}
      </span>

      <strong className="mt-0.5 block text-xs">
        {value}
      </strong>

    </div>
  );
}

function StatCard({
  icon,
  title,
  value,
  subtitle,
  color,
}) {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-emerald-50 text-emerald-600",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-50 text-orange-600",
  };

  return (
    <div className="flex min-h-24 items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">

      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${colors[color]}`}
      >
        {icon}
      </div>

      <div>
        <p className="text-[11px] text-slate-600">
          {title}
        </p>

        <h3 className="mt-1 text-lg font-bold">
          {value}
        </h3>

        {subtitle && (
          <small className="mt-1 block text-[10px] font-semibold text-slate-600">
            {subtitle}
          </small>
        )}
      </div>

    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="min-h-[200px] rounded-xl border border-gray-200 bg-white p-3">

      <h3 className="mb-3 text-xs font-bold">
        {title}
      </h3>

      {children}

    </div>
  );
}

export default App;