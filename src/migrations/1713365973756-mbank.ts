import { MigrationInterface, QueryRunner } from "typeorm";

export class Mbank1713365973756 implements MigrationInterface {
    name = 'Mbank1713365973756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`auth\` CHANGE \`fingerPrintId\` \`fingerprintId\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`auth\` DROP COLUMN \`fingerprintId\``);
        await queryRunner.query(`ALTER TABLE \`auth\` ADD \`fingerprintId\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`auth\` DROP COLUMN \`fingerprintId\``);
        await queryRunner.query(`ALTER TABLE \`auth\` ADD \`fingerprintId\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`auth\` CHANGE \`fingerprintId\` \`fingerPrintId\` varchar(255) NULL`);
    }

}
