import { Roboto } from "next/font/google";
import Header from "../components/organism/Header/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function SectionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Header />
        <main className="root">{children}</main>
      </body>
    </html>
  );
}
