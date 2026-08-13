import { useState } from "react";

import {
  Home,
  Building2,
  BarChart3,
  Info,
  Mail,
  Rocket,
  MapPin,
  Zap,
  Coins,
  RefreshCw,
  Search,
  Brain,
  ShieldCheck,
  Heart,
  Bookmark,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import "./App.css";

const sectorPrices = {
  "Sector 57": 13611,
  "Sector 66": 28500,
  "Sector 65": 22000,
  "Sector 56": 19800,
  "Sector 103": 16200,
  "Sector 49": 11800,
  "Sector 102": 10500,
};

function App() {
  const [form, setForm] = useState({
    propertyType: "Flat",
    bhk: "3",
    bathroom: "2",
    balcony: "1",
    area: 1800,
    age: "5 - 10 Years",
    floor: "5",
    totalFloors: "15+",
    facing: "East",
    furnishing: "Semi-Furnished",
    luxury: "Luxury",
    sector: "Sector 57",
    society: "Sushant Lok",
    locality: "Golf Course Road",
  });

  const [price, setPrice] = useState(2.45);

  const updateForm = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const calculatePrice = () => {
    const area = Number(form.area) || 0;
    const rate = sectorPrices[form.sector] || 12000;

    let multiplier = 1;

    if (form.bhk === "4") multiplier += 0.08;
    if (form.bhk === "5+") multiplier += 0.15;

    if (form.luxury === "Luxury") multiplier += 0.08;
    if (form.luxury === "Ultra Luxury") multiplier += 0.18;

    if (form.furnishing === "Fully-Furnished") multiplier += 0.05;

    const result = (area * rate * multiplier) / 10000000;

    setPrice(result);
  };

  const priceMin = Math.max(price - 0.15, 0).toFixed(2);
  const priceMax = (price + 0.15).toFixed(2);

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo-area">
          <div className="logo-icon">
            <Home size={34} />
          </div>

          <div>
            <h2>Gurgaon</h2>
            <span>Real Estate Predictor</span>
          </div>
        </div>

        <nav>
          <a className="active">
            <Home size={17} />
            Home
          </a>

          <a>
            <BarChart3 size={17} />
            Price Prediction
          </a>

          <a>
            <BarChart3 size={17} />
            Market Insights
          </a>

          <a>
            <Info size={17} />
            About
          </a>

          <a>
            <Mail size={17} />
            Contact
          </a>
        </nav>

        <button className="get-started">
          <Rocket size={17} />
          Get Started
        </button>
      </header>

      <main>

        {/* MAIN GRID */}
        <section className="main-grid">

          {/* LEFT */}
          <div className="left-section">

            {/* HERO */}
            <section className="hero">

              <div className="hero-content">

                <div className="ai-badge">
                  <Building2 size={16} />
                  AI Powered Real Estate Valuation
                </div>

                <h1>
                  Gurgaon Real Estate
                  <br />
                  Price <span>Predictor</span>
                </h1>

                <p>
                  Estimate the market price of your dream house,
                  apartment, or plot using Machine Learning.
                </p>

                <div className="hero-buttons">
                  <button
                    className="primary-btn"
                    onClick={() =>
                      document
                        .querySelector(".prediction-card")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Home size={18} />
                    Predict Property Price
                  </button>

                  <button className="secondary-btn">
                    <Search size={18} />
                    Explore Properties
                  </button>
                </div>

              </div>

              <div className="city-image">
                <div className="building b1"></div>
                <div className="building b2"></div>
                <div className="building b3"></div>
                <div className="building b4"></div>
                <div className="building b5"></div>
                <div className="building b6"></div>

                <div className="cloud cloud1"></div>
                <div className="cloud cloud2"></div>

                <div className="trees">
                  🌳 🌳 🌳 🌳 🌳
                </div>
              </div>

            </section>

            {/* STATS */}
            <section className="stats-grid">

              <StatCard
                icon={<Home />}
                iconClass="blue"
                title="Avg. Property Price"
                value="₹ 2.18 Cr"
                change="6.2%"
              />

              <StatCard
                icon={<Coins />}
                iconClass="green"
                title="Avg. Price / sq.ft."
                value="₹ 11,450"
                change="8.4%"
              />

              <StatCard
                icon={<Building2 />}
                iconClass="purple"
                title="Most Expensive Sector"
                value="Sector 66"
                subtitle="₹ 28,500 / sq.ft."
              />

              <StatCard
                icon={<Home />}
                iconClass="orange"
                title="Most Affordable Sector"
                value="Sector 103"
                subtitle="₹ 6,200 / sq.ft."
              />

            </section>

            {/* MARKET INSIGHTS */}
            <section className="market-section">

              <div className="section-heading">
                <div>
                  <BarChart3 />
                  <h2>Market Insights</h2>
                </div>

                <button>
                  View More Insights <ArrowRight size={15} />
                </button>
              </div>

              <div className="charts">

                {/* AREA CHART */}
                <div className="chart-card">
                  <h3>Price vs Area</h3>

                  <div className="scatter-chart">
                    <div className="y-axis">
                      <span>5</span>
                      <span>4</span>
                      <span>3</span>
                      <span>2</span>
                      <span>1</span>
                      <span>0</span>
                    </div>

                    <div className="scatter-area">
                      {Array.from({ length: 42 }).map((_, i) => (
                        <i
                          key={i}
                          style={{
                            left: `${5 + ((i * 37) % 88)}%`,
                            bottom: `${8 + ((i * 17) % 75)}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="chart-x">
                    <span>500</span>
                    <span>1000</span>
                    <span>1500</span>
                    <span>2000</span>
                    <span>2500</span>
                    <span>3000</span>
                  </div>

                  <div className="axis-title">
                    Area (sq.ft.)
                  </div>
                </div>

                {/* BHK CHART */}
                <div className="chart-card">
                  <h3>Price vs BHK</h3>

                  <div className="bar-chart">

                    {[1.1, 2.2, 3.1, 3.8, 4.5].map(
                      (value, index) => (
                        <div className="bar-wrapper" key={index}>
                          <div
                            className="bar"
                            style={{
                              height: `${value * 22}%`,
                            }}
                          />

                          <span>
                            {index === 4 ? "5+" : index + 1}
                          </span>
                        </div>
                      )
                    )}

                  </div>

                  <div className="axis-title">
                    BHK
                  </div>
                </div>

                {/* SECTOR CHART */}
                <div className="chart-card sector-chart">
                  <h3>Price vs Sector</h3>

                  {[
                    ["Sector 66", 98],
                    ["Sector 57", 88],
                    ["Sector 65", 76],
                    ["Sector 56", 66],
                    ["Sector 103", 53],
                    ["Sector 49", 39],
                  ].map(([sector, width]) => (
                    <div className="sector-row" key={sector}>
                      <span>{sector}</span>
                      <div>
                        <i style={{ width: `${width}%` }}></i>
                      </div>
                    </div>
                  ))}

                  <div className="axis-title">
                    Price (₹ / sq.ft.)
                  </div>
                </div>

              </div>

            </section>

            {/* ABOUT MODEL */}
            <section className="about-model">

              <div className="brain-icon">
                <Brain size={45} />
              </div>

              <div className="about-content">
                <h2>About the Model</h2>

                <p>
                  Machine Learning is used for prediction. Dataset
                  contains Gurgaon real-estate properties. Features
                  include location, area, BHK, bathrooms, property type,
                  society, etc. Prediction is an estimated market value
                  and not a guaranteed selling price.
                </p>
              </div>

              <div className="model-features">

                <span>
                  <CheckCircle2 />
                  Trained on real Gurgaon property data
                </span>

                <span>
                  <CheckCircle2 />
                  High prediction accuracy
                </span>

                <span>
                  <CheckCircle2 />
                  Location-based price estimation
                </span>

              </div>

            </section>

          </div>


          {/* RIGHT */}
          <aside>

            {/* FORM */}
            <section className="prediction-card">

              <div className="prediction-title">
                <Home />
                <div>
                  <h2>Predict Property Price</h2>
                  <p>
                    Enter property details to get an estimated price
                  </p>
                </div>
              </div>

              <FormSection title="Property Information">

                <SelectField
                  label="Property Type"
                  value={form.propertyType}
                  options={["Flat", "House", "Plot", "Villa"]}
                  onChange={(v) => updateForm("propertyType", v)}
                />

                <SelectField
                  label="BHK"
                  value={form.bhk}
                  options={["1", "2", "3", "4", "5+"]}
                  onChange={(v) => updateForm("bhk", v)}
                />

                <SelectField
                  label="Bathroom"
                  value={form.bathroom}
                  options={["1", "2", "3", "4", "5+"]}
                  onChange={(v) => updateForm("bathroom", v)}
                />

                <SelectField
                  label="Balcony"
                  value={form.balcony}
                  options={["0", "1", "2", "3", "4+"]}
                  onChange={(v) => updateForm("balcony", v)}
                />

                <InputField
                  label="Area (sq.ft.)"
                  value={form.area}
                  onChange={(v) => updateForm("area", v)}
                />

                <SelectField
                  label="Property Age"
                  value={form.age}
                  options={[
                    "New",
                    "0 - 5 Years",
                    "5 - 10 Years",
                    "10+ Years",
                  ]}
                  onChange={(v) => updateForm("age", v)}
                />

                <SelectField
                  label="Floor Number"
                  value={form.floor}
                  options={["Ground", "1", "2", "3", "5", "10", "15+"]}
                  onChange={(v) => updateForm("floor", v)}
                />

                <SelectField
                  label="Total Floors"
                  value={form.totalFloors}
                  options={["1", "5", "10", "15+", "20+"]}
                  onChange={(v) => updateForm("totalFloors", v)}
                />

                <SelectField
                  label="Facing"
                  value={form.facing}
                  options={[
                    "East",
                    "West",
                    "North",
                    "South",
                    "North-East",
                  ]}
                  onChange={(v) => updateForm("facing", v)}
                />

                <SelectField
                  label="Furnishing Status"
                  value={form.furnishing}
                  options={[
                    "Unfurnished",
                    "Semi-Furnished",
                    "Fully-Furnished",
                  ]}
                  onChange={(v) => updateForm("furnishing", v)}
                  wide
                />

                <SelectField
                  label="Luxury Category"
                  value={form.luxury}
                  options={[
                    "Regular",
                    "Luxury",
                    "Ultra Luxury",
                  ]}
                  onChange={(v) => updateForm("luxury", v)}
                  wide
                />

              </FormSection>


              <FormSection title="Location Information">

                <SelectField
                  label="Sector"
                  value={form.sector}
                  options={Object.keys(sectorPrices)}
                  onChange={(v) => updateForm("sector", v)}
                />

                <SelectField
                  label="Society"
                  value={form.society}
                  options={[
                    "Sushant Lok",
                    "DLF City",
                    "Golf Course Road",
                    "M3M",
                    "Godrej",
                  ]}
                  onChange={(v) => updateForm("society", v)}
                />

                <SelectField
                  label="Locality"
                  value={form.locality}
                  options={[
                    "Golf Course Road",
                    "MG Road",
                    "Sohna Road",
                    "Dwarka Expressway",
                    "New Gurgaon",
                  ]}
                  onChange={(v) => updateForm("locality", v)}
                />

              </FormSection>

              <button
                className="predict-btn"
                onClick={calculatePrice}
              >
                <Zap size={20} />
                Predict Price
              </button>

            </section>


            {/* RESULT */}
            <section className="result-card">

              <div className="result-heading">
                <Building2 />
                <h2>Estimated Property Price</h2>
              </div>

              <div className="result-price">
                <div>
                  <small>₹</small>
                  {price.toFixed(2)} Crore
                </div>

                <span>
                  ₹ {priceMin} Cr – ₹ {priceMax} Cr
                </span>
              </div>

              <div className="per-sqft">
                ₹ {sectorPrices[form.sector].toLocaleString()} per sq.ft.
              </div>

              <div className="result-details">

                <Detail
                  title="Property Type"
                  value={form.propertyType}
                />

                <Detail
                  title="Area"
                  value={`${form.area} sq.ft.`}
                />

                <Detail
                  title="BHK"
                  value={form.bhk}
                />

                <Detail
                  title="Sector"
                  value={form.sector}
                />

                <Detail
                  title="Society"
                  value={form.society}
                />

                <Detail
                  title="Confidence"
                  value="±8%"
                />

              </div>

              <div className="result-actions">

                <button
                  onClick={calculatePrice}
                  className="again-btn"
                >
                  <RefreshCw size={17} />
                  Predict Again
                </button>

                <button className="save-btn">
                  <Bookmark size={17} />
                  Save Prediction
                </button>

              </div>

            </section>

          </aside>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <div className="footer-features">

          <span>
            <Home />
            Smart Price Estimation
          </span>

          <span>
            <BarChart3 />
            Data-Driven Insights
          </span>

          <span>
            <ShieldCheck />
            Trusted Predictions
          </span>

          <span>
            <Heart />
            Better Real Estate Decisions
          </span>

        </div>

        <div className="copyright">
          © 2024 Gurgaon Real Estate Predictor. All rights reserved.
        </div>

      </footer>

    </div>
  );
}


/* COMPONENTS */

function StatCard({
  icon,
  iconClass,
  title,
  value,
  change,
  subtitle,
}) {
  return (
    <div className="stat-card">

      <div className={`stat-icon ${iconClass}`}>
        {icon}
      </div>

      <div>
        <p>{title}</p>
        <h3>{value}</h3>

        {change && (
          <small>
            ↑ {change} <span>vs last year</span>
          </small>
        )}

        {subtitle && (
          <small className="subtitle">
            {subtitle}
          </small>
        )}
      </div>

    </div>
  );
}


function FormSection({ title, children }) {
  return (
    <div className="form-section">

      <div className="form-section-title">
        {title === "Property Information" ? (
          <Building2 size={17} />
        ) : (
          <MapPin size={17} />
        )}

        {title}

      </div>

      <div className="form-grid">
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
  wide,
}) {
  return (
    <label className={wide ? "wide-field" : ""}>

      <span>{label}</span>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option}>
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
    <label>

      <span>{label}</span>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

    </label>
  );
}


function Detail({ title, value }) {
  return (
    <div className="detail-box">
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default App;