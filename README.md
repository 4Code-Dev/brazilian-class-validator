# brazilian-class-validator

Additional decorators for class-validator using validators for Brazilian values

> Brazilian Validators came from [brazilian-values](https://github.com/VitorLuizC/brazilian-values)

**Replacement for abandoned library** [brazilian-class-validator](https://www.npmjs.com/package/brazilian-class-validator)<br>

[![NPM](https://nodei.co/npm/@clockinit/brazilian-class-validator.png)](https://nodei.co/npm/@clockinit/brazilian-class-validator/)

-   Solves packages update with critical security

## Install

```terminal
# Using npm
npm install @clockinit/brazilian-class-validator --save

# Using yarn
yarn add @clockinit/brazilian-class-validator
```

## Use

The use of `@clockinit/brazilian-class-validator` is just like using [`class-validator`](https://github.com/typestack/class-validator) decorators.

```typescript
import { IsCPF, IsDate } from "@clockinit/brazilian-class-validator";
import { validate } from "class-validator";

class BrazilianGuy {
    @IsCPF()
    cpf: string;

    @IsDate()
    birthday: string;
}

const bg = new BrazilianGuy();
bg.cpf = "123";
bg.birthday = "30/12/2004";

validate(bg).then((errors) => console.log(errors));
```
