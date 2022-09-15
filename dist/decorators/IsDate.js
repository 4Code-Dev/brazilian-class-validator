"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateDecorator_1 = require("../utils/generateDecorator");
const brazilian_values_1 = require("brazilian-values");
/**
 * Check if a brazilian formatted date is valid.
 * @example ```js
 * import { validate } from 'class-validator';
 *
 * class Holyday {
 *   @IsDate()
 *   date: string;
 *
 *   constructor(date: string) { this.date = date };
 * }
 *
 * const errors = await validate(new Holyday('03/08/2017'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Holyday('28/13/2017'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new Holyday('03-08-2017'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new Holyday('31/03/18'))
 * errors.length === 0
 * //=> false
 * ```
 *
 * @see https://github.com/typestack/class-validator
 */
const IsDate = (0, generateDecorator_1.default)(brazilian_values_1.isDate, 'isDate', '$property must be a valid brazilian formatted date');
exports.default = IsDate;
