export const trimValue = (string, maxChars) => {
    if (string.length <= maxChars) {
        return string;
    }
    const index = string.indexOf(" ", maxChars);

    if (index == -1) {
        return string;
    }
    return (string.substring(0, index) + "...");
}