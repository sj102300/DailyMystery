
export function checkIsSolved(): Boolean{
    if (localStorage.getItem('isSolved') === 'true') {
        return true;
    }
    return false;
}