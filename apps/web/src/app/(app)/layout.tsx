import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WalletProvider } from "@/context/WalletProvider";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WalletProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </WalletProvider>
  );
}
