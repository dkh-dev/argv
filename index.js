'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parse_argv_1 = __importDefault(require("@dkh-dev/parse-argv"));
const argv = parse_argv_1.default(process.argv);
exports.default = argv;
