let items = [1, 2, 3];
let total = 0;

for (let i = 0; i < items.length; i++) {
  total += items[i];
}

console.log("total items: ", total);

fetch("/api/data")
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      console.log("Name: " + data[i].name.toUpperCase());
    }
  })
  .catch(err => console.log("ERR", err));
export function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

export function logTotal(label, value) {
  console.log(`${label}: ${value}`);
}

export async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network error");
  return res.json();
}
export function formatName(name) {
  return name.trim().toUpperCase();
}
import { sumArray, logTotal, fetchJSON } from "./utilities.js";
import { formatName } from "./formatters.js";

async function main() {
  const items = [1, 2, 3];
  const total = sumArray(items);
  logTotal("Total items", total);

  try {
    const data = await fetchJSON("/api/data");
    data.forEach(d => console.log(formatName(d.name)));
  } catch (e) {
    console.error("Failed to load data:", e.message);
  }
}

main();