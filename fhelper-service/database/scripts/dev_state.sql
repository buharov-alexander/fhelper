-- Create root user (root/abcd)
INSERT INTO "public"."users" ("id", "username", "password", "email", "enabled") VALUES (1, 'root', '$2a$10$yN2pc/5.2Rf5vXmgpNdFteR5zD0/CPZyMkVG0uajiTvY8a3N1fLae', '', true);
-- Create test user (test/abcd)
INSERT INTO "public"."users" ("id", "username", "password", "email", "enabled") VALUES (2, 'test', '$2a$10$yN2pc/5.2Rf5vXmgpNdFteR5zD0/CPZyMkVG0uajiTvY8a3N1fLae', '', true);

-- Create test accounts
INSERT INTO "public"."accounts" ("id", "name", "type", "valuta", "owner") VALUES (10, 'Cash rubs', 'CASH', 'RUB', 'root');
INSERT INTO "public"."accounts" ("id", "name", "type", "valuta", "owner") VALUES (11, 'Alfa card rubs', 'BANK_ACCOUNT', 'RUB', 'root');
INSERT INTO "public"."accounts" ("id", "name", "type", "valuta", "owner") VALUES (12, 'Alfa deposit', 'DEPOSIT', 'USD', 'root');
INSERT INTO "public"."accounts" ("id", "name", "type", "valuta", "owner") VALUES (13, 'BCS account', 'BROKER_ACCOUNT', 'RUB', 'root');
INSERT INTO "public"."accounts" ("id", "name", "type", "valuta", "owner") VALUES (14, 'Gold', 'OTHER', 'EUR', 'root');

-- Create test account states
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (21, '2019-01-01', 1000, 10);
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (22, '2019-01-02', 150000, 11);
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (23, '2019-01-01', 500000, 12);
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (24, '2019-01-02', 100000, 13);
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (25, '2019-01-02', 0, 14);
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (26, '2019-01-10', 2000, 10);
INSERT INTO "public"."account_states" ("id", "date", "balance", "account_id") VALUES (27, '2019-02-02', 500, 10);