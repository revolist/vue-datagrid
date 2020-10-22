# revogrid-number
Number column type for RevoGrid system.

Column type depends on [numbro](http://numbrojs.com/format.html) library.
Use any format you love to assign number format for your grid.
For example:

```js
import NumberColumnType from '@revolist/revogrid-number';
const columnTypes = {
    'numeric': new NumberColumnType({thousandSeparated: true, mantissa: 5})
};
const columns = [
    {
        prop: 'Num',
        name: 'My number',
        columnType: 'numeric'
    },
    {
        prop: 'Num2',
        name: 'My number2',
        columnType: 'numeric'
    }
];
const rows = [{
    'Num': 132322332,
    'Num2': 32322
}];

const grid = document.querySelector('revo-grid');
grid.columnTypes = columnTypes;
grid.source = rows;
grid.columns = columns;
```

