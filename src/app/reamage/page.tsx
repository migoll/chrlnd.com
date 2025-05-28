export default function ReamagePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Reamage</h1>
      <p className="text-lg text-neutral-500 mb-6 max-w-xl">
        Drag-and-drop image compressor for Windows. No install needed.
      </p>
      <a
        href="/reamage/Reamage.zip"
        download
        className="bg-white text-black border border-blue-600 hover:bg-blue-600 hover:text-white transition px-6 py-3 rounded text-lg"
      >
        Download Reamage (.zip)
      </a>
    </main>
  );
}
