import * as Joi from "joi";

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.env`,
            validationSchema: Joi.object({
                PORT: Joi.number().default(3000),
                DB_HOST: Joi.string().required(),
                DB_PORT: Joi.number().required(),
                DB_USER: Joi.string().required(),
                DB_PASSWORD: Joi.string().required(),
                DB_NAME: Joi.string().required(),
                JWT_ACCESS_SECRET_KEY: Joi.string().required(),
                JWT_ACCESS_EXPIRATION_TIME: Joi.string().required(),
                JWT_REFRESH_SECRET_KEY: Joi.string().required(),
                JWT_REFRESH_EXPIRATION_TIME: Joi.string().required(),
            }),
        }),
    ],
})
export class ConfigurationModule {}
