import React from "react";
import Layout from "../features/Layout";
import ActionForm from "../features/GetToKnow/ActionForm";
import GetToKnowFooter from "../features/GetToKnow/Footer";

const UniversityPlannerPage = () => {
  return (
    <>
      <Layout>
        <ActionForm />
        <GetToKnowFooter />
      </Layout>
    </>
  );
};

export default UniversityPlannerPage;
