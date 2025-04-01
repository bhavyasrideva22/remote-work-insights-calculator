
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Remote Work Insights</h3>
            <p className="text-sm text-primary-foreground/80">
              Empowering businesses to make data-driven decisions about remote work strategies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white">Case Studies</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white">Remote Work Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">support@remoteworkinsights.com</li>
              <li className="text-primary-foreground/80">+91 1234567890</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Remote Work Insights. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
