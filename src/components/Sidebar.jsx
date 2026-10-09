
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="step active">
        <div className="step-number">1</div>
        <div className="step-text">
          <span>STEP 1</span>
          <strong>YOUR INFO</strong>
        </div>
      </div>

      <div className="step">
        <div className="step-number">2</div>
        <div className="step-text">
          <span>STEP 2</span>
          <strong>SELECT PLAN</strong>
        </div>
      </div>

      <div className="step">
        <div className="step-number">3</div>
        <div className="step-text">
          <span>STEP 3</span>
          <strong>ADD-ONS</strong>
        </div>
      </div>

      <div className="step">
        <div className="step-number">4</div>
        <div className="step-text">
          <span>STEP 4</span>
          <strong>SUMMARY</strong>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;