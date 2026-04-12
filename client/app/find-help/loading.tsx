export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-40 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="h-10 w-2/3 bg-gray-200 rounded animate-pulse mb-6" />
        <div className="h-14 bg-gray-200 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
