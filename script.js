const STORAGE_KEY = "aiOpsConsoleDataV1";

const defaultWorkflows = [
  { id: 1, name: "Customer churn prediction", category: "ML inference", icon: "◎", tone: "cyan", trigger: "Scheduled", lastRun: "2 min ago", duration: "1.24 s", status: "Success" },
  { id: 2, name: "Document processing", category: "Data extraction", icon: "▤", tone: "purple", trigger: "Webhook", lastRun: "8 min ago", duration: "3.81 s", status: "Running" },
  { id: 3, name: "Customer email classifier", category: "NLP pipeline", icon: "✉", tone: "orange", trigger: "On demand", lastRun: "16 min ago", duration: "2.06 s", status: "Failed" },
  { id: 4, name: "Lead enrichment", category: "CRM automation", icon: "↗", tone: "green", trigger: "Scheduled", lastRun: "32 min ago", duration: "0.92 s", status: "Success" },
  { id: 5, name: "Support ticket routing", category: "LLM workflow", icon: "⌘", tone: "blue", trigger: "Webhook", lastRun: "49 min ago", duration: "1.76 s", status: "Success" },
  { id: 6, name: "Weekly insight summary", category: "Report generation", icon: "▥", tone: "purple", trigger: "Scheduled", lastRun: "1 hr ago", duration: "4.12 s", status: "Success" },
  { id: 7, name: "Invoice field extraction", category: "Document AI", icon: "▤", tone: "orange", trigger: "Webhook", lastRun: "2 hrs ago", duration: "2.34 s", status: "Success" },
  { id: 8, name: "Product sentiment scan", category: "Text analytics", icon: "✳", tone: "cyan", trigger: "On demand", lastRun: "3 hrs ago", duration: "1.51 s", status: "Success" }
];

const templates = {
  summarizer: {
    name: "Document summarizer",
    instruction: "Summarize the supplied document in five concise bullet points. Use clear, neutral language.",
    system: "You are a concise document summarization assistant."
  },
  classifier: {
    name: "Customer email classifier",
    instruction: "Classify the customer email as billing, technical support, account access, or other. Return a short reason.",
    system: "You are a customer support email classification assistant."
  },
  sentiment: {
    name: "Sentiment analysis",
    instruction: "Analyze the text sentiment as positive, neutral, or negative. Return a label and one-sentence explanation.",
    system: "You are a sentiment analysis assistant."
  }
};

let workflows = loadWorkflows();
let showingAll = false;
let chartInstance = null;
let toastTimeout = null;

function loadWorkflows() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const parsed = JSON.parse(saved);

      if (Array.isArray(parsed.workflows)) {
        return parsed.workflows;
      }
    }
  } catch (error) {
    console.warn("Could not load saved demo data:", error);
  }

  return defaultWorkflows.map(item => ({ ...item }));
}

