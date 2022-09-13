import { registerDecorator } from 'class-validator';
const generateDecorator = (validationFunc, name, message) => {
    return (validationOptions) => {
        return (object, propertyName) => {
            registerDecorator({
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
export default generateDecorator;
