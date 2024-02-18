"use client";
import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DoctorsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [csvData, setCsvData] = useState<any[]>([]);

  useEffect(() => {
    var patient = []
    patient.push({
        "patient_id": Math.random(),
        "first_name": searchParams.get("first_name"),
  "last_name": searchParams.get("last_name"),
  "date_of_birth": searchParams.get("date_of_birth"),
  "location": searchParams.get("location"),
  "language_preference": searchParams.get("language_preference"),
  "Insurance_plan": searchParams.get("Insurance_plan"),
  "sex": searchParams.get("sex"),
  "ethnicity": searchParams.get("ethnicity"),
  "doctors_gender_preference": searchParams.get("doctors_gender_preference"),
  "location_radius_preference": searchParams.get("location_radius_preference"),
  "consultation_location": searchParams.get("consultation_location"),
  "problem": searchParams.get("problem"),
  "budget_max": searchParams.get("budget_max"),
  "communication_preference": searchParams.get("communication_preference"),
    })
    if ("http://localhost:5001/csv") {
        fetch("http://localhost:5001/csv")
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Network response was not ok, status: ${response.status}`);
            }
            return response.text();
          })
          .then((text) => {
            if (text) {
              const rows = text.split("\n").filter(Boolean);
              const headers = rows[0].split(",");
  
              const jsonData = rows.slice(1).map((row) => {
                const values = row.split(",");
                return headers.reduce((object: any, header: string, index: number) => {
                  object[header.trim()] = values[index].trim();
                  return object;
                }, {});
              });
  
              setCsvData(jsonData);
            } else {
              console.error('No CSV text to convert');
            }
          })
          .catch((error) => console.error('Error fetching CSV:', error));
      }
  }, [searchParams]);
  // This could be fetched from an API or database
  const doctors = [
    {
      first_name: "dsfhg",
      last_name: "dsjghf",
      speciality: "dfsghj",
      location: "Brigton",
      cost_max: 300,
    },
  ];

  return (
    <Layout title="Doctors">
      <div className="page-container">
        <h1 className="text-4xl font-bold text-center py-8">Primary Care Recommendation</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {csvData.map((doctor, index) => (
            <Card
              key={index}
              index={index}
              doctorName={`${doctor.first_name} ${doctor.last_name}`}
              specialty={doctor.speciality}
              location={doctor.location}
              costMax={doctor.cost_max}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DoctorsPage;
