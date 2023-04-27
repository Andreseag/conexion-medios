import "./globals.css";
import Header from "./header/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          src="//static.filestackapi.com/filestack-js/3.x.x/filestack.min.js"
          defer
        ></script>
      </head>
      <body>
        <Header />
        <div className="building-view">{children}</div>
      </body>
    </html>
  );
}
