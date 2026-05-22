CREATE DATABASE service_hp;

USE service_hp;

CREATE TABLE service (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100),
    tipe_hp VARCHAR(100),
    kerusakan TEXT
);
