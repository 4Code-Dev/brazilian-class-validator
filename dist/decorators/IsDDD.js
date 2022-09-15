"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateDecorator_1 = require("../utils/generateDecorator");
const brazilian_values_1 = require("brazilian-values");
/**
 * Check if value is a valid DDD.
 * @example ```js
 * import { validate } from 'class-validator';
 *
 * class Phone {
 *   @IsDDD()
 *   ddd: string;
 *
 *   constructor(ddd: string) { this.ddd = ddd };
 * }
 *
 * const errors = await validate(new Phone('81'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Phone('10'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new Phone('A#'))
 * errors.length === 0
 * //=> false
 * ```
 *
 * @see https://github.com/typestack/class-validator
 */
const IsDDD = (0, generateDecorator_1.default)(brazilian_values_1.isDDD, 'isDDD', '$property must be a valid DDD');
exports.default = IsDDD;
