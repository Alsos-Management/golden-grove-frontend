import { B, SITE } from "../data";
import { Wordmark } from "./shared";
import { Link } from "../lib/site.jsx";

export default function Footer() {
  return (
    <footer className="site-footer" style={{ background: B.coffeeDark, color: B.dust, padding: "48px 24px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="footer-wordmark" style={{ marginBottom: 32 }}>
          <Wordmark height={48} variant="white" />
        </div>
        <div className="footer-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40, marginBottom: 40,
        }}>
          <div>
            <div className="footer-col-title" style={{ fontSize: 12, fontWeight: 700, color: B.gold, marginBottom: 16,
              letterSpacing: "0.06em", textTransform: "uppercase" }}>Quick Links</div>
            {[
              { label: "About Us", to: "/about" },
              { label: "What to Expect", to: "/about" },
              { label: "FAQ", to: "/faq" },
              { label: "Contact Us", to: "/contact" },
              { label: "Insurance", to: "/insurance" },
            ].map((l, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <Link to={l.to} style={{ color: B.dust, fontSize: 13, textDecoration: "none" }}>
                  {l.label}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <div className="footer-col-title" style={{ fontSize: 12, fontWeight: 700, color: B.gold, marginBottom: 16,
              letterSpacing: "0.06em", textTransform: "uppercase" }}>Programs</div>
            {[
              { label: "Residential Treatment", to: "/programs/residential" },
              { label: "PHP", to: "/programs/php" },
              { label: "Co-Occurring Disorders", to: "/programs/co-occurring" },
              { label: "MAT", to: "/programs/mat" },
            ].map((l, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <Link to={l.to} style={{ color: B.dust, fontSize: 13, textDecoration: "none" }}>
                  {l.label}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <div className="footer-col-title" style={{ fontSize: 12, fontWeight: 700, color: B.gold, marginBottom: 16,
              letterSpacing: "0.06em", textTransform: "uppercase" }}>Resources</div>
            {["Alcohol Addiction", "Opioid Addiction", "Drug Rehab Louisville", "All Resources"].map((l, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <Link to="/resources" style={{ color: B.dust, fontSize: 13, textDecoration: "none" }}>
                  {l}
                </Link>
              </div>
            ))}
          </div>
          <div className="footer-contact-block">
            <div className="footer-col-title" style={{ fontSize: 12, fontWeight: 700, color: B.gold, marginBottom: 16,
              letterSpacing: "0.06em", textTransform: "uppercase" }}>Contact</div>
            <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
              <span style={{ color: B.gold, fontWeight: 600 }}>Address</span><br />
              4418 Malcolm Ave<br />Louisville, KY 40211
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
              <span style={{ color: B.gold, fontWeight: 600 }}>Phone</span><br />
              <a href={`tel:${SITE.phoneTel}`} style={{ color: B.dust, textDecoration: "none" }}>{SITE.phone}</a>
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>
              <span style={{ color: B.gold, fontWeight: 600 }}>Email</span><br />
              <a href={`mailto:${SITE.email}`} style={{ color: B.dust, textDecoration: "none" }}>{SITE.email}</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar" style={{
        borderTop: `1px solid rgba(242,209,125,0.15)`,
        background: "rgba(0,0,0,0.2)", padding: "16px 24px",
      }}>
        <div className="footer-bottom-inner" style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <div>
            <div style={{ fontSize: 12, color: B.dust }}>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
            <div style={{ fontSize: 12, color: B.gold, fontWeight: 500, marginTop: 2 }}>
              Part of the {SITE.parent} family
            </div>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <a
              href="https://alsosbehavioralhealth.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 12, color: B.dust, textDecoration: "none" }}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
