import mysql from 'mysql2/promise';
var db = mysql.createPool({
    user: 'root',
    database: 'node-api',
    host: 'localhost',
    password: process.env.password,
});
//SELECT statement
var _a = await db.query('SELECT * FROM student'), result = _a[0], structure = _a[1];
console.log(result);
//UPDATE statement
// const r = await db.query('UPDATE student SET age=26 WHERE id=1');
// console.log(r);
// DELETE
// const result = await db.query('DELETE FROM student WHERE id = ?', [1]);
// console.log(result);
// // INSERT
// const result = await db.query(
//   'INSERT INTO student (name, age,grade,address) VALUES ("Santona", 25, "A", "Lubbock,Texas")'
// );
// console.log(result);
function deleteFromDatabase(table, primarykey) {
    db.query('DELETE FROM ?? WHERE id = ?', [table, primarykey]);
}
deleteFromDatabase('student', 1);
deleteFromDatabase('subject', 1);
