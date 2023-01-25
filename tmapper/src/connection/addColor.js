function getColor(color) {
  switch (color) {
    case 0:
      return "#fb8500";
    case 1:
      return "#6a4c93";
    case 2:
      return "#e63946";
    case 3:
      return "#219ebc";
    case 4:
      return "#8ecae6";
    case 5:
      return "#588157";
    default:
      return "black";
  }
}

export default function addColors(structure, colors) {
  const color =
    colors[structure.employeeId] !== undefined
      ? colors[structure.employeeId]
      : 10;
  structure.employeeColor = getColor(color);
  for (const person of structure.subordinates) {
    addColors(person, colors);
  }
}
