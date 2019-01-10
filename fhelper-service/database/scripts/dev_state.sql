-- Create root user (root/abcd)
INSERT INTO "public"."users" ("username", "password", "email", "enabled") VALUES ('root', '$2a$10$yN2pc/5.2Rf5vXmgpNdFteR5zD0/CPZyMkVG0uajiTvY8a3N1fLae', '', true);

-- Create test accounts
INSERT INTO "public"."accounts" ("name", "type", "valuta", "user_id") VALUES ('Cash rubs', 'CASH', 'RUB', 1);
INSERT INTO "public"."accounts" ("name", "type", "valuta", "user_id") VALUES ('Alfa card rubs', 'BANK_ACCOUNT', 'RUB', 1);
INSERT INTO "public"."accounts" ("name", "type", "valuta", "user_id") VALUES ('Alfa card usd', 'BANK_ACCOUNT', 'USD', 1);
