-- Create root user (root/abcd)
INSERT INTO "public"."users" ("id", "username", "password", "email", "enabled") VALUES (1, 'root', '$2a$10$yN2pc/5.2Rf5vXmgpNdFteR5zD0/CPZyMkVG0uajiTvY8a3N1fLae', '', true);
-- Create test user (test/abcd)
INSERT INTO "public"."users" ("id", "username", "password", "email", "enabled") VALUES (9, 'test', '$2a$10$yN2pc/5.2Rf5vXmgpNdFteR5zD0/CPZyMkVG0uajiTvY8a3N1fLae', '', true);

-- Create test accounts
INSERT INTO "public"."accounts" ("id", "name", "type", "valuta", "owner") VALUES (2, 'Cash rubs', 'CASH', 'RUB', 'root');
INSERT INTO "public"."accounts" ("id", "name", "type", "valuta", "owner") VALUES (3, 'Alfa card rubs', 'BANK_ACCOUNT', 'RUB', 'test');
INSERT INTO "public"."accounts" ("id", "name", "type", "valuta", "owner") VALUES (4, 'Alfa card usd', 'BANK_ACCOUNT', 'USD', 'root');

-- Create test account states
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (5, '2019-01-01', 0, 2);
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (6, '2019-01-02', 0, 3);
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (7, '2019-01-01', 0, 4);
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (8, '2019-01-02', 100, 4);