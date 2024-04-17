"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mbank1713365973756 = void 0;
class Mbank1713365973756 {
    constructor() {
        this.name = 'Mbank1713365973756';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`auth\` CHANGE \`fingerPrintId\` \`fingerprintId\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`auth\` DROP COLUMN \`fingerprintId\``);
            yield queryRunner.query(`ALTER TABLE \`auth\` ADD \`fingerprintId\` varchar(255) NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`auth\` DROP COLUMN \`fingerprintId\``);
            yield queryRunner.query(`ALTER TABLE \`auth\` ADD \`fingerprintId\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`auth\` CHANGE \`fingerprintId\` \`fingerPrintId\` varchar(255) NULL`);
        });
    }
}
exports.Mbank1713365973756 = Mbank1713365973756;
//# sourceMappingURL=1713365973756-mbank.js.map