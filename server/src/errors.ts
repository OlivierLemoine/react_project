export const InvalidType = (varName: string) => `{"type":"InvalidType","message":"${varName} doesn't have a valid type"}`;

export const OutOfBound = (varName: string) => `{"type":"OutOfBound","message":"${varName} is not part of possible value"}`;

export const AlreadyExist = (varName: string) => `{"type":"AlreadyExist","message":"${varName} already exist"}`;