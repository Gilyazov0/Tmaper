function getColor(color) {
  switch (color) {
    case 0:
      return "red";
    case 1:
      return "blue";
    case 2:
      return "green";
    default:
      return "yellow";
  }
}

export default function addColors(structure, colors) {
  const color = colors[structure.employeeId] ? colors[structure.employeeId] : 0;
  structure.employeeColor = getColor(color);
  for (const person of structure.subordinates) {
    addColors(person, color);
  }
}
