
function PersonalInfo() {
  return (
    <div className="personal-info">
      <h1>Personal info</h1>

     <p className="description">
  Please provide your name, email address, and phone <br />
  number.
</p>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Stephen King"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          placeholder="e.g. +1 234 567 890"
        />
      </div>

      <div className="button-container">
        <button type="button">Next Step</button>
      </div>
    </div>
  );
}

export default PersonalInfo;