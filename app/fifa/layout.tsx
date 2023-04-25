export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fifa-view flex justify-center">{children}</div>
    </>
  );
}
