import './globals.css';
import Header from './header/page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <div className="building-view">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
