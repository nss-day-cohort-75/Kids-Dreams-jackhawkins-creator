import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebrity = null

    for (const celeb of celebrityArray) { //cycles thru celeb object array; changed 'celebrity' to 'celeb' to avoid reusing variable names
        if (celeb.id === kidObject.celebrityId) {
            celebrity = celeb
        }
    }

    return celebrity
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) { //cycles thru kid objects
        const kidsStar = findCelebrityMatch(kid, celebrities) //param1=current kid object, param2=celebrity array of objects - kidsStar is the object of the celebrity they want to meet
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

