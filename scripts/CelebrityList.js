import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "celebrity") {
            const celebId = itemClicked.dataset.id
            for (const star of celebrities) { //cycle thru celebrity objects from copied array
                if (star.id === parseInt(celebId)) {
                    window.alert(` ${star.name} is a ${star.sport} star `)
                }
            }
        }
    }
)