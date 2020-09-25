export default function apiCall(metodo, url) {
    return fetch(url, {
        metodo
    }).then(response => response.json())
}