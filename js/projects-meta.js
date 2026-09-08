export const projectsMeta = {
  omnichannel: {
    title: "Enterprise Omnichannel Audit",
    description:
      "A production-style retail audit focused on identifying margin leakage across promotions, returns, customer identity, and multi-channel transaction data.",
    tags: ["SQL Server", "Power BI", "DAX"],
    accent: "#3b82f6",
    service: {
      label: "Sales & Retail Analytics",
      url: "./services/sales-retail/"
    },

    challenge:
      "The audit addresses margin erosion caused by promotional abuse and suspicious return activity across Store, Web, Mobile App, and Marketplace channels. The source data also contains realistic quality issues such as mixed timestamps, customer identity noise, categorical drift, orphan returns, and multi-currency transactions.",

    approach: [
      "Profiled the raw transaction data and identified anomaly patterns using Python.",
      "Built SQL staging transformations for datetime normalization, category standardization, identity resolution, return linkage, policy checks, and FX normalization.",
      "Modeled the curated data using a star schema and prepared it for Power BI analysis.",
      "Separated behavioral risk signals from accounting outcomes so leakage estimates remain prioritization proxies rather than booked losses."
    ],

    findings: [
      "Promo abuse was detected in 1.50% of transactions.",
      "44.04% of return activity was classified as suspicious under the audit rules.",
      "The promotional leakage proxy was $132,660.",
      "The suspicious return value proxy was $125,670.57.",
      "Gross sales were $6,976,624.76, while net sales after returns were $6,273,829.36.",
      "Realized margin reached $2,462,863.19."
    ],

    recommendations: [
      "Prioritize suspicious return sequences instead of treating every return as fraudulent.",
      "Apply selective verification to orphan, late, unusually valuable, or repeatedly suspicious returns.",
      "Monitor promotional abuse using explicit anomaly rules and leakage proxies.",
      "Use Net Sales and Realized Margin as executive measures rather than relying on raw return rate alone.",
      "Productionize the pipeline with controlled ingestion, data-quality tests, orchestration, access controls, and threshold calibration."
    ]
  },

  hr: {
    title: "HR Workforce Analytics",
    description:
      "An end-to-end workforce analytics project designed to understand employee attrition patterns and identify workforce segments that require targeted retention attention.",
    tags: ["Excel", "Power Query", "Power BI"],
    accent: "#10b981",
    service: {
      label: "HR & Workforce Analytics",
      url: "./services/hr-workforce/"
    },

    challenge:
      "The analysis focuses on understanding why employees leave and which workforce segments require targeted intervention. The workflow moves from data validation and SQL analysis to Python exploratory analysis and Power BI reporting.",

    approach: [
      "Validated the HR dataset and created an explicit AttritionFlag for analytical use.",
      "Used SQL to investigate attrition across workforce dimensions.",
      "Performed Python EDA across overtime, department, job role, income level, and commute distance.",
      "Translated the analysis into an interactive Power BI dashboard for HR monitoring and decision support."
    ],

    findings: [
      "Department and job-role differences provide clear areas for further attrition investigation.",
      "Overtime, commute distance, and income level emerge as important analytical signals in the dataset.",
      "The analysis treats these relationships as investigation priorities rather than proof of causation.",
      "Attrition should be monitored within the active filter context so HR teams can compare workforce segments consistently."
    ],

    recommendations: [
      "Prioritize high-attrition departments and roles for deeper investigation.",
      "Review workload and overtime patterns as potential retention risks.",
      "Investigate whether commute distance and compensation remain meaningful after controlling for department, role, age, and tenure.",
      "Use the dashboard as an ongoing monitoring layer rather than a one-time attrition report."
    ]
  },

  rfm: {
    title: "RFM Customer Segmentation",
    description:
      "Behavioral customer segmentation using Recency, Frequency, and Monetary value to identify customer groups and support differentiated retention and marketing strategies.",
    tags: ["Python", "Pandas", "Data Modeling"],
    accent: "#8b5cf6",
    service: {
      label: "Customer & Retention Analytics",
      url: "./services/customer-retention/"
    },

    challenge:
      "The business has a large customer base but lacks meaningful segmentation. Treating customers uniformly can waste marketing budget, overlook loyal customers, and allow disengaged customers to leave unnoticed.",

    approach: [
      "Cleaned the Online Retail transaction data using SQL.",
      "Calculated Recency, Frequency, and Monetary metrics at customer level.",
      "Applied quintile-based scoring to the RFM dimensions.",
      "Converted RFM scores into actionable customer segments and translated the segmentation into business recommendations."
    ],

    findings: [
      "Champions represent the highest-value customer group and generate the strongest revenue contribution.",
      "A relatively small portion of customers contributes a significant share of customer value.",
      "At Risk customers require immediate retention and re-engagement attention.",
      "Customer segments should receive different marketing treatments instead of a single campaign strategy."
    ],

    recommendations: [
      "Reward Champions through loyalty programs and relationship-building initiatives rather than relying only on discounts.",
      "Launch targeted re-engagement campaigns for At Risk customers.",
      "Use onboarding offers to move New Customers toward Loyal Customer behavior.",
      "Review RFM segments regularly so customer treatment reflects changes in purchasing behavior.",
      "Use the RFM dashboard to connect customer behavior with marketing resource allocation."
    ]
  }
};
