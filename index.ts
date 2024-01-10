import mysql from 'mysql2/promise';

const db = mysql.createPool({
  user: 'root',
  database: 'node-api',
  host: 'localhost',
  password: process.env.password,
});

//SELECT statement
const [result, structure] = await db.query('SELECT * FROM student');
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

function deleteFromDatabase(table: string, primarykey: number) {
  db.query('DELETE FROM ?? WHERE id = ?', [table, primarykey]);
}

deleteFromDatabase('student', 1);
deleteFromDatabase('subject', 1);
