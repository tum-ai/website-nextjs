import { inter } from "@styles/fonts";
import { Providers } from "./providers";
import "../styles/globals.css";
import { Header } from "@components/Header";
import Footer from "@components/Footer";
import GoogleAnalytics from "@components/GoogleAnalytics";
import CookieBanner from "@components/CookieBanner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-X80DYJS6SW" />
      <body>
        <Providers>
          <div className={inter.className}>
            <Header />
            <main>
              {children}
              <CookieBanner />
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
