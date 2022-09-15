"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const generateDecorator = (validationFunc, name, message) => {
    return (validationOptions) => {
        return (object, propertyName) => {
            (0, class_validator_1.registerDecorator)({
                name: name,
                target: object.constructor,
                propertyName: propertyName,
                options: Object.assign({ message: message }, validationOptions),
                validator: {
                    validate(value) {
                        return validationFunc(String(value));
                    },
                },
            });
        };
    };
};
exports.default = generateDecorator;
