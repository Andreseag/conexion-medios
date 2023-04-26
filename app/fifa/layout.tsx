export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fifa-view flex justify-center mb-6">{children}</div>
    </>
  );
}
