import ReduxProvider from "@/components/ReduxProvider";
import SessionProviderCustom from "@/components/SessionProviderCustom";
import "@/styles/globals.css";

export const metadata = {
  title: "NEXT AUTH REDUX",
  description: "My App Description",
  keywords: "my,app,keywords",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-orange-300">
        <SessionProviderCustom>
          <ReduxProvider>{children}</ReduxProvider>
        </SessionProviderCustom>
      </body>
    </html>
  );
}
