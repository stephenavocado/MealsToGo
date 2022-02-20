import camelize from "camelize";
import { locations } from "./location.mock"

export const locationRequest = () => {
    return new Promise((resolve, reject) => {
        const locationMock = locations[searchTerm];
        if (!locationMock) {
            reject("not found");
        }
        resolve(locationMock)
    })
};

export const locationTransform = () => {

}