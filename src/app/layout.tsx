import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./context/LanguageContext";
import RouteLoader from "./components/RouteLoader";

export const metadata = {
  title: "FessLabs",
  description:
    "Rekomendasi peripheral terbaik untuk kebutuhan gaming & produktivitas by Fess",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground transition-colors duration-200">
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
          <LanguageProvider>
            <RouteLoader />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
