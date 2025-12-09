import { ChartDataProvider } from "@mui/x-charts/ChartDataProvider";
import { ChartsSurface } from "@mui/x-charts/ChartsSurface";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { ChartsLegend } from "@mui/x-charts/ChartsLegend";
import { ChartsTooltip } from "@mui/x-charts/ChartsTooltip";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { ChartsAxisHighlight } from "@mui/x-charts/ChartsAxisHighlight";
import { Paper, Typography } from "@mui/material";

const salesData = [300, 280, 220, 350, 320, 280, 250];
const bvData = [270, 330, 200, 280, 300, 250, 220];
const xLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function SalesBVTrend() {
  return (
    <Paper sx={{ p: 3, height: "100%" }}>
      <Typography variant="h6" fontWeight={600} mb={2}>
        Sales & BV Trend (7 Days)
      </Typography>
      <ChartDataProvider
        height={300}
        series={[
          { type: "line", data: salesData, label: "Sales", color: "#4caf50" },
          { type: "line", data: bvData, label: "BV Points", color: "#ff9800" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        yAxis={[{ min: 100, max: 400 }]}
        margin={{ top: 30, right: 30, bottom: 50, left: 50 }}
      >
        <ChartsLegend />
        <ChartsTooltip />
        <ChartsSurface>
          <ChartsXAxis />
          <ChartsYAxis />
          <LinePlot />
          <MarkPlot />
          <ChartsAxisHighlight x="line" />
        </ChartsSurface>
      </ChartDataProvider>
    </Paper>
  );
}
