import { API_URL } from "@/config";

export async function GET(request) {
  const response = await fetch(`${API_URL}/Department`);
  const data = await response.json();

  return Response.json({ data });
}
