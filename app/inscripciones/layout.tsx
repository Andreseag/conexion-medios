export const metadata = {
  title: "Conexión medios | Inscripciones",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fifa-view flex justify-center mb-4">{children}</div>
    </>
  );
}
