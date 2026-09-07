export const rfmData = {
  title: "RFM Customer Segmentation Analysis",
  subtitle: "Behavioral Analytics & Lifetime Value",
  filterLabel: "Customer Tier",
  filters: {
    "All Segments": {
      kpis: [
        { label: "TOTAL CUSTOMERS", value: "48,250", change: "↑ 14.2% YoY", isPositive: true },
        { label: "CHAMPIONS TIER", value: "8,420", change: "17.4% of base", isPositive: true },
        { label: "AT RISK CUSTOMERS", value: "5,110", change: "↓ 3.1% YoY", isPositive: true },
        { label: "AVG LIFETIME VALUE", value: "$620", change: "↑ 9.5% YoY", isPositive: true }
      ],
      trendTitle: "Customer Segment Growth Trend",
      trendData: [
        { label: "Q1", val: 38000 }, { label: "Q2", val: 41200 }, { label: "Q3", val: 44500 }, { label: "Q4", val: 48250 }
      ],
      breakdownTitle: "Customer Base Segmentation",
      breakdownData: [
        { label: "Loyal Customers", value: "14.2K", pct: 29.4, color: "#3b82f6" },
        { label: "Potential Loyalists", value: "11.5K", pct: 23.8, color: "#6366f1" },
        { label: "Hibernating / Lost", value: "9.0K", pct: 18.7, color: "#9ca3af" },
        { label: "Champions", value: "8.4K", pct: 17.5, color: "#10b981" },
        { label: "At Risk", value: "5.1K", pct: 10.6, color: "#f59e0b" }
      ]
    },
    "Champions": {
      kpis: [
        { label: "TOTAL CUSTOMERS", value: "8,420", change: "↑ 21.0% YoY", isPositive: true },
        { label: "AVG LIFETIME VALUE", value: "$1,450", change: "↑ 12.4% YoY", isPositive: true },
        { label: "PURCHASE FREQUENCY", value: "6.2x / yr", change: "↑ 1.1x YoY", isPositive: true },
        { label: "REPEAT RATE", value: "92%", change: "↑ 3 pts YoY", isPositive: true }
      ],
      trendTitle: "Champions Growth Trend",
      trendData: [
        { label: "Q1", val: 6200 }, { label: "Q2", val: 6900 }, { label: "Q3", val: 7600 }, { label: "Q4", val: 8420 }
      ],
      breakdownTitle: "Champions by Acquisition Channel",
      breakdownData: [
        { label: "Organic", value: "42%", pct: 42, color: "#10b981" },
        { label: "Referral", value: "31%", pct: 31, color: "#3b82f6" },
        { label: "Paid", value: "27%", pct: 27, color: "#f59e0b" }
      ]
    },
    "Loyal Customers": {
      kpis: [
        { label: "TOTAL CUSTOMERS", value: "14,200", change: "↑ 9.8% YoY", isPositive: true },
        { label: "AVG LIFETIME VALUE", value: "$780", change: "↑ 6.1% YoY", isPositive: true },
        { label: "PURCHASE FREQUENCY", value: "3.8x / yr", change: "↑ 0.4x YoY", isPositive: true },
        { label: "REPEAT RATE", value: "74%", change: "↑ 2 pts YoY", isPositive: true }
      ],
      trendTitle: "Loyal Customers Growth Trend",
      trendData: [
        { label: "Q1", val: 11800 }, { label: "Q2", val: 12600 }, { label: "Q3", val: 13400 }, { label: "Q4", val: 14200 }
      ],
      breakdownTitle: "Loyal Customers by Category",
      breakdownData: [
        { label: "Electronics", value: "38%", pct: 38, color: "#3b82f6" },
        { label: "Fashion", value: "29%", pct: 29, color: "#10b981" },
        { label: "Home", value: "22%", pct: 22, color: "#f59e0b" },
        { label: "Other", value: "11%", pct: 11, color: "#9ca3af" }
      ]
    },
    "At Risk": {
      kpis: [
        { label: "TOTAL CUSTOMERS", value: "5,110", change: "↓ 3.1% YoY", isPositive: false },
        { label: "AVG LIFETIME VALUE", value: "$410", change: "↓ 8.2% YoY", isPositive: false },
        { label: "DAYS SINCE LAST ORDER", value: "68 days", change: "↑ 14 days YoY", isPositive: false },
        { label: "CHURN PROBABILITY", value: "34%", change: "↑ 6 pts YoY", isPositive: false }
      ],
      trendTitle: "At Risk Segment Trend",
      trendData: [
        { label: "Q1", val: 4200 }, { label: "Q2", val: 4550 }, { label: "Q3", val: 4830 }, { label: "Q4", val: 5110 }
      ],
      breakdownTitle: "At Risk by Reason",
      breakdownData: [
        { label: "Price Sensitivity", value: "40%", pct: 40, color: "#f59e0b" },
        { label: "Low Engagement", value: "35%", pct: 35, color: "#ef4444" },
        { label: "Service Issues", value: "25%", pct: 25, color: "#9ca3af" }
      ]
    },
    "Lost": {
      kpis: [
        { label: "TOTAL CUSTOMERS", value: "9,000", change: "↑ 2.5% YoY", isPositive: false },
        { label: "AVG LIFETIME VALUE", value: "$180", change: "↓ 4.0% YoY", isPositive: false },
        { label: "DAYS SINCE LAST ORDER", value: "145 days", change: "↑ 22 days YoY", isPositive: false },
        { label: "WIN-BACK RATE", value: "6%", change: "↓ 1 pt YoY", isPositive: false }
      ],
      trendTitle: "Lost Customers Trend",
      trendData: [
        { label: "Q1", val: 7900 }, { label: "Q2", val: 8200 }, { label: "Q3", val: 8600 }, { label: "Q4", val: 9000 }
      ],
      breakdownTitle: "Lost Customers by Last Category",
      breakdownData: [
        { label: "Fashion", value: "33%", pct: 33, color: "#9ca3af" },
        { label: "Electronics", value: "29%", pct: 29, color: "#3b82f6" },
        { label: "Home", value: "22%", pct: 22, color: "#f59e0b" },
        { label: "Other", value: "16%", pct: 16, color: "#ef4444" }
      ]
    }
  }
};
