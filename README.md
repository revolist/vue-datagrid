# revogrid-numeral.js
Number column type for RevoGrid system based on [numeraljs](http://numeraljs.com) library.

Use any format you love to assign number format for your grid.

## Output

### Number

|Number|Format|String|
|--- |--- |--- |
|10000|'0,0.0000'|10,000.0000|
|10000.23|'0,0'|10,000|
|10000.23|'+0,0'|+10,000|
|-10000|'0,0.0'|-10,000.0|
|10000.1234|'0.000'|10000.123|
|100.1234|'00000'|00100|
|1000.1234|'000000,0'|001,000|
|10|'000.00'|010.00|
|10000.1234|'0[.]00000'|10000.12340|
|-10000|'(0,0.0000)'|(10,000.0000)|
|-0.23|'.00'|-.23|
|-0.23|'(.00)'|(.23)|
|0.23|'0.00000'|0.23000|
|0.23|'0.0[0000]'|0.23|
|1230974|'0.0a'|1.2m|
|1460|'0 a'|1 k|
|-104000|'0a'|-104k|
|1|'0o'|1st|
|100|'0o'|100th|

### Currency

|Number|Format|String|
|--- |--- |--- |
|1000.234|'$0,0.00'|$1,000.23|
|1000.2|'0,0[.]00 $'|1,000.20 $|
|1001|'$ 0,0[.]00'|$ 1,001|
|-1000.234|'($0,0)'|($1,000)|
|-1000.234|'$0.00'|-$1000.23|
|1230974|'($ 0.00 a)'|$ 1.23 m|



## Usage in revo-grid:

```js
import NumberColumnType from '@revolist/revogrid-column-numeral';
const columnTypes = {
    'numeric': new NumberColumnType('0,0')
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
    'Num': 1000,
    'Num2': 1000
}];

const grid = document.querySelector('revo-grid');
grid.columnTypes = columnTypes;
grid.source = rows;
grid.columns = columns;


// '1,000'
```



## Advanced

If you need to get numeric library instance you can do this as simple as:

```js
import NumberColumnType from '@revolist/revogrid-column-numeral';
const numeral = NumberColumnType.getNumeralInstance;

numeral.register('format', 'percentage', {});
```

Also plugin provides access to beforeValueFormatted instance:
emiter?: (event: string, instance: Numeral)

```js
import NumberColumnType from '@revolist/revogrid-column-numeral';
const columnTypes = {
    'numeric': new NumberColumnType('0,0', (eventName, numeralInstance) => {
        // numeralInstance operations
    }),
};
```
