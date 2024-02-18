// pages/form.js or pages/form.tsx
'use client'
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import {FormEvent, useState} from "react";

export default function FormPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [location, setLocation] = useState('');
  const [languagePreference, setLanguagePreference] = useState('');
  const [insurancePlan, setInsurancePlan] = useState('');
  const [sex, setSex] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [doctorsGenderPreference, setDoctorsGenderPreference] = useState('');
  const [locationRadiusPreference, setLocationRadiusPreference] = useState('');
  const [consultationLocation, setConsultationLocation] = useState('');
  const [problem, setProblem] = useState('');
  const [budgetMax, setBudgetMax] = useState('');
  const [communicationPreference, setCommunicationPreference] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    window.location.href = `/doctors?first_name=${firstName}&last_name=${lastName}&date_of_birth=${dateOfBirth}&location=${location}&language_preference=${languagePreference}&lInsurance_plan=${insurancePlan}&sex=${sex}&ethnicity=${ethnicity}&doctors_gender_preference=${doctorsGenderPreference}&location_radious_prefernce=${locationRadiusPreference}&consultation_location=${consultationLocation}&problem=${problem}&budget_max=${budgetMax}&communication_preference=${communicationPreference}`
  };

  return (
    <Layout title="Registration Form">
      <form className="max-w-xl mx-auto py-8" onSubmit={handleSubmit}>
      <Input
          label="First Name"
          id="first_name"
          name="first_name"
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          label="Last Name"
          id="last_name"
          name="last_name"
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          label="Date of Birth"
          id="date_of_birth"
          name="date_of_birth"
          type="date"
          required
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
        <Input
          label="Location"
          id="location"
          name="location"
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Input
          label="Language Preference"
          id="language_preference"
          name="language_preference"
          type="text"
          required
          value={languagePreference}
          onChange={(e) => setLanguagePreference(e.target.value)}
        />
        <Input
          label="Insurance Plan"
          id="insurance_plan"
          name="insurance_plan"
          type="text"
          required
          value={insurancePlan}
          onChange={(e) => setInsurancePlan(e.target.value)}
        />
        <Input
          label="Sex"
          id="sex"
          name="sex"
          type="text"
          required
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        />
        <Input
          label="Ethnicity"
          id="ethnicity"
          name="ethnicity"
          type="text"
          required
          value={ethnicity}
          onChange={(e) => setEthnicity(e.target.value)}
        />
        <Input
          label="Doctor's Gender Preference"
          id="doctors_gender_preference"
          name="doctors_gender_preference"
          type="text"
          value={doctorsGenderPreference}
          onChange={(e) => setDoctorsGenderPreference(e.target.value)}
        />
        <Input
          label="Location Radius Preference"
          id="location_radius_preference"
          name="location_radius_preference"
          type="text"
          value={locationRadiusPreference}
          onChange={(e) => setLocationRadiusPreference(e.target.value)}
        />
        <Input
          label="Consultation Location"
          id="consultation_location"
          name="consultation_location"
          type="text"
          required
          value={consultationLocation}
          onChange={(e) => setConsultationLocation(e.target.value)}
        />
        <Input
          label="Problem"
          id="problem"
          name="problem"
          type="text"
          required
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        />
        <Input
          label="Budget Max"
          id="budget_max"
          name="budget_max"
          type="number"
          required
          value={budgetMax}
          onChange={(e) => setBudgetMax(e.target.value)}
        />
        <div className="mb-4">
          <label
            htmlFor="communication_preference"
            className="block mb-2 text-lg"
          >
            Communication Preference
          </label>
          <select
            id="communication_preference"
            name="communication_preference"
            className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            required
            value={communicationPreference}
            onChange={(e) => setCommunicationPreference(e.target.value)}
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="text">Text</option>
          </select>

        </div>
        <div className="center-container">
          <Button type="submit" >Submit</Button>
        </div>
      </form>
    </Layout>
  );
}
