import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-green flex items-center justify-center">
                <span className="text-white font-bold text-sm">PD</span>
              </div>
              <span className="font-playfair font-bold text-lg text-white">
                Dr. Priyanka <span className="text-sage-green">Dubey</span>
              </span>
            </div>
            <p className="text-sm text-dark-400 leading-relaxed">
              Disease Reversal Through Lifestyle. 16+ years of clinical
              nutrition expertise transforming lives across India.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="space-y-2 font-inter">
              {['About', 'Expertise', 'Conditions', 'Framework', 'Results', 'Services'].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm text-dark-400 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-gray-400 font-inter">
              <p>
                <span className="text-sage-green">Phone:</span> 82238-00785
              </p>
              <p>
                <span className="text-sage-green">Email:</span>{' '}
                contact@drpriyankadubey.com
              </p>
              <p>
                <span className="text-sage-green">Location:</span> Mumbai, India
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-400">
            &copy; {new Date().getFullYear()} Dr. Priyanka Dubey. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-gray-400 font-inter">
            Built with <Heart size={12} className="text-primary" /> for better
            health
          </p>
        </div>
      </div>
    </footer>
  );
}