function saveWorkflows() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ workflows })
    );
  } catch (error) {
    showToast("Browser storage is unavailable. Changes may not persist.");
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function statusClass(status) {
  return status.toLowerCase();
}

function renderWorkflows() {
  const body = document.getElementById("workflowTableBody");

  const query = document
    .getElementById("workflowSearch")
    .value.trim()
    .toLowerCase();

  const filter = document.getElementById("statusFilter").value;

  let list = workflows.filter(item => {
    const searchableText =
      `${item.name} ${item.category} ${item.trigger}`.toLowerCase();

    const matchesQuery = searchableText.includes(query);

    return matchesQuery &&
      (filter === "all" || item.status === filter);
  });

  const filteredCount = list.length;

  if (!showingAll) {
    list = list.slice(0, 5);
  }

  if (!list.length) {
    body.innerHTML = `
      <tr>
        <td colspan="6" class="empty-state">
          No workflows match your search.
        </td>
      </tr>
    `;
  } else {
    body.innerHTML = list.map(item => `
      <tr>
        <td>
          <div class="workflow-name">
            <span class="workflow-icon ${escapeHTML(item.tone)}">
              ${escapeHTML(item.icon)}
            </span>
            <span>
              ${escapeHTML(item.name)}
              <small>${escapeHTML(item.category)}</small>
            </span>
          </div>
        </td>
        <td>${escapeHTML(item.trigger)}</td>
        <td>${escapeHTML(item.lastRun)}</td>
        <td>${escapeHTML(item.duration)}</td>
        <td>
          <span class="status-badge ${statusClass(item.status)}">
            ${escapeHTML(item.status)}
          </span>
        </td>
        <td>
          <button
            class="row-menu"
            type="button"
            data-run-id="${item.id}"
            aria-label="Run ${escapeHTML(item.name)} again"
          >•••</button>
        </td>
      </tr>
    `).join("");
  }

  document.getElementById("tableResultCount").textContent =
    `Showing ${list.length} of ${filteredCount} matching workflows`;

  document.getElementById("showAllBtn").textContent =
    showingAll ? "Show fewer ↑" : "View all activity →";

  document.getElementById("workflowNavCount").textContent =
    String(workflows.length).padStart(2, "0");

  document.getElementById("activeWorkflows").textContent =
    String(
      workflows.filter(workflow => workflow.status !== "Failed").length
    ).padStart(2, "0");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function makeChartData(days) {
  if (days === 7) {
    return {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      success: [780, 1040, 920, 1320, 1180, 1510, 1742],
      failed: [80, 65, 95, 70, 52, 82, 64]
    };
  }

  return {
    labels: Array.from(
      { length: 30 },
      (_, i) => i % 5 === 0 ? `Day ${i + 1}` : ""
    ),

    success: Array.from(
      { length: 30 },
      (_, i) => 450 + Math.round(
        250 * Math.abs(Math.sin(i * 0.53)) +
        90 * Math.abs(Math.cos(i * 0.21)) +
        i * 8
      )
    ),

    failed: Array.from(
      { length: 30 },
      (_, i) => 28 + Math.round(
        38 * Math.abs(Math.sin(i * 0.71))
      )
    )
  };
}

function renderChart(days = 7) {
  const canvas = document.getElementById("executionChart");

  if (!canvas || typeof Chart === "undefined") {
    return;
  }

  const data = makeChartData(days);

  const total =
    data.success.reduce((sum, number) => sum + number, 0) +
    data.failed.reduce((sum, number) => sum + number, 0);

  document.getElementById("chartTotal").textContent =
    total.toLocaleString();

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(canvas, {
    type: "line",

    data: {
      labels: data.labels,

      datasets: [
        {
          label: "Successful runs",
          data: data.success,
          borderColor: "#40d8e8",
          backgroundColor: "rgba(64,216,232,.10)",
          borderWidth: 2,
          fill: true,
          tension: 0.38,
          pointRadius: 0,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: "#40d8e8"
        },
        {
          label: "Failed runs",
          data: data.failed,
          borderColor: "#b49aff",
          backgroundColor: "rgba(180,154,255,.04)",
          borderWidth: 1.7,
          fill: false,
          tension: 0.38,
          pointRadius: 0,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: "#b49aff"
        }
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      interaction: {
        intersect: false,
        mode: "index"
      },

      plugins: {
        legend: {
          display: false
        },

        tooltip: {
          backgroundColor: "#102338",
          borderColor: "#29475e",
          borderWidth: 1,
          titleColor: "#eaf5ff",
          bodyColor: "#9eb4c8",
          padding: 10,
          displayColors: true
        }
      },

      scales: {
        x: {
          grid: {
            display: false
          },

          border: {
            display: false
          },

          ticks: {
            color: "#71869c",
            font: {
              family: "DM Sans",
              size: 9
            },
            maxRotation: 0,
            autoSkip: true
          }
        },

        y: {
          beginAtZero: true,

          border: {
            display: false,
            dash: [3, 4]
          },

          grid: {
            color: "rgba(113,134,156,.13)"
          },

          ticks: {
            color: "#71869c",
            font: {
              family: "DM Sans",
              size: 9
            },
            maxTicksLimit: 5,
            padding: 8
          }
        }
      }
    }
  });
}

function updatePayload() {
  const selected = document.getElementById("promptTemplate").value;
  const template = templates[selected];

  const prompt = document.getElementById("promptInput").value;
  const temperature = Number(
    document.getElementById("temperature").value
  );
  const maxTokens = Number(
    document.getElementById("maxTokens").value
  );

  document.getElementById("temperatureValue").textContent =
    temperature.toFixed(1);

  const payload = {
    model: "example-model",

    messages: [
      {
        role: "system",
        content: template.system
      },
      {
        role: "user",
        content: prompt
      }
    ],

    temperature,
    max_tokens: maxTokens,

    metadata: {
      template: template.name,
      environment: "demo",
      note: "Illustrative payload only; no API request is sent."
    }
  };

  document.getElementById("jsonPreview").textContent =
    JSON.stringify(payload, null, 2);

  return payload;
}

function addActivity(name, detail, type = "success") {
  const list = document.getElementById("activityList");

  const symbol =
    type === "failed" ? "!" :
    type === "running" ? "↻" : "✓";

  const symbolClass =
    type === "failed" ? "warning-symbol" :
    type === "running" ? "info-symbol" : "success-symbol";

  const item = document.createElement("div");
  item.className = "activity-item";

  const icon = document.createElement("span");
  icon.className = `activity-symbol ${symbolClass}`;
  icon.textContent = symbol;

  const content = document.createElement("div");

  const paragraph = document.createElement("p");
  const strong = document.createElement("strong");

  strong.textContent = name;

  paragraph.append(
    strong,
    document.createTextNode(` ${detail}`)
  );

  const small = document.createElement("small");
  small.textContent = "Demo workflow event · just now";

  content.append(paragraph, small);

  const time = document.createElement("span");
  time.className = "activity-time";
  time.textContent = "now";

  item.append(icon, content, time);
  list.prepend(item);

  while (list.children.length > 6) {
    list.lastElementChild.remove();
  }
}

function runWorkflow() {
  const nextId =
    Math.max(0, ...workflows.map(item => Number(item.id) || 0)) + 1;

  const sampleNames = [
    ["Customer churn prediction", "ML inference", "◎", "cyan"],
    ["Document processing", "Data extraction", "▤", "purple"],
    ["Customer email classifier", "NLP pipeline", "✉", "orange"],
    ["Lead enrichment", "CRM automation", "↗", "green"],
    ["Support ticket routing", "LLM workflow", "⌘", "blue"]
  ];

  const sample =
    sampleNames[Math.floor(Math.random() * sampleNames.length)];

  const item = {
    id: nextId,
    name: sample[0],
    category: sample[1],
    icon: sample[2],
    tone: sample[3],
    trigger: "Manual",
    lastRun: "just now",
    duration: "Queued",
    status: "Running"
  };

  workflows.unshift(item);

  saveWorkflows();
  showingAll = false;
  renderWorkflows();

  addActivity(item.name, "workflow started", "running");

  showToast(
    "Demo workflow queued. No external service was called."
  );

  setTimeout(() => {
    const target = workflows.find(
      workflow => workflow.id === nextId
    );

    if (!target) {
      return;
    }

    target.status = "Success";
    target.duration =
      `${(0.7 + Math.random() * 2.8).toFixed(2)} s`;
    target.lastRun = "just now";

    saveWorkflows();
    renderWorkflows();

    addActivity(
      target.name,
      "completed successfully",
      "success"
    );
  }, 1800);
}

document.addEventListener("DOMContentLoaded", () => {
  renderWorkflows();
  renderChart(7);
  updatePayload();

  document.querySelectorAll(".range-button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".range-button").forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");
      renderChart(Number(button.dataset.range));
    });
  });

  document.getElementById("workflowSearch").addEventListener(
    "input",
    () => {
      showingAll = true;
      renderWorkflows();
    }
  );

  document.getElementById("statusFilter").addEventListener(
    "change",
    () => {
      showingAll = true;
      renderWorkflows();
    }
  );

  document.getElementById("showAllBtn").addEventListener(
    "click",
    () => {
      showingAll = !showingAll;
      renderWorkflows();
    }
  );

  document.getElementById("workflowTableBody").addEventListener(
    "click",
    event => {
      const button = event.target.closest("[data-run-id]");

      if (!button) {
        return;
      }

      const item = workflows.find(
        workflow => workflow.id === Number(button.dataset.runId)
      );

      if (item) {
        document.getElementById("workflowSearch").value = item.name;
        document.getElementById("statusFilter").value = "all";

        showingAll = true;
        renderWorkflows();

        showToast(
          `Showing ${item.name}. Use Run workflow to add a demo execution.`
        );
      }
    }
  );

  document.getElementById("runWorkflowBtn").addEventListener(
    "click",
    runWorkflow
  );

  document.getElementById("exportBtn").addEventListener(
    "click",
    () => {
      const report = {
        exportedAt: new Date().toISOString(),
        project: "AI Ops Console",
        note: "Demo data, not connected to production services.",
        workflows
      };

      const blob = new Blob(
        [JSON.stringify(report, null, 2)],
        { type: "application/json" }
      );

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "ai-ops-demo-report.json";
      link.click();

      URL.revokeObjectURL(url);

      showToast("Demo report exported as JSON.");
    }
  );

  document.getElementById("promptTemplate").addEventListener(
    "change",
    event => {
      const template = templates[event.target.value];

      document.getElementById("promptInput").value =
        template.instruction;

      updatePayload();
    }
  );

  ["promptInput", "temperature", "maxTokens"].forEach(id => {
    document.getElementById(id).addEventListener(
      "input",
      updatePayload
    );

    document.getElementById(id).addEventListener(
      "change",
      updatePayload
    );
  });

  document.getElementById("refreshPayloadBtn").addEventListener(
    "click",
    () => {
      updatePayload();
      showToast("Request payload updated.");
    }
  );

  document.getElementById("copyPayloadBtn").addEventListener(
    "click",
    async () => {
      const text =
        document.getElementById("jsonPreview").textContent;

      try {
        await navigator.clipboard.writeText(text);
        showToast("JSON payload copied to clipboard.");
      } catch {
        const range = document.createRange();

        range.selectNodeContents(
          document.getElementById("jsonPreview")
        );

        const selection = window.getSelection();

        selection.removeAllRanges();
        selection.addRange(range);

        showToast(
          "Clipboard access unavailable. Payload selected for copying."
        );
      }
    }
  );

  document.getElementById("resetDemoBtn").addEventListener(
    "click",
    () => {
      workflows = defaultWorkflows.map(item => ({ ...item }));

      saveWorkflows();
      showingAll = false;

      document.getElementById("workflowSearch").value = "";
      document.getElementById("statusFilter").value = "all";

      renderWorkflows();

      showToast("Demo workflow data reset.");
    }
  );

  document.getElementById("mobileMenuBtn").addEventListener(
    "click",
    () => {
      document.getElementById("sidebar").classList.toggle("open");
    }
  );

  document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("sidebar").classList.remove("open");

      document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });
});


