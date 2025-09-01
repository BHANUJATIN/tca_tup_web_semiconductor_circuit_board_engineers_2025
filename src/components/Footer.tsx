const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* <h3 className="text-2xl font-bold mb-4">
            <span className="text-primary">TeamUP Tech</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Specialized DFT engineering services for the semiconductor industry. 
            Senior expertise, proven results, flexible engagement.
          </p> */}
          
          <div className="border-border mt-1">
            <p className="text-muted-foreground text-sm">
              © 2024 TeamUP Tech. All rights reserved. | 
              <span className="text-primary"> DFT Engineering Excellence</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;