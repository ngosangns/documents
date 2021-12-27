```sql
CREATE USER '<username>'@'%' IDENTIFIED BY '<password>';
GRANT ALL PRIVILEGES ON <database name>. * TO 'nsenglish'@'%';
CREATE USER '<username>'@'localhost' IDENTIFIED BY '<password>';
GRANT ALL PRIVILEGES ON <database name>. * TO '<username>'@'localhost';
```