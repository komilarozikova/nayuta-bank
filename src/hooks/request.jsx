
const URL = "http://185.232.169.252/api/v1/";

export function PostData(endpoint, data, token) {
    return fetch(`${URL + endpoint}`, {
        method: 'POST',
        headers: {
            "Authorization": 'Bearer ' + token,
            "Accept": '*/*',
            // 'Content-type': 'multipart/form-data'
            // "Content-Type": "multipart/form-data",
            // "type": "formData"
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(res => res.json()
    )
}



export function PutData(endpoint, data, token) {
    return fetch(`${URL + endpoint}`, {
        method: 'PUT',
        headers: {
            "Authorization": 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
}
export function PatchData(endpoint, data, token) {
    return fetch(`${URL + endpoint}`, {
        method: 'PATCH',
        headers: {
            "Authorization": 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(res => res.json())
}

export function GetData(endpoint, token) {
    return fetch(`${URL + endpoint}`, {
        method: "GET",
        headers: {
            "Authorization": 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // "Access-Control-Request-Headers": "*"
        },
    })
        .then((response) => {
            return response.json();
        })
}