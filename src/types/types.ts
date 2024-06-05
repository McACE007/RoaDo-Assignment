export type StatsItem =
  {
    title: string;
    data: { name: string; value: number; }[];
  }

export type PriorityAlertItem = {
  title: string;
  type: "Complain" | "Issue";
  loadNo: string;
  billTo: string;
  date: string;
  description: string;
}

export type HighlightItem =
  {
    type: "Income" | "Expenses";
    amount: number;
    paymentCount: number;
  }

export type CompletedActivityItem = {
  Assignee: string;
  taskDescription: string;
  loadNo: string;
}

export type ScheduledActivityItem = {
  Assignee: string;
  taskDescription: string;
  loadNo: string;
}

export type RootState = {
  dashboard: {
    stats: StatsItem[];
    priorityAlerts: PriorityAlertItem[];
    highlights: HighlightItem[];
    completedActivities: CompletedActivityItem[];
    scheduledActivities: ScheduledActivityItem[];
  };
}


