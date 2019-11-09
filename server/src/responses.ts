export const Ok = (obj?: any) => {
    if (obj)
        return JSON.stringify({
            status: "Ok",
            data: obj,
        });
    else return '{"status":"Ok"}'
};

export const InvalidType = (varName: string) => `{"status":"Err","type":"InvalidType","message":"${varName} doesn't have a valid type"}`;

export const OutOfBound = (varName: string) => `{"status":"Err","type":"OutOfBound","message":"${varName} is not part of possible value"}`;

export const AlreadyExist = (varName: string) => `{"status":"Err","type":"AlreadyExist","message":"${varName} already exist"}`;

export const NotImplemented = () => `{"status":"Err","type":"NotImplemented","message":"Feature not yet implemented"}`;