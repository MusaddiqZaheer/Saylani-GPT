import "./globals.css";

export const metadata = {
  title: "GPT",
  description: "GPT Type LLM Interface",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}