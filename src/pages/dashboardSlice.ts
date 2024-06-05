import { createSlice } from '@reduxjs/toolkit'

const fakeStats = [
  {
    title: "Orders",
    data: [
      { name: 'Upcoming', value: 50 },
      { name: 'Ongoing', value: 100 },
      { name: 'Completed', value: 50 },
    ],
  },
  {
    title: "Trips",
    data: [
      { name: 'Upcoming', value: 50 },
      { name: 'Ongoing', value: 100 },
      { name: 'Completed', value: 50 },
    ],
  },
  {
    title: "Revenue",
    data: [
      { name: 'Upcoming', value: 50 },
      { name: 'Ongoing', value: 100 },
      { name: 'Completed', value: 50 },
    ],
  },
  {
    title: "Expences",
    data: [
      { name: 'Freight Charge', value: 50 },
      { name: 'Driver Charge', value: 100 },
      { name: 'Other Charges', value: 50 },
    ],
  }
]

const fakePriorityAlerts = [
  {
    title: "Driver Raised Concern",
    type: "Complain",
    loadNo: "12454",
    billTo: "RoaDo demo Bangalore",
    date: "13 Feb 24",
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
  },
  {
    title: "Reefer Temp. out of range",
    type: "Issue",
    loadNo: "12454",
    billTo: "RoaDo demo Bangalore",
    date: "13 Feb 24",
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
  },
  {
    title: "Driver Raised Concern",
    type: "Complain",
    loadNo: "12454",
    billTo: "RoaDo demo Bangalore",
    date: "13 Feb 24",
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
  },
  {
    title: "Reefer Temp. out of range",
    type: "Issue",
    loadNo: "12454",
    billTo: "RoaDo demo Bangalore",
    date: "13 Feb 24",
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
  },
  {
    title: "Driver Raised Concern",
    type: "Complain",
    loadNo: "12454",
    billTo: "RoaDo demo Bangalore",
    date: "13 Feb 24",
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
  },
]

const fakeHighlghts = [
  {
    type: "Income",
    amount: 100000,
    paymentCount: 2,
  },
  {
    type: "Expenses",
    amount: 50000,
    paymentCount: 5,
  }
]

const fakeCompletedActivities = [
  {
    Assignee: "Gurpreet Singh",
    taskDescription: "(Dispatch team) has created",
    loadNo: "I-I-AAA-1325",
  },
  {
    Assignee: "Aman",
    taskDescription: "(Driver) Picked Up goods at Location_Name for ",
    loadNo: "I-I-AAA-1325",
  },
  {
    Assignee: "Gurpreet Singh",
    taskDescription: "(Dispatch team) has created",
    loadNo: "I-I-AAA-1325",
  },
  {
    Assignee: "Aman",
    taskDescription: "(Driver) Picked Up goods at Location_Name for ",
    loadNo: "I-I-AAA-1325",
  },

]

const fakeScheduledActivities = [
  {
    Assignee: "Gurpreet Singh",
    taskDescription: "will start added by",
    loadNo: "I-I-AAA-1325",
  },
  {
    Assignee: "Aman",
    taskDescription: "will start added by",
    loadNo: "I-I-AAA-1325",
  },
  {
    Assignee: "Gurpreet Singh",
    taskDescription: "will start added by",
    loadNo: "I-I-AAA-1325",
  },
  {
    Assignee: "Aman",
    taskDescription: "will start added by",
    loadNo: "I-I-AAA-1325",
  },
]


export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    stats: fakeStats,
    priorityAlerts: fakePriorityAlerts,
    highlights: fakeHighlghts,
    completedActivities: fakeCompletedActivities,
    scheduledActivities: fakeScheduledActivities,
  },
  reducers: {}
})


export default dashboardSlice.reducer
