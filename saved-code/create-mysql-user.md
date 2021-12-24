```sql
CREATE USER '<username>'@'<host>' IDENTIFIED BY '<password>';
GRANT ALL PRIVILEGES ON <database name>. * TO '<username>'@'<host>';
SELECT USER();
```