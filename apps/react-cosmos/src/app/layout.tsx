import "@nayhoo/ui/style.css";
import { AppProvider } from "./provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ padding: "12px" }}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
