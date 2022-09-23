export default function getInitialData() {
  const table = document.querySelector(".tableView-content-wrap table");

  const [_, ...duties] = [...table.querySelectorAll("th")].map((el) =>
    el.innerText.trim()
  );

  const lastMonthRow = [...table.querySelectorAll("tr")].pop();

  const [lastMonth, ...people] = [...lastMonthRow.querySelectorAll("td")].map(
    (el) => el.innerText.trim()
  );

  return { lastMonth, duties, people };
}
