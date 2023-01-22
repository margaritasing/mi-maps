export const getUserGeolocation = async():Promise<[number, number]> => {

    return new Promise((resolve, reject)=> {
        navigator.geolocation.getCurrentPosition(
            ({coords }) => {
                resolve([coords.longitude, coords.latitude]);
            },
            (err ) => {
                alert("No se pudo tener la geolocalización");
                console.log(err);
                reject(); 
            }
        )

    })
    
}