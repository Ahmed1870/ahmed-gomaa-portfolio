export const omnichannelData = {
  title: "Omnichannel Performance Summary",
  subtitle: "Interactive BI Dashboard Preview",
  filterLabel: "Sales Channels",
  filters: {
    "All Channels": {
      kpis: [
        { label: "TOTAL REVENUE", value: "$12.45M", change: "↑ 12.5% vs Last Year", isPositive: true },
        { label: "TOTAL ORDERS", value: "145.2K", change: "↑ 8.2% vs Last Year", isPositive: true },
        { label: "AVG ORDER VALUE", value: "$85.70", change: "↑ 3.8% vs Last Year", isPositive: true },
        { label: "RETURN RATE", value: "4.2%", change: "↓ 1.1% vs Last Year", isPositive: true }
      ],
      trendTitle: "Monthly Revenue Performance ($K)",
      trendData: [
        { label: "Jan", val: 820 }, { label: "Feb", val: 910 }, { label: "Mar", val: 950 },
        { label: "Apr", val: 1100 }, { label: "May", val: 1050 }, { label: "Jun", val: 1245 }
      ],
      breakdownTitle: "Revenue Share by Channel",
      breakdownData: [
        { label: "E-Commerce", value: "$5.80M", pct: 46.5, color: "#3b82f6" },
        { label: "Retail Store", value: "$4.20M", pct: 33.7, color: "#10b981" },
        { label: "Marketplace", value: "$2.45M", pct: 19.8, color: "#f59e0b" }
      ]
    },
    "E-Commerce": {
      kpis: [
        { label: "TOTAL REVENUE", value: "$5.80M", change: "↑ 18.4% vs Last Year", isPositive: true },
        { label: "TOTAL ORDERS", value: "68.4K", change: "↑ 16.1% vs Last Year", isPositive: true },
        { label: "AVG ORDER VALUE", value: "$84.80", change: "↑ 2.0% vs Last Year", isPositive: true },
        { label: "RETURN RATE", value: "3.1%", change: "↓ 1.6% vs Last Year", isPositive: true }
      ],
      trendTitle: "Monthly E-Commerce Revenue ($K)",
      trendData: [
        { label: "Jan", val: 340 }, { label: "Feb", val: 390 }, { label: "Mar", val: 410 },
        { label: "Apr", val: 495 }, { label: "May", val: 470 }, { label: "Jun", val: 580 }
      ],
      breakdownTitle: "Revenue Share by Device",
      breakdownData: [
        { label: "Mobile", value: "$3.48M", pct: 60, color: "#3b82f6" },
        { label: "Desktop", value: "$1.86M", pct: 32, color: "#10b981" },
        { label: "Tablet", value: "$0.46M", pct: 8, color: "#f59e0b" }
      ]
    },
    "Retail Store": {
      kpis: [
        { label: "TOTAL REVENUE", value: "$4.20M", change: "↑ 6.5% vs Last Year", isPositive: true },
        { label: "TOTAL ORDERS", value: "52.1K", change: "↑ 2.8% vs Last Year", isPositive: true },
        { label: "AVG ORDER VALUE", value: "$80.60", change: "↑ 1.2% vs Last Year", isPositive: true },
        { label: "RETURN RATE", value: "5.4%", change: "↓ 0.4% vs Last Year", isPositive: true }
      ],
      trendTitle: "Monthly Retail Revenue ($K)",
      trendData: [
        { label: "Jan", val: 310 }, { label: "Feb", val: 330 }, { label: "Mar", val: 345 },
        { label: "Apr", val: 360 }, { label: "May", val: 350 }, { label: "Jun", val: 385 }
      ],
      breakdownTitle: "Revenue Share by Region",
      breakdownData: [
        { label: "Cairo", value: "$1.68M", pct: 40, color: "#3b82f6" },
        { label: "Alexandria", value: "$1.05M", pct: 25, color: "#10b981" },
        { label: "Giza", value: "$0.84M", pct: 20, color: "#f59e0b" },
        { label: "Other", value: "$0.63M", pct: 15, color: "#9ca3af" }
      ]
    },
    "Marketplace": {
      kpis: [
        { label: "TOTAL REVENUE", value: "$2.45M", change: "↑ 15.0% vs Last Year", isPositive: true },
        { label: "TOTAL ORDERS", value: "24.7K", change: "↑ 12.4% vs Last Year", isPositive: true },
        { label: "AVG ORDER VALUE", value: "$99.20", change: "↑ 4.6% vs Last Year", isPositive: true },
        { label: "RETURN RATE", value: "4.8%", change: "↓ 0.6% vs Last Year", isPositive: true }
      ],
      trendTitle: "Monthly Marketplace Revenue ($K)",
      trendData: [
        { label: "Jan", val: 170 }, { label: "Feb", val: 190 }, { label: "Mar", val: 195 },
        { label: "Apr", val: 245 }, { label: "May", val: 230 }, { label: "Jun", val: 280 }
      ],
      breakdownTitle: "Revenue Share by Marketplace",
      breakdownData: [
        { label: "Amazon", value: "$1.35M", pct: 55, color: "#3b82f6" },
        { label: "Noon", value: "$0.86M", pct: 35, color: "#10b981" },
        { label: "Other", value: "$0.25M", pct: 10, color: "#f59e0b" }
      ]
    }
  }
};
