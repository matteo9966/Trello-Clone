import { Column } from "../Classes/Column";
import { ColumnItem } from "../Classes/ColumnItem";

const { ...column1 } = new Column("Colonna 1");
const { ...column2 } = new Column("Colonna 2");
const { ...column3 } = new Column("Colonna 3");
const { ...column4 } = new Column("Colonna 4");
const { ...column5 } = new Column("Colonna 5");
const { ...column6 } = new Column("Colonna 6");
const { ...column7 } = new Column("Colonna 7");

const { ...item1 } = new ColumnItem("elemento1", "descrizione elemento1");
const { ...item2 } = new ColumnItem("elemento2", "descrizione elemento2");
const { ...item3 } = new ColumnItem("elemento3", "descrizione elemento3");
const { ...item4 } = new ColumnItem("elemento4", "descrizione elemento4");
const { ...item5 } = new ColumnItem("elemento5", "descrizione elemento5");
const { ...item6 } = new ColumnItem("elemento6", "descrizione elemento6");
const { ...item7 } = new ColumnItem("elemento7", "descrizione elemento7");
const { ...item8 } = new ColumnItem("elemento8", "descrizione elemento8");
const { ...item9 } = new ColumnItem("elemento9", "descrizione elemento9");
const { ...item10 } = new ColumnItem("elemento10", "descrizione elemento10");
const { ...item11 } = new ColumnItem("elemento11", "descrizione elemento11");
const { ...item12 } = new ColumnItem("elemento12", "descrizione elemento12");
const { ...item13 } = new ColumnItem("elemento13", "descrizione elemento13");
const { ...item14 } = new ColumnItem("elemento14", "descrizione elemento14");

column1.items.push(item1);
column1.items.push(item2);
column1.items.push(item3);
column1.items.push(item4);
column1.items.push(item5);
column1.items.push(item6);
column1.items.push(item7);
column1.items.push(item8);
column1.items.push(item9);
column1.items.push(item10);
column1.items.push(item11);
column1.items.push(item12);
column1.items.push(item13);
column1.items.push(item14);


export const board: Column[] = [];
board.push(column1);
board.push(column2);
board.push(column3);
// board.push(column4);
// board.push(column5);
// board.push(column6);
// board.push(column7);
