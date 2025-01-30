import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "child") {
            const kidId = itemClicked.dataset.id
            for (const child of children) { //cycle thru child objects from copied array
                if (child.id === parseInt(kidId)) {
                    window.alert(` ${child.name}'s wish is ${child.wish} `)
                }
            }
        }
    }
)