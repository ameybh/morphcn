import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <ThemeToggle /> */}
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
