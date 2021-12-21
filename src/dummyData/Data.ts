import { Column } from "../Classes/Column"
import { ColumnItem } from "../Classes/ColumnItem"

const column1 = new Column('Colonna 1');
const column2 = new Column('Colonna 2');
const column3 = new Column('Colonna 3');
const column4 = new Column('Colonna 4');
const column5 = new Column('Colonna 5');
const column6 = new Column('Colonna 6');
const column7 = new Column('Colonna 7');


const item1= new ColumnItem('elemento1','descrizione elemento1')
const item2= new ColumnItem('elemento2','descrizione elemento2')
const item3= new ColumnItem('elemento3','descrizione elemento3')
const item4= new ColumnItem('elemento4','descrizione elemento4')
const item5= new ColumnItem('elemento5','descrizione elemento5')


column1.addItemToColumn(item1)
column1.addItemToColumn(item2)
column1.addItemToColumn(item3)
column1.addItemToColumn(item4)
column1.addItemToColumn(item5)


export const board:Column[]=[]
board.push(column1)
board.push(column2)
board.push(column3);
board.push(column4);
board.push(column5)
board.push(column6)
board.push(column7)
