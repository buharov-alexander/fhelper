CREATE SEQUENCE public.id_seq
  START WITH 1
  INCREMENT BY 1
  NO MINVALUE
  NO MAXVALUE
  CACHE 1;

CREATE TABLE public.users
(
  id integer NOT NULL DEFAULT nextval('id_seq'::regclass),
  username character varying(80) NOT NULL,
  password character varying(300) NOT NULL,
  email character varying(80) NOT NULL,
  enabled boolean NOT NULL,
  CONSTRAINT users_pkey1 PRIMARY KEY (id),
  CONSTRAINT unique_email UNIQUE (email),
  CONSTRAINT unique_username UNIQUE (username)
);

CREATE TABLE public.accounts (
  id integer NOT NULL DEFAULT nextval('id_seq'::regclass),
  name character varying(80) NOT NULL,
  type character varying(40) NOT NULL,
  valuta character varying(40) NOT NULL,
  user_id integer NOT NULL,
  CONSTRAINT accounts_pkey1 PRIMARY KEY (id),
  CONSTRAINT unique_name UNIQUE (name),
  CONSTRAINT accounts_fkey1 FOREIGN KEY (user_id)
      REFERENCES public.users (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
);