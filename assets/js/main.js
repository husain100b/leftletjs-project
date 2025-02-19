// Initialize the map centered on Bangladesh
var map = L.map("map").setView([23.685, 90.3563], 7); // Zoom level 7 to view the whole country

// Add OpenStreetMap tiles
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Array of medical colleges with their coordinates and names
var medicalColleges = [
  {
    name: "Sher-e-Bangla Medical College",
    coords: [22.6862, 90.3614],
  },
  {
    name: "Chittagong Medical College",
    coords: [22.3593, 91.8308],
  },
  {
    name: "Dhaka Medical College",
    coords: [23.726, 90.3976],
  },
  {
    name: "Khulna Medical College",
    coords: [22.8285, 89.5382],
  },
  {
    name: "Rajshahi Medical College",
    coords: [24.372, 88.5864],
  },
  {
    name: "Rangpur Medical College",
    coords: [25.7666, 89.2338],
  },
  {
    name: "Mymensingh Medical College",
    coords: [24.7418, 90.4094],
  },
  {
    name: "Sylhet MAG Osmani Medical College",
    coords: [24.9013, 91.8541],
  },
];

medicalColleges.forEach(function (college) {
  L.marker(college.coords).addTo(map).bindPopup(college.name);
});
