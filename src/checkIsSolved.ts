export function checkIsSolved(): boolean {
    if (localStorage.getItem("isSolved") === "true") {
        return true;
    }
    return false;
}
