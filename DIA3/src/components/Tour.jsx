import React from "react";
import Map from "./Map";
import { API_URL } from "@/config";

const getDepartments = async () => {
  const response = await fetch(`${API_URL}/Department`);
  const data = await response.json();
  return data;
};

const departments = await getDepartments();

export default function Tour() {
  return (
    <div className="w-full h-screen heroPattern flex justify-center items-center bg-red-500 overflow-hidden">
      {departments.length > 0 && <Map departments={departments} />}
    </div>
  );
}
