const get = <T = any>(route: string): Promise<T> => {
    let host = document.location.hostname
    if (host == 'localhost') {
        host = host + ":3000"
    }
    return fetch('http://' + host + '/api/get/' + route, { credentials: "include" })
        .then((response) => response.json())
}

const save = <T extends {}>(route: string, data: T) => {
    let host = document.location.hostname
    if (host == 'localhost') {
        host = host + ":3000"
    }
    return fetch('http://' + host + '/api/save/' + route, {
        method: 'post',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

export { get, save };