import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      </head>
      <body>
        <div className="building-view">
          {children}
        </div>
      </body>
    </html>
  )
}
