export function Footer() {
  var currentYear = new Date().getFullYear();
  return (
    <div className="footer-container">
      <h4>
        LEGO-Cars-Gluay 🚗 &copy; {currentYear}
        <span> - Gluay S. Wang</span>
      </h4>
    </div>
  );
}
