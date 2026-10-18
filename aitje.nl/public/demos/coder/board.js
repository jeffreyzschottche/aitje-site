const columns = ["Te doen", "In uitvoering", "Review", "Gereed"];
const tasks = [
  {
    id: 1,
    title: "Klantportaal uitwerken",
    team: "Frontend",
    priority: "Hoog",
    status: 0,
  },
  {
    id: 2,
    title: "API-validatie toevoegen",
    team: "Backend",
    priority: "Normaal",
    status: 0,
  },
  {
    id: 3,
    title: "Mobiele navigatie verbeteren",
    team: "Frontend",
    priority: "Hoog",
    status: 1,
  },
  {
    id: 4,
    title: "Tests voor facturatie",
    team: "Backend",
    priority: "Normaal",
    status: 2,
  },
  {
    id: 5,
    title: "Ontwerp tokens vastleggen",
    team: "Design",
    priority: "Normaal",
    status: 3,
  },
];
const board = document.querySelector("#board");
const search = document.querySelector("#search");
const filter = document.querySelector("#team");

function element(tag, className, text) {
  const node = document.createElement(tag);
  node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function render() {
  const visible = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.value.toLowerCase()) &&
      (!filter.value || task.team === filter.value),
  );
  board.replaceChildren();
  columns.forEach((name, status) => {
    const column = element("section", "column");
    const list = visible.filter((task) => task.status === status);
    const heading = element("h2", "", name);
    heading.append(element("span", "count", String(list.length)));
    column.append(heading);
    for (const task of list) {
      const card = element("article", "card");
      const meta = element("div", "meta");
      meta.append(
        element("span", "tag", task.team),
        element(
          "span",
          task.priority === "Hoog" ? "priority high" : "priority",
          task.priority,
        ),
      );
      const title = element("h3", "", task.title);
      const footer = element("div", "footer");
      footer.append(
        element("span", "task-id", `ORB-${String(task.id).padStart(3, "0")}`),
      );
      const move = element(
        "button",
        "move",
        status < 3 ? "Volgende stap →" : "↶ Terugzetten",
      );
      move.type = "button";
      move.dataset.task = String(task.id);
      move.setAttribute(
        "aria-label",
        `${task.title}: ${status < 3 ? "naar " + columns[status + 1] : "terug naar Te doen"}`,
      );
      move.addEventListener("click", () => {
        task.status = (task.status + 1) % columns.length;
        render();
        board
          .querySelector(`[data-task="${task.id}"]`)
          ?.focus({ preventScroll: true });
        document.querySelector("#notice").textContent =
          `${task.title} staat nu bij ${columns[task.status]}.`;
      });
      footer.append(move);
      card.append(meta, title, footer);
      column.append(card);
    }
    if (!list.length)
      column.append(element("p", "empty", "Geen taken in deze stap."));
    board.append(column);
  });
  document.querySelector("#total").textContent = `${visible.length} taken`;
  document.querySelector("#done").textContent = String(
    tasks.filter((task) => task.status === 3).length,
  );
}
search.addEventListener("input", render);
filter.addEventListener("change", render);
render();
