# Art Task Plan Dashboard

🎨 Real-time monitoring dashboard for Art Task Plan pipeline

## 🔗 Live Demo

**Visit: https://kwakseungmin-lab.github.io/art-task-dashboard/**

## 📊 Features

- **14 Agent Monitoring**: Real-time status of all pipeline agents
- **Knowledge Base Stats**: Art KB (26,789 entities) & Meta KB (2,313 entities)
- **Pipeline Visualization**: Interactive flow diagram
- **Execution Tracking**: Live monitoring of thread executions
- **Analytics Dashboard**: Success rate trends and performance metrics

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/kwakseungmin-Lab/art-task-dashboard.git
cd art-task-dashboard

# Open in browser
open index.html
```

### Streamlit Version (Advanced)

```bash
# Install dependencies
pip install streamlit pandas plotly

# Run Streamlit dashboard
streamlit run art_dashboard_v2.py
```

## 📁 Project Structure

```
art-task-dashboard/
├── index.html              # Main dashboard
├── app.js                  # JavaScript logic
├── dashboard-data/         # JSON data files
│   ├── agents.json        # Agent configurations
│   ├── kb_statistics.json # KB statistics
│   ├── executions.json    # Execution records
│   ├── experiments.json   # Experiment data
│   ├── analytics.json     # Analytics metrics
│   └── metadata.json      # Metadata
└── art_dashboard_v2.py    # Streamlit version
```

## 🔄 Data Updates

Dashboard data auto-refreshes every 30 seconds. To manually update:

```javascript
// In browser console
dashboard.loadData().then(() => dashboard.renderDashboard())
```

## 📈 Key Metrics

- **Total Agents**: 14 (11 Pipeline + 2 KB + 1 Manager)
- **Success Rate**: 92.5%
- **Art KB**: 26,789 entities
- **Meta KB**: 2,313 entities

## 🛠️ Technology Stack

- **Frontend**: HTML5, Tailwind CSS, Chart.js
- **Data**: JSON files with real-time updates
- **Hosting**: GitHub Pages
- **Optional**: Streamlit for advanced features

## 📝 License

MIT License

## 👨‍💻 Author

kwakseungmin-Lab

---

Last Updated: 2026-03-31