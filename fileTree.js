const fs = require("fs");
const path = require("path");

const startDir = __dirname; // D:\dashoard-g-tack

function printTree(dir, prefix = "") {
  const items = fs.readdirSync(dir);

  items.forEach((item, index) => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);
    const isLast = index === items.length - 1;

    const pointer = isLast ? "└── " : "├── ";

    if (stats.isDirectory()) {
      console.log(`${prefix}${pointer}${item}/`);
      printTree(fullPath, prefix + (isLast ? "    " : "│   "));
    } else {
      console.log(`${prefix}${pointer}${item}`);
    }
  });
}

console.log(`📂 Full project tree for: ${startDir}\n`);
printTree(startDir);
