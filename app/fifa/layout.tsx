export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="fifa-view">
        {children}
      </div>
    </>
  )
}
