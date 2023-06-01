function isTokenExpired(token) {

    if (token) {
        const payload = getPayload(token);
        const clockTimestamp = Math.floor(Date.now() / 1000);
        return {
            expired: clockTimestamp > payload.exp,
            data: payload
        }



    } else {
        return {
            expired: true,
            data: null

        }
    }


}

function getPayload(token) {
    return JSON.parse(
        Buffer.from(token.split(".")[1], "base64").toString("utf8")
    );
}


console.log(isTokenExpired('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY2ZTdlZjhkMTNhM2ZmNWI3MjhlMWY1YzhkYmUzM2E1ZDQ5MzYzNTE2NjQyYTYyYzZlMGJhN2QyMWQzZjAzYjI0MWJjOWRhY2RjMWJmMmE4In0.eyJhdWQiOiIxMCIsImp0aSI6IjY2ZTdlZjhkMTNhM2ZmNWI3MjhlMWY1YzhkYmUzM2E1ZDQ5MzYzNTE2NjQyYTYyYzZlMGJhN2QyMWQzZjAzYjI0MWJjOWRhY2RjMWJmMmE4IiwiaWF0IjoxNjg1NjMxNDU3LCJuYmYiOjE2ODU2MzE0NTcsImV4cCI6MTY4ODIyMzQ1Nywic3ViIjoiNjA1MSIsInNjb3BlcyI6W119.oznHUnofoC9ICcDro7LsWymwlJQhlXs7z03aFUTQwX5dQm7cQ4Y9tPSPJ-feSQz3m2wmWtAdmauk1pqi9EVJXV2mXDOGVrwagacWuOPo5coEfUeRaeq-_d6VGC354MWbzMXb36RjJLFofyN8pOUAu0royEmATOHj37EgtSGOiRFmRKTadGtI_fQqzsccUhAifC8iMmhnnqyel6yTouI26OtMc3O9vvmZbRAAYxqgEa_fj9F9RCQXgIT_1dt7nbMbo9Q35qdcza9W_83u07ep_AafTVzKWuUfVRV9XuYFmZv-fDoIeYWE25zEdkOyfskq2wDvqjR17i2ua7FPrjWobGz1jvjm9ROoZbqB8qtVe9LvxPAXm9rIMBwqBNlDNdR61n8UUL3tmUQ59mmVnLyXu9uz1VLi2SxVTt1cKwg3XMEWyF_W9Jra_dB-hjbXBN99ER7yrrNjYhS4PD1vt4Y1dCGKYWo6IZmuv6924YlHiZk0ZNcsUjlis_B5N8wOth2ipTz4kOi1knXDzDUXBUxP_846nW8lVKsgKrwb4eayhrD-EnA46HssIjMei2slYAJuTo7EjjhdAudkgpmbFJ_cXFbmkp8aQR3mf4vHNSuPLYPF0OHnWNQtHNzx3FAZLZSdmMs1pSFl3P0pZ3VdSbPTO-K5j0bjRDizcg37mHdlgp4'))