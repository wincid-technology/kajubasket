import { useSearchParams } from "next/navigation";

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error"); // Get the error code

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Authentication Error</h1>
      <p className="mt-4 text-gray-600">
        {error ? `Error: ${error}` : "An unknown error occurred. Please try again."}
      </p>
    </div>
  );
}
