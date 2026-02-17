import "@/styles/globals.css";

export const metadata = {
  title: "PDF-Ready Spend",
  description: "Deterministic infrastructure licensing checkout"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
