import "./globals.css";

export const metadata = {
  title: "TechPulse India — AI-Powered Tech News & Reviews",
  description: "Live technology news, smartphone reviews, comparisons, specifications and buying guides.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
