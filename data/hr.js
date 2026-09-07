export const hrData = {
  title: "HR Workforce & Retention Overview",
  subtitle: "Interactive HR Analytics Preview",
  filterLabel: "Department",
  filters: {
    "All Departments": {
      kpis: [
        { label: "TOTAL EMPLOYEES", value: "1,240", change: "↑ 5.4% YoY", isPositive: true },
        { label: "ATTRITION RATE", value: "11.8%", change: "↓ 2.3% YoY", isPositive: true },
        { label: "AVG TENURE", value: "3.4 Yrs", change: "↑ 0.6 Yrs YoY", isPositive: true },
        { label: "EMPLOYEE eNPS", value: "+42", change: "↑ 8 pts vs Q3", isPositive: true }
      ],
      trendTitle: "Quarterly Satisfaction Score (eNPS)",
      trendData: [
        { label: "Q1", val: 28 }, { label: "Q2", val: 32 }, { label: "Q3", val: 38 }, { label: "Q4", val: 42 }
      ],
      breakdownTitle: "Attrition Rate by Department",
      breakdownData: [
        { label: "Sales Dept", value: "18.2%", pct: 18.2, color: "#ef4444" },
        { label: "Marketing", value: "14.5%", pct: 14.5, color: "#f59e0b" },
        { label: "Operations", value: "11.0%", pct: 11.0, color: "#3b82f6" },
        { label: "Engineering", value: "7.4%", pct: 7.4, color: "#10b981" }
      ]
    },
    "Engineering": {
      kpis: [
        { label: "TOTAL EMPLOYEES", value: "410", change: "↑ 8.1% YoY", isPositive: true },
        { label: "ATTRITION RATE", value: "7.4%", change: "↓ 1.5% YoY", isPositive: true },
        { label: "AVG TENURE", value: "4.1 Yrs", change: "↑ 0.4 Yrs YoY", isPositive: true },
        { label: "EMPLOYEE eNPS", value: "+55", change: "↑ 6 pts vs Q3", isPositive: true }
      ],
      trendTitle: "Engineering eNPS Trend",
      trendData: [
        { label: "Q1", val: 42 }, { label: "Q2", val: 46 }, { label: "Q3", val: 51 }, { label: "Q4", val: 55 }
      ],
      breakdownTitle: "Engineering Attrition by Level",
      breakdownData: [
        { label: "Junior", value: "11.2%", pct: 11.2, color: "#ef4444" },
        { label: "Mid-Level", value: "6.8%", pct: 6.8, color: "#f59e0b" },
        { label: "Senior", value: "3.5%", pct: 3.5, color: "#10b981" }
      ]
    },
    "Sales": {
      kpis: [
        { label: "TOTAL EMPLOYEES", value: "320", change: "↑ 3.2% YoY", isPositive: true },
        { label: "ATTRITION RATE", value: "18.2%", change: "↑ 1.8% YoY", isPositive: false },
        { label: "AVG TENURE", value: "2.1 Yrs", change: "↓ 0.2 Yrs YoY", isPositive: false },
        { label: "EMPLOYEE eNPS", value: "+21", change: "↓ 4 pts vs Q3", isPositive: false }
      ],
      trendTitle: "Sales eNPS Trend",
      trendData: [
        { label: "Q1", val: 30 }, { label: "Q2", val: 27 }, { label: "Q3", val: 24 }, { label: "Q4", val: 21 }
      ],
      breakdownTitle: "Sales Attrition by Region",
      breakdownData: [
        { label: "North", value: "22%", pct: 22, color: "#ef4444" },
        { label: "South", value: "16%", pct: 16, color: "#f59e0b" },
        { label: "Central", value: "14%", pct: 14, color: "#3b82f6" }
      ]
    },
    "Marketing": {
      kpis: [
        { label: "TOTAL EMPLOYEES", value: "180", change: "↑ 4.0% YoY", isPositive: true },
        { label: "ATTRITION RATE", value: "14.5%", change: "↓ 0.9% YoY", isPositive: true },
        { label: "AVG TENURE", value: "2.9 Yrs", change: "↑ 0.3 Yrs YoY", isPositive: true },
        { label: "EMPLOYEE eNPS", value: "+38", change: "↑ 3 pts vs Q3", isPositive: true }
      ],
      trendTitle: "Marketing eNPS Trend",
      trendData: [
        { label: "Q1", val: 33 }, { label: "Q2", val: 35 }, { label: "Q3", val: 37 }, { label: "Q4", val: 38 }
      ],
      breakdownTitle: "Marketing Attrition by Team",
      breakdownData: [
        { label: "Content", value: "16%", pct: 16, color: "#f59e0b" },
        { label: "Growth", value: "13.5%", pct: 13.5, color: "#3b82f6" },
        { label: "Brand", value: "10.2%", pct: 10.2, color: "#10b981" }
      ]
    },
    "Operations": {
      kpis: [
        { label: "TOTAL EMPLOYEES", value: "330", change: "↑ 6.0% YoY", isPositive: true },
        { label: "ATTRITION RATE", value: "11.0%", change: "↓ 1.2% YoY", isPositive: true },
        { label: "AVG TENURE", value: "3.6 Yrs", change: "↑ 0.5 Yrs YoY", isPositive: true },
        { label: "EMPLOYEE eNPS", value: "+45", change: "↑ 5 pts vs Q3", isPositive: true }
      ],
      trendTitle: "Operations eNPS Trend",
      trendData: [
        { label: "Q1", val: 37 }, { label: "Q2", val: 40 }, { label: "Q3", val: 43 }, { label: "Q4", val: 45 }
      ],
      breakdownTitle: "Operations Attrition by Shift",
      breakdownData: [
        { label: "Morning", value: "8.5%", pct: 8.5, color: "#10b981" },
        { label: "Night", value: "14.2%", pct: 14.2, color: "#f59e0b" },
        { label: "Rotating", value: "10.1%", pct: 10.1, color: "#3b82f6" }
      ]
    }
  }
};
