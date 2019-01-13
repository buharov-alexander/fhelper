-- Create root user (root/abcd)
INSERT INTO "public"."users" ("id", "username", "password", "email", "enabled") VALUES (1, 'root', '$2a$10$yN2pc/5.2Rf5vXmgpNdFteR5zD0/CPZyMkVG0uajiTvY8a3N1fLae', '', true);

-- Create test accounts
INSERT INTO "public"."accounts" ("id", "name", "type", "valuta", "user_id") VALUES (2, 'Cash rubs', 'CASH', 'RUB', 1);
INSERT INTO "public"."accounts" ("id", "name", "type", "valuta", "user_id") VALUES (3, 'Alfa card rubs', 'BANK_ACCOUNT', 'RUB', 1);
INSERT INTO "public"."accounts" ("id", "name", "type", "valuta", "user_id") VALUES (4, 'Alfa card usd', 'BANK_ACCOUNT', 'USD', 1);

-- Create test account states
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (5, '2019-01-01', 1000, 2);
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (6, '2019-01-02', 3000, 3);
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (7, '2019-01-01', 100, 4);
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (8, '2019-01-02', 200, 4);