export function reportWebVitals(metric) {
    if (metric.label === "web-vital") {
      console.log(metric.name, metric.value);
      // You can send the metric data to an analytics service here
    }
  }