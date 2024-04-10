import PasswordValidator from "password-validator";

export function passwordValidator(password: string) {
    const validation = new PasswordValidator();
    return validation.min(2).max(8).validate(password);
}