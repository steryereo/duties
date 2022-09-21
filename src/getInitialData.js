export default function getInitialData() {
  const table = document.querySelector('.tableView-content-wrap table')

  const [_, ...duties] = [...table.querySelectorAll("th")].map(el => el.innerText.trim())

  const lastMonthRow = [...table.querySelectorAll("tr")].pop()

  const [lastMonth, ...people] = [...lastMonthRow.querySelectorAll("td")].map(el => el.innerText.trim())

  const lastMonthDuties = duties.reduce((acc, duty, i) => ({ ...acc, [duty]: people[i] }), {})

  return { lastMonth, lastMonthDuties, duties, people }
}
