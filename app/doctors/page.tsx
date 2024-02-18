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
    var patient = {
      patient_id: 2,
      first_name: searchParams.get("first_name"),
      last_name: searchParams.get("last_name"),
      date_of_birth: searchParams.get("date_of_birth"),
      location: searchParams.get("location"),
      language_preference: searchParams.get("language_preference"),
      Insurance_plan: searchParams.get("Insurance_plan"),
      sex: searchParams.get("sex"),
      ethnicity: searchParams.get("ethnicity"),
      doctors_gender_preference: searchParams.get("doctors_gender_preference"),
      location_radius_preference: searchParams.get(
        "location_radius_preference"
      ),
      consultation_location: searchParams.get("consultation_location"),
      problem: searchParams.get("problem"),
      budget_max: searchParams.get("budget_max"),
      communication_preference: searchParams.get("communication_preference"),
    };
    fetch("http://localhost:5000/recommend-doctors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patient),
    })
      .then((response) => response.json()) // Parse the JSON string into a JavaScript object
      .then((data) => {
        console.log(data); // 'data' is now a JavaScript object
        setCsvData(data); // Assuming the name setCsvData is a bit misleading here, it sets JSON data
      })
      .catch((error) => console.error("Error fetching JSON:", error));
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
        <h1 className="text-4xl font-bold text-center py-8">
          Primary Care Recommendation
        </h1>
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
